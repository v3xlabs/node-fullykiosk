import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the current IPv4 address
// Returns undefined if fully not available
export const useIpv4Address = wrapBasicFunction(() => fully.getIp4Address());
