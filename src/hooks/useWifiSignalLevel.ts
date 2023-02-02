import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the wifi signal level
// Returns undefined if fully not available
export const useWifiSignalLevel = wrapBasicFunction(() =>
    fully.getWifiSignalLevel()
);
