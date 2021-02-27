import { ACTION_TYPES } from './types';
import Selection from '../services/selection';

export const addSelection = (selection: Selection) => (
    {
        type: ACTION_TYPES.ADD_SELECTION,
        payload: selection
    }
);
