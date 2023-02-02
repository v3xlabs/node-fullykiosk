import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the current IPv6 address
// Returns undefined if fully not available
export const useIpv6Address = wrapBasicFunction(() => fully.getIp6Address());
