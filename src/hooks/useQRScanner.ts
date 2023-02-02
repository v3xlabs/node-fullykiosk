import { useEffect, useMemo, useState } from 'react';

import { is_fully } from '../utils/is_fully';

type QRScanFunction = (code: string) => void;

type QRScanConfig = {
    onScan?: QRScanFunction;
    onCancel?: () => void;
};

export const useQRScanner = (config?: QRScanConfig) => {
    if (!is_fully()) return { scannedQR: undefined, startScanning: () => {} };

    const [scannedQR, setScannedQR] = useState<string | undefined>();

    const vId = useMemo(() => Math.random().toString(36).slice(2, 11), []);

    useEffect(() => {
        window._fullykiosk[vId] = (state: 'scan' | 'cancel', code?: string) => {
            if (state === 'scan' && !!code) {
                config?.onScan?.(code);

                setScannedQR(code);
            }

            if (state === 'cancel') {
                config?.onCancel?.();
            }
        };

        // Register events
        fully.bind(
            'onQrScanSuccess',
            `_fullykiosk['${vId}']('scan', '$code');`
        );
        fully.bind('onQrScanCancelled', `_fullykiosk['${vId}']('cancel');`);

        return () => {
            // Unregister events
            window._fullykiosk[vId] = undefined;
        };
    }, [0]);

    return {
        scannedQR,
        startScanning: (
            prompt: string,
            resultUrl: string,
            cameraId: number = -1,
            timeout: number = -1,
            beepEnabled: boolean = true,
            showCancelButton: boolean = true,
            useFlashlight: boolean = false
        ) =>
            fully.scanQrCode(
                prompt,
                resultUrl,
                cameraId,
                timeout,
                beepEnabled,
                showCancelButton,
                useFlashlight
            ),
    };
};
