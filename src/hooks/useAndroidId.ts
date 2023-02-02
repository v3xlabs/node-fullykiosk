import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the Android ID
// Returns undefined if fully not available
export const useAndroidId = wrapBasicFunction(() => fully.getAndroidId());
