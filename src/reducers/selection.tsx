import { combineReducers } from 'redux';

import Selection from "../services/selection";
import { addSelection } from "../actions/selection";

// TODO: https://www.digitalocean.com/community/tutorials/react-react-native-redux
const INITIAL_STATE = {
  current: Selection[],
  possible: Selection[]
};

const selectionsReducer = (state = INITIAL_STATE, action:addSelection) => {
  switch (action.type) {
    case 'ADD_SELECTION':
      const {
        current,
        possible
      } = state;

      const addedSelection = possible.splice(action.payload, 1);
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
