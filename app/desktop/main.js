// Lingua desktop app: the same web app as the PWA, served from the app:// scheme so fetch and ES modules work offline.
const { app, BrowserWindow, protocol, net, session, shell } = require("electron");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const SMOKE = process.argv.includes("--smoke");
const WWW = app.isPackaged ? path.join(process.resourcesPath, "www") : path.join(__dirname, "..", "www");

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } },
]);

function createWindow() {
  const win = new BrowserWindow({
    width: 1100, height: 820, minWidth: 380, minHeight: 600,
    title: "Lingua", backgroundColor: "#F7F6F2", autoHideMenuBar: true, show: !SMOKE,
    icon: path.join(__dirname, "build", "icon.png"),
    webPreferences: { contextIsolation: true, sandbox: true },
  });
  // External links (dictionaries, e-mail) open in the default browser.
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: "deny" }; });
  win.webContents.on("will-navigate", (e, url) => { if (!url.startsWith("app://")) { e.preventDefault(); shell.openExternal(url); } });
  win.loadURL("app://lingua/index.html");

  if (SMOKE) {
    const errors = [];
    win.webContents.on("console-message", (e) => { if (e.level === "error") errors.push(e.message); });
    win.webContents.on("did-finish-load", async () => {
      await new Promise((r) => setTimeout(r, 4000));
      const r = await win.webContents.executeJavaScript(`({ brand: document.querySelector(".brand b")?.textContent,
        title: document.title, tabs: document.querySelectorAll(".tab").length,
        footer: document.querySelector("footer.powered")?.innerText || "" })`);
      const ok = r.brand === "lingua" && r.tabs === 6 && /Sachit Shrestha/.test(r.footer) && errors.length === 0;
      console.log("SMOKE", JSON.stringify({ ...r, errors }), ok ? "PASS" : "FAIL");
      app.exit(ok ? 0 : 1);
    });
    win.webContents.on("did-fail-load", (_e, code, desc) => { console.log("SMOKE load failed", code, desc); app.exit(1); });
  }
}

app.whenReady().then(() => {
  protocol.handle("app", (req) => {
    const p = decodeURIComponent(new URL(req.url).pathname);
    const file = path.normalize(path.join(WWW, p === "/" ? "index.html" : p));
    if (!file.startsWith(WWW)) return new Response("Forbidden", { status: 403 });
    return net.fetch(pathToFileURL(file).toString());
  });
  // Microphone for pronunciation practice; everything else is refused.
  session.defaultSession.setPermissionRequestHandler((_wc, perm, cb) => cb(perm === "media"));
  createWindow();
  app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
