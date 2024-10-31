// Gets the current mac address

import { useCallback, useEffect, useState } from 'react';
import { is_fully } from '../utils/is_fully';

// Returns undefined if fully not available
export const useNFC = (config?: { onNdef: (data: string) => void }) => {
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
        fully.bind('onNdefDiscovered', 'alert("$serial", "$message", "$data");');
        fully.bind('onNfcTagDiscovered','alert("$serial", "$type", "$message", "$data");');
        fully.bind('onNfcTagRemoved','alert("$serial");');
    }, []);

    return {
        isScanning,
        start,
        stop,
    }
};
