#!/usr/bin/env bash
# Launch test on an iPhone simulator: install, start, screenshot, check the process is alive.
set -u
APP="$1"; BUNDLE=com.sachitss.lingua
mkdir -p smoke
DEV=$(xcrun simctl list devices available -j | python3 -c "import json,sys; d=json.load(sys.stdin)['devices']; print(next(x['udid'] for k in sorted(d,reverse=True) if 'iOS' in k for x in d[k] if x['name'].startswith('iPhone')))")
echo "simulator: $DEV"
xcrun simctl boot "$DEV" || true
xcrun simctl bootstatus "$DEV" -b
xcrun simctl install "$DEV" "$APP" || exit 1
xcrun simctl launch "$DEV" $BUNDLE || exit 1
sleep 25
xcrun simctl io "$DEV" screenshot smoke/ios-launch.png
xcrun simctl spawn "$DEV" launchctl list | grep -i "$BUNDLE" || { echo "App is not running"; exit 1; }
echo "iOS launch test passed"
