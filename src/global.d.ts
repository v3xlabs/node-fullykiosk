/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable unicorn/prevent-abbreviations */

// Stubborn Fully Kiosk API
declare namespace fully {
    function getCurrentLocale(): string;
    function getIp4Address(): string;
    function getIp6Address(): string;
    function getHostname(): string;
    function getHostname6(): string;
    function getMacAddress(): string;
    function getMacAddressForInterface(interface: string): string;
    function getWifiSsid(): string;
    // ver. 1.44+
    function getWifiBssid(): string;
    // ver. 1.30+
    function getWifiSignalLevel(): string;
    function getSerialNumber(): string;
    function getSerialNumberDeviceOwner(): string;
    function getAndroidId(): string;
    function getDeviceId(): string;
    function getDeviceName(): string;
    function getImei(): string;
    function getSimSerialNumber(): string;
    function getBatteryLevel(): number;
    function getScreenBrightness(): number;
    // ver. 1.40.2+
    function getScreenOrientation(): number;
    function getDisplayWidth(): number;
    function getDisplayHeight(): number;
    function getScreenOn(): boolean;
    function isPlugged(): boolean;
    function isKeyboardVisible(): boolean;
    function isWifiEnabled(): boolean;
    // ver. 1.44+
    function isWifiConnected(): boolean;
    // ver. 1.44+
    function isNetworkConnected(): boolean;
    function isBluetoothEnabled(): boolean;
    // ver. 1.40.2+
    function isScreenRotationLocked(): boolean;
    function getFullyVersion(): string;
    function getFullyVersionCode(): number;
    function getWebviewVersion(): string;
    function getAndroidVersion(): string;
    function getAndroidSdk(): number;
    function getDeviceModel(): string;

    // Get storage info (ver. 1.33+):
    function getInternalStorageTotalSpace(): bigint;
    function getInternalStorageFreeSpace(): bigint;
    function getExternalStorageTotalSpace(): bigint;
    function getExternalStorageFreeSpace(): bigint;
    function getSensorInfo(): string;
    function getSensorValue(type: number): number;
    function getSensorValues(type: number): string;
    function getAllRxBytesMobile(): bigint;
    function getAllTxBytesMobile(): bigint;
    function getAllRxBytesWifi(): bigint;
    function getAllTxBytesWifi(): bigint;
    function turnScreenOn(): void;
    function turnScreenOff(): void;
    function turnScreenOff(keepAlive: boolean): void;
    function forceSleep(): void;
    function showToast(text: string): void;
    function setScreenBrightness(level: number): void;

    // In Android 10+ only with provisioned devices
    function enableWifi(): void;
    // In Android 10+ only with provisioned devices
    function disableWifi(): void;
    function enableBluetooth(): void;
    function disableBluetooth(): void;
    function showKeyboard(): void;
    function hideKeyboard(): void;
    function openWifiSettings(): void;
    function openBluetoothSettings(): void;
    function vibrate(millis: number): void;
    function sendHexDataToTcpPort(
        hexData: string,
        host: string,
        port: number
    ): void;
    function showNotification(
        title: string,
        text: string,
        url: string,
        highPriority: boolean
    ): void;
    // ver. 1.41+: void
    function log(type: number, tag: string, message: string): void;
    function copyTextToClipboard(text: string): void;
    function getClipboardText(): string;
    function getClipboardHtmlText(): string;
    function deleteFile(path: string): void;
    function deleteFolder(path: string): void;
    function emptyFolder(path: string): void;
    function createFolder(path: string): void;
    function getFileList(folder: string): string;
    function downloadFile(url: string, dirName: string): void;
    function unzipFile(fileName: string): void;
    function downloadAndUnzipFile(url: string, dirName: string): void;
    // ver. 1.36+ respond to download/unzip events
    // void fully.bind('onDownloadSuccess', 'todo("$url","$dir","$code","$fileLength","$lastModified","$mimetype");')
    // void fully.bind('onDownloadFailure', 'todo("$url","$dir","$code");')
    // void fully.bind('onUnzipSuccess', 'todo("$url","$dir");')
    // void fully.bind('onUnzipFailure', 'todo("$url","$dir","$message");')
    function bind(
        event: 'onDownloadSuccess',
        callback: (
            url: string,
            dir: string,
            code: string,
            fileLength: string,
            lastModified: string,
            mimetype: string
        ) => void
    ): void;
    function bind(
        event: 'onDownloadFailure',
        callback: (url: string, dir: string, code: string) => void
    ): void;
    function bind(
        event: 'onUnzipSuccess',
        callback: (url: string, dir: string) => void
    ): void;
    function bind(
        event: 'onUnzipFailure',
        callback: (url: string, dir: string, message: string) => void
    ): void;

