// Gets the current mac address

import { is_fully } from '../utils/is_fully';

// Returns undefined if fully not available
export const useMacAddress = (config?: { network_interface?: string }) => {
    if (!is_fully()) {
        return;
    }

    if (config?.network_interface) {
        return fully.getMacAddressForInterface(config.network_interface);
    }

    return fully.getMacAddress();
};
