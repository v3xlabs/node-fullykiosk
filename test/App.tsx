import { FC } from 'react';

import { useCurrentLocale } from '../src/index';

export const App: FC = () => {
    const currentLocale = useCurrentLocale();

    return (
        <div>
            <h1>Test Page</h1>
            <p>Current locale: {currentLocale}</p>
        </div>
    );
};
