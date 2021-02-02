export interface addSelectionAction {
    type: string,
    payload: number
}

export const addSelection = (selectionIndex: number) => (
    {
        type: 'ADD_SELECTION',
        payload: selectionIndex
    }
);
