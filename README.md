![node fullykiosk](./assets/banner.png)

[![MINIFIED SIZE](https://img.shields.io/bundlephobia/min/fullykiosk.svg)]()
[![COVERAGE](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)]()
[![LANGUAGES](https://img.shields.io/github/languages/top/v3xlabs/fullykiosk)]()
[![DEPENDENCIRES](https://img.shields.io/badge/dependencies-0-brightgreen.svg)]()
[![NPM](https://img.shields.io/npm/dt/fullykiosk)]()

Typescript Friendly React Hooks for the Fully Kiosk Browser App

This library exposes multiple react hooks that you can use to interface with your Fully Kiosk Browser App. By default the fully kiosk API is globally injected into the window object, so you could use it directly. However, this library provides a more typescript friendly interface.

## How it works

## Installation

Using `npm`:

```sh
npm install fullykiosk
```

or if you prefer to use the `yarn` package manager:

```sh
yarn add fullykiosk
```

## Usage

```ts

```

## Progress

### Fully Kiosk API functions implemented

- [x] getCurrentLocale()
- [x] getIp4Address()
- [x] getIp6Address()
- [x] getHostname()
- [x] getHostname6()
- [x] getMacAddress()
- [x] getMacAddressForInterface(interface)
- [x] getWifiSsid()
- [x] getWifiBssid()  
- [x] getWifiSignalLevel()  
- [x] getSerialNumber()
- [x] getSerialNumberDeviceOwner()
- [x] getAndroidId()
- [x] getDeviceId()
- [x] getDeviceName()
- [x] getImei()
- [x] getSimSerialNumber()
- [x] getBatteryLevel()
- [x] getScreenBrightness()
- [x] getScreenOrientation()
- [x] getDisplayWidth()
- [x] getDisplayHeight()
- [x] getScreenOn()
- [x] isPlugged()
- [x] isKeyboardVisible()
- [x] isWifiEnabled()
- [x] isWifiConnected()
- [x] isNetworkConnected()
- [ ] isBluetoothEnabled()
- [ ] isScreenRotationLocked()
- [ ] getFullyVersion()
- [ ] getFullyVersionCode()
- [ ] getWebviewVersion()
- [ ] getAndroidVersion()
- [ ] getAndroidSdk()
- [ ] getDeviceModel()
- [ ] getInternalStorageTotalSpace()
- [ ] getInternalStorageFreeSpace()
- [ ] getExternalStorageTotalSpace()
- [ ] getExternalStorageFreeSpace()
- [ ] getSensorInfo()
- [ ] getSensorValue(int type)
- [ ] getSensorValues(int type)
- [ ] getAllRxBytesMobile()
- [ ] getAllTxBytesMobile()
- [x] getAllRxBytesWifi()
- [x] getAllTxBytesWifi()

- [x] turnScreenOn()
- [x] turnScreenOff() 
- [x] turnScreenOff(boolean keepAlive) 
- [x] forceSleep()
- [ ] showToast(String text) 
- [x] setScreenBrightness(float level)
- [x] enableWifi() // In Android 10+ only with provisioned devices
- [x] disableWifi() // In Android 10+ only with provisioned devices
- [ ] enableBluetooth()
- [ ] disableBluetooth()
- [x] showKeyboard()
- [x] hideKeyboard()
- [x] openWifiSettings()
- [ ] openBluetoothSettings()
- [ ] vibrate(int millis)
- [ ] sendHexDataToTcpPort(String hexData, String host, int port)
- [ ] showNotification(String title, String text, String url, boolean highPriority) // ver. 1.33+
- [ ] log(int type, String tag, String message) // ver. 1.41+
- [ ] copyTextToClipboard(String text)
- [ ] getClipboardText()
- [ ] getClipboardHtmlText()

- [ ] deleteFile(String path)   
- [ ] deleteFolder(String path) // recursive!
- [ ] emptyFolder(String path)  // recursive, ver. 1.30+
- [ ] createFolder(String path) // ver. 1.42+
- [ ] getFileList(String folder)  // get JSON array, ver. 1.31+
- [ ] downloadFile(String url, String dirName)
- [ ] unzipFile(String fileName) // ver. 1.40.2+
- [ ] downloadAndUnzipFile(String url, String dirName)
- [ ] bind('onDownloadSuccess','todo("$url","$dir","$code","$fileLength","$lastModified","$mimetype");')
- [ ] bind('onDownloadFailure','todo("$url","$dir","$code");')
- [ ] bind('onUnzipSuccess','todo("$url","$dir");')
- [ ] bind('onUnzipFailure','todo("$url","$dir","$message");')

- [ ] textToSpeech(String text)
- [ ] textToSpeech(String text, String locale)
- [ ] textToSpeech(String text, String locale, String engine)
- [ ] textToSpeech(String text, String locale, String engine, boolean queue)
- [ ] stopTextToSpeech()
- [ ] playVideo(String url, boolean loop, boolean showControls, boolean exitOnTouch, boolean exitOnCompletion)
- [ ] stopVideo()
- [ ] setAudioVolume(int level, int stream)
- [ ] playSound(String url, boolean loop)
- [ ] playSound(String url, boolean loop, int stream)
- [ ] stopSound()
- [ ] showPdf(String url)
- [ ] getAudioVolume(int stream)
- [ ] isWiredHeadsetOn()
- [ ] isMusicActive()

- [ ] loadStartUrl()
- [ ] setActionBarTitle(String text)
- [x] startScreensaver()
- [x] stopScreensaver()
- [x] startDaydream()
- [x] stopDaydream()
- [ ] addToHomeScreen()
- [ ] print()
- [ ] exit()
- [ ] restartApp()
- [ ] getScreenshotPngBase64()
- [ ] loadStatsCSV()
- [ ] clearCache()
- [ ] clearFormData()
- [ ] clearHistory()
- [ ] clearCookies()
- [ ] clearCookiesForUrl(String url)
- [ ] clearWebstorage()
- [ ] focusNextTab()  
- [ ] focusPrevTab()
- [ ] focusTabByIndex(int index)
- [ ] getCurrentTabIndex()
- [ ] shareUrl()
- [ ] closeTabByIndex(int index)
- [ ] closeThisTab()
- [ ] getTabList()
- [ ] loadUrlInTabByIndex(int index, String url)
- [ ] loadUrlInNewTab(String url, boolean focus)
- [ ] getThisTabIndex()
- [ ] getCurrentTabIndex()
- [ ] focusThisTab()
- [ ] focusTabByIndex(int index)

- [ ] scanQrCode(String prompt, String resultUrl)
- [ ] scanQrCode(String prompt, String resultUrl, int cameraId, int timeout, boolean beepEnabled, boolean showCancelButton)
- [ ] scanQrCode(String prompt, String resultUrl, int cameraId, int timeout, boolean beepEnabled, boolean showCancelButton, boolean useFlashlight)
- [ ] bind('onQrScanSuccess','todo(\'$code\');')
- [ ] bind('onQrScanCancelled','todo();')

- [ ] btOpenByMac(String mac)
- [ ] btOpenByUuid(String uuid)
- [ ] btOpenByName(String name)
- [ ] fully.btIsConnected()
- [ ] fully.btGetDeviceInfoJson()
- [ ] fully.btClose()
- [ ] btSendStringData(String stringData)
- [ ] btSendHexData(String hexData)
- [ ] btSendByteData(byte[] data)
- [ ] bind('onBtConnectSuccess','todo("$device");');
- [ ] bind('onBtConnectFailure','todo();');
- [ ] bind('onBtDataRead','todo("$data");');

- [ ] nfcScanStart();
- [ ] nfcScanStart(int flags, int debounceMs);
- [ ] nfcScanStop();
- [ ] bind('onNdefDiscovered','todo("$serial", "$message", "$data");');
- [ ] bind('onNfcTagDiscovered','todo("$serial", "$type", "$message", "$data");');
- [ ] bind('onNfcTagRemoved','todo("$serial");');

- [x] bind('screenOn','todo();')
- [x] bind('screenOff','todo();')
- [x] bind('showKeyboard','todo();')
- [x] bind('hideKeyboard','todo();')
- [x] bind('networkDisconnect','todo();')
- [x] bind('networkReconnect','todo();')
- [ ] bind('internetDisconnect','todo();')
- [ ] bind('internetReconnect','todo();')
- [x] bind('unplugged','todo();')
- [x] bind('pluggedAC','todo();')
- [x] bind('pluggedUSB','todo();')
- [x] bind('pluggedWireless','todo();')
- [ ] bind('onScreensaverStart','todo();')
- [ ] bind('onScreensaverStop','todo();')
- [ ] bind('onDaydreamStart','todo();')
- [ ] bind('onDaydreamStop','todo();')
- [x] bind('onBatteryLevelChanged','todo();')
- [ ] bind('volumeUp','todo();')
- [ ] bind('volumeDown','todo();')
- [ ] bind('onMotion','todo();')
- [ ] bind('facesDetected','todo($number);')
- [ ] bind('onDarkness','todo();')
- [ ] bind('onMovement','todo();') 
- [ ] bind('onIBeacon','todo("$id1","$id2","$id3",$distance);')
- [ ] bind('broadcastReceived','todo("$action","$extras");');
- [ ] bind('onQrScanSuccess','todo("$code","$extras");');

- [ ] startApplication(String packageName)
- [ ] startApplication(String packageName, String action, String url)
- [ ] startIntent(String url)
- [ ] broadcastIntent(String url)
- [ ] isInForeground()
- [ ] bringToForeground()
- [ ] bringToForeground(long millis)
- [ ] bringToBackground()
- [ ] installApkFile(String url)
- [ ] enableMaintenanceMode()
- [ ] disableMaintenanceMode()
- [ ] setMessageOverlay(String text)
- [ ] registerBroadcastReceiver(String action)
- [ ] unregisterBroadcastReceiver(String action)

- [ ] fully.startMotionDetection()
- [ ] stopMotionDetection()
- [ ] isMotionDetectionRunning()
- [ ] getCamshotJpgBase64()
- [ ] getFaceNumber()
- [ ] triggerMotion()
- [ ] bind('onMotion','todo();')

- [ ] fully.getStartUrl()
- [ ] fully.setStartUrl(String url)
- [ ] fully.getBooleanSetting(String key)
- [ ] fully.getStringSetting(String key)
- [ ] fully.setBooleanSetting(String key, boolean value)
- [ ] fully.setStringSetting(String key, String value)
- [ ] fully.importSettingsFile(String url)

## Contributors

[![](https://contrib.rocks/image?repo=v3xlabs/node-fullykiosk)](https://github.com/v3xlabs/node-fullykiosk/graphs/contributors)

## LICENSE

This package is licensed under the [GNU Lesser General Public License](https://www.gnu.org/licenses/lgpl-3.0).
