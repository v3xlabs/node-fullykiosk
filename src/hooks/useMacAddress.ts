import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the current mac address
// Returns undefined if fully not available
export const useMacAddress = wrapBasicFunction(() => fully.getMacAddress());
