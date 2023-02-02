import { useCallback, useState } from 'react';

import { is_fully } from '../utils/is_fully';

export const useScreenBrightness = (): {
    brightness: number | undefined;
    // Brightness is a number between 0 and 255.
    setBrightness: (brightness: number) => void;
} => {
    if (!is_fully())
        return {
            brightness: undefined,
            setBrightness: (brightness: number) => {},
        };

    const [brightness, setLocalBrightness] = useState<number | undefined>(
        fully.getScreenBrightness()
    );

    const setBrightness = useCallback((brightness: number) => {
        fully.setScreenBrightness(brightness);
        setLocalBrightness(fully.getScreenBrightness());
    }, []);

    return {
        brightness,
        // Brightness is a number between 0 and 255.
        setBrightness,
    };
};
