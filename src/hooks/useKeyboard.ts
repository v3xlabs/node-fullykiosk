import { useCallback, useEffect, useMemo, useState } from 'react';

import { is_fully } from '../utils/is_fully';

export const useKeyboard = () => {
    if (!is_fully())
        return {
            keyboardVisible: undefined,
            hideKeyboard: () => {},
            showKeyboard: () => {},
        };

    const [keyboardVisible, setKeyboardVisible] = useState<boolean | undefined>(
        fully.isKeyboardVisible()
    );

    const vId = useMemo(() => Math.random().toString(36).slice(2, 11), []);

    const update = useCallback((state: 'show' | 'hide') => {
        setKeyboardVisible(state == 'show');
    }, []);

    window._fullykiosk[vId] = update;

    useEffect(() => {
        // Register events
        fully.bind('hideKeyboard', `_fullykiosk['${vId}']('hide');`);
        fully.bind('showKeyboard', `_fullykiosk['${vId}']('show');`);

        return () => {
            // Unregister events
            window._fullykiosk[vId] = undefined;
        };
    }, [0]);

    return {
        keyboardVisible,
        showKeyboard: () => fully.showKeyboard(),
        hideKeyboard: () => fully.hideKeyboard(),
    };
};
