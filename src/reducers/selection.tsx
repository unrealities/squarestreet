import { combineReducers } from 'redux';
import { ADD_SELECTION } from '../actions//types';

import Selection from "../services/selection";
import { addSelection, addSelectionAction } from "../actions/selection";

// TODO: https://www.digitalocean.com/community/tutorials/react-react-native-redux
const current: Array<Selection> = new Array();
const possible: Array<Selection> = new Array();
const INITIAL_STATE = {
  current: current,
  possible: possible
};

const selectionsReducer = (state = INITIAL_STATE, action: addSelectionAction) => {
  switch (action.type) {
    case ADD_SELECTION:
      const {
        current,
        possible
      } = state;

      const addedSelection = possible.splice(action.payload, 1); //TODO: update possible
      current.push(addedSelection);
      const newState = { current, possible };

      return newState
    default:
      return state
  }
};

export default combineReducers({
  selections: selectionsReducer
});