    // ver. 1.38+
    function textToSpeech(
        text?: string,
        locale?: string,
        engine?: string,
        queue?: boolean
    ): void;
    // ver. 1.38+
    function stopTextToSpeech(): void;

    function playVideo(
        url: string,
        loop: boolean,
        showControls: boolean,
        exitOnTouch: boolean,
        exitOnCompletion: boolean
    ): void;
    // ver. 1.42+
    function stopVideo(): void;

    // Audio Streams: 0 – Voice Call, 1 – System, 2 –  Ring, 3 – Music, 4 – Alarm, 5 – Notification, 6 – Bluetooth, 8 – DTMF, 9  – TTS, 10 – Accessibility
    function setAudioVolume(level: number, stream: number): void;
    function playSound(url: string, loop: boolean, stream?: number): void;
    function stopSound(): void;
    function showPdf(url: string): void;
    function getAudioVolume(stream: number): number;
    // ver. 1.43+
    function isWiredHeadsetOn(): boolean;
    // ver. 1.43+
    function isMusicActive(): boolean;

    function loadStartUrl(): void;
    function setActionBarTitle(text: string): void;
    function startScreensaver(): void;
    function stopScreensaver(): void;
    function startDaydream(): void;
    function stopDaydream(): void;
    function addToHomeScreen(): void;
    // window.print() doesn't work
    function print(): void;
    function exit(): void;
    function restartApp(): void;
    function getScreenshotPngBase64(): string;
    function loadStatsCSV(): string;
    function clearCache(): void;
    function clearFormData(): void;
    function clearHistory(): void;
    function clearCookies(): void;
    // ver. 1.43.5+
    function clearCookiesForUrl(url: string): void;
    function clearWebstorage(): void;
    function focusNextTab(): void;
    function focusPrevTab(): void;
    function focusTabByIndex(index: number): void;
    function getCurrentTabIndex(): number;
    function shareUrl(): void;
    // 1.35+
    function closeTabByIndex(index: number): void;
    function closeThisTab(): void;
    // returns a JSON array
    function getTabList(): string;
    function loadUrlInTabByIndex(index: number, url: string): void;
    function loadUrlInNewTab(url: string, focus: boolean): void;
    function getThisTabIndex(): number;
    function getCurrentTabIndex(): number;
    function focusThisTab(): void;
    function focusTabByIndex(index: number): void;

    // Use $code placeholder in the resultUrl, see example below
    // Ver. 1.31+, enhanced interface
    // Use -1 for cameraId and timeout (in seconds) for defaults
    // Ver. 1.43.4+, activate flashlight if needed
    function scanQrCode(
        prompt: string,
        resultUrl: string,
        cameraId?: number,
        timeout?: number,
        beepEnabled?: boolean,
        showCancelButton?: boolean,
        useFlashlight?: boolean
    ): void;

    // Ver. 1.31+, respond to QR events
    function bind(event: 'onQrScanSuccess', code: string): void;
    function bind(event: 'onQrScanCancelled', code: string): void;

    // Open a serial bluetooth connection (GATT is not supported)
    // These functions are async, use events below to get results
    function btOpenByMac(mac: string): boolean;
    function btOpenByUuid(uuid: string): boolean;
    function btOpenByName(name: string): boolean;

    // // Get info and close connection
    function btIsConnected(): boolean;
    function btGetDeviceInfoJson(): string;
    function btClose(): void;

