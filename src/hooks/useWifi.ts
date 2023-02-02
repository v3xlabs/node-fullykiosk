import { useEffect, useMemo } from 'react';

import { is_fully } from '../utils/is_fully';

window._fullykiosk = window._fullykiosk || {};

export const useWifi = () => {
    if (!is_fully()) return { wifiEnabled: undefined, enableWifi: () => {} };

    const wifiEnabled = fully.isWifiEnabled();
    const wifiConnected = fully.isWifiConnected();
    const networkConnected = fully.isNetworkConnected();

    const vId = useMemo(() => Math.random().toString(36).slice(2, 11), []);

    useEffect(() => {
        window._fullykiosk[vId] = (state: 'reconnect' | 'disconnect') => {
            // setBatteryLevel(fully.getBatteryLevel());
            alert(state);
        };

        // Register events
        fully.bind('networkReconnect', `_fullykiosk['${vId}']('reconnect');`);
        fully.bind('networkDisconnect', `_fullykiosk['${vId}']('disconnect');`);

        return () => {
            // Unregister events
            window._fullykiosk[vId] = undefined;
        };
    }, [0]);

    return {
        wifiEnabled,
        wifiConnected,
        networkConnected,
        enableWifi: () => fully.enableWifi(),
        disableWifi: () => fully.disableWifi(),
        openWifiSettings: () => fully.openWifiSettings(),
    };
};

export const useWifiBytes = () => {
    return {
        getAllRxBytesWifi: () => fully.getAllRxBytesWifi(),
        getAllTxBytesWifi: () => fully.getAllTxBytesWifi(),
    };
};
