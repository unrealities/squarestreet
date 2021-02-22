import { ADD_SELECTION } from './types';
import { Selection } from '../services/selection';

export interface addSelectionAction {
    type: String,
    payload: Selection
}

export const addSelection = (selection: Selection) => (
    {
        type: ADD_SELECTION,
        payload: selection
    }
);
