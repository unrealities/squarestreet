export interface addSelectionAction {
    type: String,
    payload: Number
}

export const addSelection = (selectionIndex: Number) => (
    {
        type: 'ADD_SELECTION',
        payload: selectionIndex
    }
);
