import { is_fully } from '../utils/is_fully';

export const useDisplaySize = () => {
    if (!is_fully()) return { width: undefined, height: undefined };

    return {
        width: fully.getDisplayWidth(),
        height: fully.getDisplayHeight(),
    };
};
