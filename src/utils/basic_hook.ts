import { is_fully } from './is_fully';

export const wrapBasicFunction =
    <T>(function_: () => T) =>
    () => {
        if (!is_fully()) {
            return;
        }

        return function_() as T;
    };
