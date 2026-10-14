#!/usr/bin/env bash
# Launch test on an Android emulator: install, start, screenshot, fail on a crash or a JavaScript error.
# Problems are reported as GitHub annotations (::error::) so they are visible without the full log.
set -u
PKG=com.sachitss.lingua
APK=app/android/app/build/outputs/apk/debug/app-debug.apk
mkdir -p smoke
fail() { echo "::error title=Android launch test::$1"; exit 1; }
adb wait-for-device
adb install -r "$APK" || fail "adb install failed"
adb shell pm grant $PKG android.permission.POST_NOTIFICATIONS || true
adb shell pm grant $PKG android.permission.RECORD_AUDIO || true
adb logcat -c
adb shell am start -W -n $PKG/.MainActivity || fail "am start failed"
# Wait up to 60 s for the web view to report that the app has rendered.
for i in $(seq 1 30); do
  sleep 2
  adb logcat -d > smoke/android-logcat.txt
  grep -q "Capacitor" smoke/android-logcat.txt && [ $i -ge 8 ] && break
done
adb exec-out screencap -p > smoke/android-launch.png
adb logcat -d > smoke/android-logcat.txt
PID=$(adb shell pidof $PKG | tr -d '\r')
echo "process: ${PID:-none}"
# Only crashes of Lingua itself count; emulator system processes (e.g. Play services) sometimes crash on boot.
CRASH=$(grep -E "AndroidRuntime: Process: $PKG|ANR in $PKG" smoke/android-logcat.txt | head -5 | tr '\n' ' ')
OTHER=$(grep -E "FATAL EXCEPTION" smoke/android-logcat.txt | head -3 | tr '\n' ' ')
[ -n "$OTHER" ] && [ -z "$CRASH" ] && echo "::warning title=Android launch test::crash in another process (ignored): $OTHER"
JSERR=$(grep -E "Capacitor/Console.*(Uncaught|TypeError|ReferenceError|SyntaxError)" smoke/android-logcat.txt | head -5 | tr '\n' ' ')
grep -E "Capacitor/Console" smoke/android-logcat.txt | head -20 || true
[ -n "$CRASH" ] && fail "crash: $CRASH"
[ -n "$JSERR" ] && fail "JavaScript error: $JSERR"
[ -n "$PID" ] || fail "app not running after launch; last lines: $(tail -5 smoke/android-logcat.txt | tr '\n' ' ')"
echo "Android launch test passed"
