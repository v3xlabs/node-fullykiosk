/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable unicorn/prevent-abbreviations */
export {};

// Stubborn Fully Kiosk API
declare global {
    let fully: {
        getCurrentLocale(): string;
        getIp4Address(): string;
        getIp6Address(): string;
        getHostname(): string;
        getHostname6(): string;
        getMacAddress(): string;
        getMacAddressForInterface(interface: string): string;
        getWifiSsid(): string;
        // ver. 1.44+
        getWifiBssid(): string;
        // ver. 1.30+
        getWifiSignalLevel(): string;
        getSerialNumber(): string;
        getSerialNumberDeviceOwner(): string;
        getAndroidId(): string;
        getDeviceId(): string;
        getDeviceName(): string;
        getImei(): string;
        getSimSerialNumber(): string;
        getBatteryLevel(): number;
        getScreenBrightness(): number;
        // ver. 1.40.2+
        getScreenOrientation(): number;
        getDisplayWidth(): number;
        getDisplayHeight(): number;
        getScreenOn(): boolean;
        isPlugged(): boolean;
        isKeyboardVisible(): boolean;
        isWifiEnabled(): boolean;
        // ver. 1.44+
        isWifiConnected(): boolean;
        // ver. 1.44+
        isNetworkConnected(): boolean;
        isBluetoothEnabled(): boolean;
        // ver. 1.40.2+
        isScreenRotationLocked(): boolean;
        getFullyVersion(): string;
        getFullyVersionCode(): number;
        getWebviewVersion(): string;
        getAndroidVersion(): string;
        getAndroidSdk(): number;
        getDeviceModel(): string;

        // Get storage info (ver. 1.33+):
        getInternalStorageTotalSpace(): bigint;
        getInternalStorageFreeSpace(): bigint;
        getExternalStorageTotalSpace(): bigint;
        getExternalStorageFreeSpace(): bigint;
        getSensorInfo(): string;
        getSensorValue(type: number): number;
        getSensorValues(type: number): string;
        getAllRxBytesMobile(): bigint;
        getAllTxBytesMobile(): bigint;
        getAllRxBytesWifi(): bigint;
        getAllTxBytesWifi(): bigint;
        turnScreenOn(): void;
        turnScreenOff(): void;
        turnScreenOff(keepAlive: boolean): void;
        forceSleep(): void;
        showToast(text: string): void;
        setScreenBrightness(level: number): void;

        // In Android 10+ only with provisioned devices
        enableWifi(): void;
        // In Android 10+ only with provisioned devices
        disableWifi(): void;
        enableBluetooth(): void;
        disableBluetooth(): void;
        showKeyboard(): void;
        hideKeyboard(): void;
        openWifiSettings(): void;
        openBluetoothSettings(): void;
        vibrate(millis: number): void;
        sendHexDataToTcpPort(hexData: string, host: string, port: number): void;
        showNotification(
            title: string,
            text: string,
            url: string,
            highPriority: boolean
        ): void;
        // ver. 1.41+: void
        log(type: number, tag: string, message: string): void;
        copyTextToClipboard(text: string): void;
        getClipboardText(): string;
        getClipboardHtmlText(): string;
        deleteFile(path: string): void;
        deleteFolder(path: string): void;
        emptyFolder(path: string): void;
        createFolder(path: string): void;
        getFileList(folder: string): string;
        downloadFile(url: string, dirName: string): void;
        unzipFile(fileName: string): void;
        downloadAndUnzipFile(url: string, dirName: string): void;
        // ver. 1.36+ respond to download/unzip events
        // void fully.bind('onDownloadSuccess', 'todo("$url","$dir","$code","$fileLength","$lastModified","$mimetype");')
        // void fully.bind('onDownloadFailure', 'todo("$url","$dir","$code");')
        // void fully.bind('onUnzipSuccess', 'todo("$url","$dir");')
        // void fully.bind('onUnzipFailure', 'todo("$url","$dir","$message");')
        bind(
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
        bind(
            event: 'onDownloadFailure',
            callback: (url: string, dir: string, code: string) => void
        ): void;
        bind(
            event: 'onUnzipSuccess',
            callback: (url: string, dir: string) => void
        ): void;
        bind(
            event: 'onUnzipFailure',
            callback: (url: string, dir: string, message: string) => void
        ): void;

        // ver. 1.38+
        textToSpeech(
            text?: string,
            locale?: string,
            engine?: string,
            queue?: boolean
        ): void;
        // ver. 1.38+
        stopTextToSpeech(): void;

        playVideo(
            url: string,
            loop: boolean,
            showControls: boolean,
            exitOnTouch: boolean,
            exitOnCompletion: boolean
        ): void;
        // ver. 1.42+
        stopVideo(): void;

        // Audio Streams: 0 – Voice Call, 1 – System, 2 –  Ring, 3 – Music, 4 – Alarm, 5 – Notification, 6 – Bluetooth, 8 – DTMF, 9  – TTS, 10 – Accessibility
        setAudioVolume(level: number, stream: number): void;
        playSound(url: string, loop: boolean, stream?: number): void;
        stopSound(): void;
        showPdf(url: string): void;
        getAudioVolume(stream: number): number;
        // ver. 1.43+
        isWiredHeadsetOn(): boolean;
        // ver. 1.43+
        isMusicActive(): boolean;

        loadStartUrl(): void;
        setActionBarTitle(text: string): void;
        startScreensaver(): void;
        stopScreensaver(): void;
        startDaydream(): void;
        stopDaydream(): void;
        addToHomeScreen(): void;
        // window.print() doesn't work
        print(): void;
        exit(): void;
        restartApp(): void;
        getScreenshotPngBase64(): string;
        loadStatsCSV(): string;
        clearCache(): void;
        clearFormData(): void;
        clearHistory(): void;
        clearCookies(): void;
        // ver. 1.43.5+
        clearCookiesForUrl(url: string): void;
        clearWebstorage(): void;
        focusNextTab(): void;
        focusPrevTab(): void;
        focusTabByIndex(index: number): void;
        getCurrentTabIndex(): number;
        shareUrl(): void;
        // 1.35+
        closeTabByIndex(index: number): void;
        closeThisTab(): void;
        // returns a JSON array
        getTabList(): string;
        loadUrlInTabByIndex(index: number, url: string): void;
        loadUrlInNewTab(url: string, focus: boolean): void;
        getThisTabIndex(): number;
        getCurrentTabIndex(): number;
        focusThisTab(): void;
        focusTabByIndex(index: number): void;

        // Use $code placeholder in the resultUrl, see example below
        // Ver. 1.31+, enhanced interface
        // Use -1 for cameraId and timeout (in seconds) for defaults
        // Ver. 1.43.4+, activate flashlight if needed
        scanQrCode(
            prompt: string,
            resultUrl: string,
            cameraId?: number,
            timeout?: number,
            beepEnabled?: boolean,
            showCancelButton?: boolean,
            useFlashlight?: boolean
        ): void;

        // Ver. 1.31+, respond to QR events
        bind(event: 'onQrScanSuccess', code: string): void;
        bind(event: 'onQrScanCancelled', code: string): void;

        // Open a serial bluetooth connection (GATT is not supported)
        // These functions are async, use events below to get results
        btOpenByMac(mac: string): boolean;
        btOpenByUuid(uuid: string): boolean;
        btOpenByName(name: string): boolean;

        // // Get info and close connection
        btIsConnected(): boolean;
        btGetDeviceInfoJson(): string;
        btClose(): void;

        // // Send data
        btSendstringData(stringData: string): boolean;
        btSendHexData(hexData: string): boolean;
        btSendByteData(data: number[]): boolean;

        // Respond to events
        bind(event: 'onBtConnectSuccess', code: string): void;
        bind(event: 'onBtConnectFailure', code: string): void;
        bind(event: 'onBtDataRead', code: string): void;

        nfcScanStart(): boolean;
        nfcScanStart(flags: number, debounceMs: number): boolean;
        nfcScanStop(): void;
        bind(event: 'onNdefDiscovered', code: string): void;
        bind(event: 'onNfcTagDiscovered', code: string): void;
        bind(event: 'onNfcTagRemoved', code: string): void;

        bind(event: 'screenOn', code: string): void;
        bind(event: 'screenOff', code: string): void;
        bind(event: 'showKeyboard', code: string): void;
        bind(event: 'hideKeyboard', code: string): void;
        bind(event: 'networkDisconnect', code: string): void;
        bind(event: 'networkReconnect', code: string): void;
        bind(event: 'internetDisconnect', code: string): void;
        bind(event: 'internetReconnect', code: string): void;
        bind(event: 'unplugged', code: string): void;
        bind(event: 'pluggedAC', code: string): void;
        bind(event: 'pluggedUSB', code: string): void;
        bind(eventName: 'pluggedWireless', func: string): void;
        bind(eventName: 'onScreensaverStart', func: string): void;
        bind(eventName: 'onScreensaverStop', func: string): void;
        bind(eventName: 'onDaydreamStart', func: string): void;
        bind(eventName: 'onDaydreamStop', func: string): void;
        bind(eventName: 'onBatteryLevelChanged', func: string): void;
        bind(eventName: 'volumeUp', func: string): void;
        bind(eventName: 'volumeDown', func: string): void;
        bind(eventName: 'onMotion', func: string): void;
        bind(eventName: 'facesDetected', func: string): void;
        bind(eventName: 'onDarkness', func: string): void;
        bind(eventName: 'onMovement', func: string): void;
        bind(eventName: 'onIBeacon', func: string): void;
        bind(eventName: 'broadcastReceived', func: string): void;
        bind(eventName: 'onQrScanSuccess', func: string): void;

        startApplication(packageName: string): void;
        // Can put null to omit the parameter in ver. 1.33+
        startApplication(
            packageName: string,
            action: string,
            url: string
        ): void;
        startIntent(url: string): void;
        // ver. 1.31+
        broadcastIntent(url: string): void;
        isInForeground(): boolean;
        bringToForeground(): void;
        // Delay in ms
        bringToForeground(millis: bigint): void;
        // ver. 1.31+
        bringToBackground(): void;
        // ver. 1.36+
        installApkFile(url: string): void;
        // ver. 1.39+
        enableMaintenanceMode(): void;
        // ver. 1.39+
        disableMaintenanceMode(): void;
        // ver. 1.39+
        setMessageOverlay(text: string): void;
        // ver. 1.40.2+
        registerBroadcastReceiver(action: string): void;
        // ver. 1.40.2+
        unregisterBroadcastReceiver(action: string): void;

        startMotionDetection(): void;
        stopMotionDetection(): void;
        isMotionDetectionRunning(): boolean;
        getCamshotJpgBase64(): string;
        // 1.48+
        getFaceNumber(): number;
        triggerMotion(): void;
        // bind('onMotion', 'todo();') // Triggered max. once per second

        getStartUrl(): string;
        setStartUrl(url: string): void;

        // Look in Remote Admin settings for the settings keys
        getBooleanSetting(key: string): string;
        getstringSetting(key: string): string;

        // Changes apply immediately
        setBooleanSetting(key: string, value: boolean): void;
        setstringSetting(key: string, value: string): void;
        // ver. 1.36+
        importSettingsFile(url: string): void;
    };
}
