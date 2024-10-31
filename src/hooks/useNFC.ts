import { useCallback, useEffect, useState } from 'react';
import { is_fully } from '../utils/is_fully';

const preflight = () => {
    if (!is_fully()) {
        alert('Fully not available');
        throw new Error('Fully not available');
    }
};

export const useNFC = (config?:
    { onNdef?: (serial: string, message: string, data: string) => void, onNfcTagDiscovered?: (serial: string, type: string, message: string, data: string) => void, onNfcTagRemoved?: (serial: string) => void }) => {
    const [isScanning, setIsScanning] = useState(false);

    const start = useCallback(() => {
        preflight();
        fully.nfcScanStart();
        setIsScanning(true);
    }, []);

    const stop = useCallback(() => {
        preflight();
        fully.nfcScanStop();
        setIsScanning(false);
    }, []);

    useEffect(() => {
        preflight();
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
