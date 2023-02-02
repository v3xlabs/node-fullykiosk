import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the serial number
// Returns undefined if fully not available
export const useSerialNumber = wrapBasicFunction(() => fully.getSerialNumber());

// Gets the serial number of the device owner
// Returns undefined if fully not available
export const useSerialNumberDeviceOwner = wrapBasicFunction(() =>
    fully.getSerialNumberDeviceOwner()
);
