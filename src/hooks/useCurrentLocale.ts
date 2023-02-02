import { wrapBasicFunction } from '../utils/basic_hook';

// Gets the current Locale
// Returns undefined if fully not available
export const useCurrentLocale = wrapBasicFunction(() =>
    fully.getCurrentLocale()
);
