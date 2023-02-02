import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the device ID
// Returns undefined if fully not available
export const useDeviceId = wrapBasicFunction(() => fully.getDeviceId());
