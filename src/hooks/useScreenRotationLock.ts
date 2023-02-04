import { wrapBasicFunction } from '../utils/basic_hook';

export const useScreenRotationLock = wrapBasicFunction(() =>
    fully.isScreenRotationLocked()
);
