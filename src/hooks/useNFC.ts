import { useCallback, useEffect, useState } from 'react';
import { is_fully } from '../utils/is_fully';

export const useNFC = (config?:
    { onNdef: (serial: string, message: string, data: string) => void, onNfcTagDiscovered: (serial: string, type: string, message: string, data: string) => void, onNfcTagRemoved: (serial: string) => void }) => {
    if (!is_fully()) {
        return;
    }

    const [isScanning, setIsScanning] = useState(false);

    const start = useCallback(() => {
        fully.nfcScanStart();
        setIsScanning(true);
    }, []);

    const stop = useCallback(() => {
        fully.nfcScanStop();
        setIsScanning(false);
    }, []);

    useEffect(() => {
        // @ts-ignore
        window.onNdefDiscovered = (serial: string, message: string, data: string) => {
            if (config?.onNdef) {
                config.onNdef(serial, message, data);
            }
        };
        // @ts-ignore
        window.onNfcTagDiscovered = (serial: string, type: string, message: string, data: string) => {
            if (config?.onNfcTagDiscovered) {
                config.onNfcTagDiscovered(serial, type, message, data);
            }
        };
        // @ts-ignore
        window.onNfcTagRemoved = (serial: string) => {
            if (config?.onNfcTagRemoved) {
                config.onNfcTagRemoved(serial);
            }
        };

        fully.bind('onNdefDiscovered', 'onNdefDiscovered("$serial", "$message", "$data");');
        fully.bind('onNfcTagDiscovered', 'onNfcTagDiscovered("$serial", "$type", "$message", "$data");');
        fully.bind('onNfcTagRemoved', 'onNfcTagRemoved("$serial");');
    }, []);

    return {
        isScanning,
        start,
        stop,
    }
};
