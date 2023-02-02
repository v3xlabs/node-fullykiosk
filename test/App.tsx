import React, { FC } from 'react';

import {
    useAndroidId,
    useBatteryLevel,
    useCharging,
    useCurrentLocale,
    useDeviceId,
    useDeviceName,
    useDisplaySize,
    useHostname,
    useHostname6,
    useImei,
    useIpv4Address,
    useIpv6Address,
    useMacAddress,
    useOrientation,
    useScreenBrightness,
    useScreenSleep,
    useSerialNumber,
    useSerialNumberDeviceOwner,
    useSimSerialNumber,
    useWifiBSSID,
    useWifiSignalLevel,
    useWifiSSID,
} from '../src/index';

export const App: FC = () => {
    const currentLocale = useCurrentLocale();
    const ipv4 = useIpv4Address();
    const ipv6 = useIpv6Address();
    const hostname = useHostname();
    const hostname6 = useHostname6();
    const mac = useMacAddress();
    const mac2 = useMacAddress({ network_interface: 'en0' });
    const ssid = useWifiSSID();
    const bssid = useWifiBSSID();
    const wifi_signal = useWifiSignalLevel();
    const serial = useSerialNumber();
    const serial_device = useSerialNumberDeviceOwner();
    const android_id = useAndroidId();
    const device_id = useDeviceId();
    const device_name = useDeviceName();
    const imei = useImei();
    const sim_serial_number = useSimSerialNumber();
    const { batteryLevel } = useBatteryLevel();
    const { charging, chargeState } = useCharging();
    const { brightness, setBrightness } = useScreenBrightness();
    const orientation = useOrientation();
    const { width, height } = useDisplaySize();
    const {
        isScreenOn,
        startDaydream,
        stopDaydream,
        startScreensaver,
        stopScreensaver,
        turnOff,
    } = useScreenSleep();

    return (
        <div>
            <h1>Test Page</h1>
            <p>Current locale: {currentLocale}</p>
            <p>Current ipv4: {ipv4}</p>
            <p>Current ipv6: {ipv6}</p>
            <p>Current hostname: {hostname}</p>
            <p>Current hostname6: {hostname6}</p>
            <p>Current mac: {mac}</p>
            <p>Current mac2: {mac2}</p>
            <p>Current ssid: {ssid}</p>
            <p>Current bssid: {bssid}</p>
            <p>Current wifiSignal: {wifi_signal}</p>
            <p>Current serial: {serial}</p>
            <p>Current serial device owner: {serial_device}</p>
            <p>Current android id: {android_id}</p>
            <p>Current device id: {device_id}</p>
            <p>Current device name: {device_name}</p>
            <p>Current imei: {imei}</p>
            <p>Current sim serial number: {sim_serial_number}</p>
            <p>Current battery level: {batteryLevel}</p>
            <p>
                Current charging: {charging} - {chargeState}
            </p>
            <p>
                Current brightness: {brightness} -{' '}
                <button onClick={() => setBrightness(10)}>10</button>
                <button onClick={() => setBrightness(50)}>50</button>
                <button onClick={() => setBrightness(100)}>100</button>
                <button onClick={() => setBrightness(255)}>255</button>
            </p>
            <p>Current orientation: {orientation}</p>
            <p>
                Display size: {width} x {height}
            </p>
            <p>
                Screen state: {isScreenOn ? 'Screen is on' : 'Screen is off'}
                <button onClick={() => startDaydream()}>Start Daydream</button>
                <button onClick={() => stopDaydream()}>Stop Daydream</button>
                <button onClick={() => startScreensaver()}>
                    Start Screensaver
                </button>
                <button onClick={() => stopScreensaver()}>
                    Stop Screensaver
                </button>
                <button onClick={() => turnOff()}>Sleep</button>
            </p>
        </div>
    );
};
