import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the wifi SSID
// Returns undefined if fully not available
export const useWifiSSID = wrapBasicFunction(() => fully.getWifiSsid());

// Gets the wifi BSSID
// Returns undefined if fully not available
export const useWifiBSSID = wrapBasicFunction(() => fully.getWifiBssid());
