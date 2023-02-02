import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the Sim Serial Number
// Returns undefined if fully not available
export const useSimSerialNumber = wrapBasicFunction(() =>
    fully.getSimSerialNumber()
);
