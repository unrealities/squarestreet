import { ADD_POSSIBLE } from './types';
import { Selection } from '../services/selection';

export const addPossible = (possible: Selection) => (
    {
        type: ADD_POSSIBLE,
        payload: possible
    }
);
