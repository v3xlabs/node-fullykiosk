// Gets the Android ID

import { useEffect, useMemo, useState } from 'react';

import { is_fully } from '../utils/is_fully';

window._fullykiosk = window._fullykiosk || {};

export type PlugStates =
    | 'plugged'
    | 'unplugged'
    | 'pluggedUSB'
    | 'pluggedAC'
    | 'pluggedWireless';

// Returns undefined if fully not available
export const useCharging = () => {
    if (!is_fully()) return { charging: undefined, chargeState: undefined };

    const [chargeState, setChargeState] = useState<PlugStates | undefined>(
        fully?.isPlugged() ? 'plugged' : 'unplugged'
    );

    const vId = useMemo(() => Math.random().toString(36).slice(2, 11), []);

    useEffect(() => {
        window._fullykiosk[vId] = (event: PlugStates) => {
            setChargeState(event);
        };

        // Register events
        fully.bind('unplugged', `_fullykiosk['${vId}']('unplugged');`);
        fully.bind('pluggedAC', `_fullykiosk['${vId}']('pluggedAC');`);
        fully.bind('pluggedUSB', `_fullykiosk['${vId}']('pluggedUSB');`);
        fully.bind(
            'pluggedWireless',
            `_fullykiosk['${vId}']('pluggedWireless');`
        );

        return () => {
            // Unregister events
            window._fullykiosk[vId] = undefined;
        };
    }, [0]);

    return { charging: chargeState?.startsWith('plugged'), chargeState };
};
