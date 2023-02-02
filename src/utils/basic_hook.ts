import { is_fully } from './is_fully';

export const wrapBasicFunction =
    <T, K>(function_: (...v: K[]) => T) =>
    (...v: K[]) => {
        if (!is_fully()) {
            return;
        }

        return function_(...v) as T;
    };
