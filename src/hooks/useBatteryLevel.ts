// Gets the Android ID

import { useEffect, useMemo, useState } from 'react';

import { is_fully } from '../utils/is_fully';

window._fullykiosk = window._fullykiosk || {};

// Returns undefined if fully not available
export const useBatteryLevel = () => {
    if (!is_fully()) return { batteryLevel: undefined };

    const [batteryLevel, setBatteryLevel] = useState<number | undefined>(
        fully.getBatteryLevel()
    );

    const vId = useMemo(() => Math.random().toString(36).slice(2, 11), []);

    useEffect(() => {
        window._fullykiosk[vId] = () => {
            setBatteryLevel(fully.getBatteryLevel());
        };

        // Register events
        fully.bind('onBatteryLevelChanged', `_fullykiosk['${vId}']();`);

        return () => {
            // Unregister events
            window._fullykiosk[vId] = undefined;
        };
    }, [0]);

    return { batteryLevel: batteryLevel };
};
