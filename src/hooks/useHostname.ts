import { wrapBasicFunction } from '../utils/basic_hook';

// Get hostname
// Returns undefined if fully not available
export const useHostname = wrapBasicFunction(() => fully.getHostname());

// Get hostname ipv6
// Returns undefined if fully not available
export const useHostname6 = wrapBasicFunction(() => fully.getHostname6());
