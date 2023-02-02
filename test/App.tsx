import { FC } from 'react';

import {
    useCurrentLocale,
    useHostname,
    useHostname6,
    useIpv4Address,
    useIpv6Address,
    useMacAddress,
    useWifiSSID,
} from '../src/index';

export const App: FC = () => {
    const currentLocale = useCurrentLocale();
    const ipv4 = useIpv4Address();
    const ipv6 = useIpv6Address();
    const hostname = useHostname();
    const hostname6 = useHostname6();
    const mac = useMacAddress();
    const mac2 = useMacAddress({ network_interface: 'en0' });
    const ssid = useWifiSSID();

    return (
        <div>
            <h1>Test Page</h1>
            <p>Current locale: {currentLocale}</p>
            <p>Current ipv4: {ipv4}</p>
            <p>Current ipv6: {ipv6}</p>
            <p>Current hostname: {hostname}</p>
            <p>Current hostname6: {hostname6}</p>
            <p>Current mac: {mac}</p>
            <p>Current mac2: {mac2}</p>
            <p>Current ssid: {ssid}</p>
        </div>
    );
};
