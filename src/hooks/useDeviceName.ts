import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the device name
// Returns undefined if fully not available
export const useDeviceName = wrapBasicFunction(() => fully.getDeviceName());
