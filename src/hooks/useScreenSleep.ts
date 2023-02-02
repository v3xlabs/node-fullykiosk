import { useCallback, useEffect, useMemo, useState } from 'react';

import { is_fully } from '../utils/is_fully';

type ScreenSleepConfig = {
    screenOff?: () => void;
    screenOn?: () => void;
};

window._fullykiosk = window._fullykiosk || {};

export const useScreenSleep = (config?: ScreenSleepConfig) => {
    if (!is_fully())
        return {
            isScreenOn: false,
            turnOff: () => {},
            turnOn: () => {},
            forceSleep: () => {},
            startScreensaver: () => {},
            stopScreensaver: () => {},
            startDaydream: () => {},
            stopDaydream: () => {},
        };

    const [isScreenOn, setScreenOn] = useState(fully.getScreenOn());

    const vId = useMemo(() => Math.random().toString(36).slice(2, 11), []);

    const onToggle = useCallback((state: 'on' | 'off') => {
        if (state == 'on' && config?.screenOn) {
            config.screenOn();
            setScreenOn(true);
        } else if (state == 'off' && config?.screenOff) {
            config.screenOff();
            setScreenOn(false);
        }
    }, []);

    window._fullykiosk[vId] = onToggle;

    useEffect(() => {
        // Register events
        fully.bind('screenOff', `_fullykiosk['${vId}']('on');`);
        fully.bind('screenOn', `_fullykiosk['${vId}']('off');`);

        return () => {
            // Unregister events
            window._fullykiosk[vId] = undefined;
        };
    }, [0]);

    return {
        isScreenOn,
        turnOff: () => fully.turnScreenOff(),
        turnOn: () => fully.turnScreenOn(),
        forceSleep: () => fully.forceSleep(),
        startScreensaver: () => fully.startScreensaver(),
        stopScreensaver: () => fully.stopScreensaver(),
        startDaydream: () => fully.startDaydream(),
        stopDaydream: () => fully.stopDaydream(),
    };
};