    // // Send data
    function btSendstringData(stringData: string): boolean;
    function btSendHexData(hexData: string): boolean;
    function btSendByteData(data: number[]): boolean;

    // Respond to events
    function bind(event: 'onBtConnectSuccess', code: string): void;
    function bind(event: 'onBtConnectFailure', code: string): void;
    function bind(event: 'onBtDataRead', code: string): void;

    function nfcScanStart(): boolean;
    function nfcScanStart(flags: number, debounceMs: number): boolean;
    function nfcScanStop(): void;
    function bind(event: 'onNdefDiscovered', code: string): void;
    function bind(event: 'onNfcTagDiscovered', code: string): void;
    function bind(event: 'onNfcTagRemoved', code: string): void;

    function bind(event: 'screenOn', code: string): void;
    function bind(event: 'screenOff', code: string): void;
    function bind(event: 'showKeyboard', code: string): void;
    function bind(event: 'hideKeyboard', code: string): void;
    function bind(event: 'networkDisconnect', code: string): void;
    function bind(event: 'networkReconnect', code: string): void;
    function bind(event: 'internetDisconnect', code: string): void;
    function bind(event: 'internetReconnect', code: string): void;
    function bind(event: 'unplugged', code: string): void;
    function bind(event: 'pluggedAC', code: string): void;
    function bind(event: 'pluggedUSB', code: string): void;
    function bind(eventName: 'pluggedWireless', func: string): void;
    function bind(eventName: 'onScreensaverStart', func: string): void;
    function bind(eventName: 'onScreensaverStop', func: string): void;
    function bind(eventName: 'onDaydreamStart', func: string): void;
    function bind(eventName: 'onDaydreamStop', func: string): void;
    function bind(eventName: 'onBatteryLevelChanged', func: string): void;
    function bind(eventName: 'volumeUp', func: string): void;
    function bind(eventName: 'volumeDown', func: string): void;
    function bind(eventName: 'onMotion', func: string): void;
    function bind(eventName: 'facesDetected', func: string): void;
    function bind(eventName: 'onDarkness', func: string): void;
    function bind(eventName: 'onMovement', func: string): void;
    function bind(eventName: 'onIBeacon', func: string): void;
    function bind(eventName: 'broadcastReceived', func: string): void;
    function bind(eventName: 'onQrScanSuccess', func: string): void;

    function startApplication(packageName: string): void;
    // Can put null to omit the parameter in ver. 1.33+
    function startApplication(
        packageName: string,
        action: string,
        url: string
    ): void;
    function startIntent(url: string): void;
    // ver. 1.31+
    function broadcastIntent(url: string): void;
    function isInForeground(): boolean;
    function bringToForeground(): void;
    // Delay in ms
    function bringToForeground(millis: bigint): void;
    // ver. 1.31+
    function bringToBackground(): void;
    // ver. 1.36+
    function installApkFile(url: string): void;
    // ver. 1.39+
    function enableMaintenanceMode(): void;
    // ver. 1.39+
    function disableMaintenanceMode(): void;
    // ver. 1.39+
    function setMessageOverlay(text: string): void;
    // ver. 1.40.2+
    function registerBroadcastReceiver(action: string): void;
    // ver. 1.40.2+
    function unregisterBroadcastReceiver(action: string): void;

    function startMotionDetection(): void;
    function stopMotionDetection(): void;
    function isMotionDetectionRunning(): boolean;
    function getCamshotJpgBase64(): string;
    // 1.48+
    function getFaceNumber(): number;
    function triggerMotion(): void;
    // function bind('onMotion', 'todo();') // Triggered max. once per second

    function getStartUrl(): string;
    function setStartUrl(url: string): void;

    // Look in Remote Admin settings for the settings keys
    function getBooleanSetting(key: string): string;
    function getstringSetting(key: string): string;

    // Changes apply immediately
    function setBooleanSetting(key: string, value: boolean): void;
    function setstringSetting(key: string, value: string): void;
    // ver. 1.36+
    function importSettingsFile(url: string): void;
}
