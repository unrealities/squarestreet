import Selection from '../services/selection';

export type addSelectionAction = {
    type: String;
    payload: Selection;
}

export type addPossibleAction = {
    type: String;
    payload: Selection;
}

export enum ACTION_TYPES {
    ADD_SELECTION = 'ADD_SELECTION',
    ADD_POSSIBLE = 'ADD_POSSIBLE',
}
