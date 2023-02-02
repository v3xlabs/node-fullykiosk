import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the IMEI
// Returns undefined if fully not available
export const useImei = wrapBasicFunction(() => fully.getImei());
