import { useEffect, useState } from 'react';

export const useBluetooth = () => {
    const [bluetoothEnabled, setBluetoothEnabled] = useState(
        fully.isBluetoothEnabled()
    );

    useEffect(() => {
        const t = setInterval(() => {
            setBluetoothEnabled(fully.isBluetoothEnabled());
        }, 1000);

        return () => {
            clearInterval(t);
        };
    }, []);

    return {
        enabled: bluetoothEnabled,
        enable: () => {
            fully.enableBluetooth();
            setBluetoothEnabled(true);
        },
        disable: () => {
            fully.disableBluetooth();
            setBluetoothEnabled(false);
        },
        openSettings: () => fully.openBluetoothSettings(),
    };
};
