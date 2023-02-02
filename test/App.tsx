import React, { FC } from 'react';

import {
    useAndroidId,
    useCurrentLocale,
    useDeviceId,
    useDeviceName,
    useHostname,
    useHostname6,
    useIpv4Address,
    useIpv6Address,
    useMacAddress,
    useSerialNumber,
    useSerialNumberDeviceOwner,
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
    const wifiSignal = useWifiSignalLevel();
    const serial = useSerialNumber();
    const serial_device = useSerialNumberDeviceOwner();
    const android_id = useAndroidId();
    const device_id = useDeviceId();
    const device_name = useDeviceName();

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
            <p>Current wifiSignal: {wifiSignal}</p>
            <p>Current serial: {serial}</p>
            <p>Current serial device owner: {serial_device}</p>
            <p>Current android id: {android_id}</p>
            <p>Current device id: {device_id}</p>
            <p>Current device name: {device_name}</p>
        </div>
    );
};
