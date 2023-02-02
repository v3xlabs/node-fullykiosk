import { is_fully } from '../utils/is_fully';

/**
 * Returns the current screen orientation.
 * @returns The current screen orientation in degrees between 0 and 360.
 */
export const useOrientation = () => {
    if (!is_fully()) return;

    return fully.getScreenOrientation();
};
