#!/usr/bin/env bash
# Launch test on an Android emulator: install, start, screenshot, fail on a crash or a JavaScript error.
set -u
PKG=com.sachitss.lingua
APK=app/android/app/build/outputs/apk/debug/app-debug.apk
mkdir -p smoke
adb install -r "$APK" || exit 1
adb shell pm grant $PKG android.permission.POST_NOTIFICATIONS || true
adb shell pm grant $PKG android.permission.RECORD_AUDIO || true
adb logcat -c
adb shell am start -W -n $PKG/.MainActivity || exit 1
sleep 25
adb exec-out screencap -p > smoke/android-launch.png
# Skip onboarding through the web view's own button, then capture the home screen.
adb shell input keyevent 111 || true
sleep 3
adb exec-out screencap -p > smoke/android-home.png
adb logcat -d > smoke/android-logcat.txt
PID=$(adb shell pidof $PKG | tr -d '\r')
echo "process: ${PID:-none}"
[ -n "$PID" ] || { echo "App is not running"; exit 1; }
if grep -E "FATAL EXCEPTION|Process: $PKG" smoke/android-logcat.txt; then echo "Crash found"; exit 1; fi
if grep -E "Capacitor/Console.*(Uncaught|TypeError|ReferenceError|SyntaxError)" smoke/android-logcat.txt; then echo "JavaScript error"; exit 1; fi
grep -E "Capacitor/Console" smoke/android-logcat.txt | head -20 || true
echo "Android launch test passed"
