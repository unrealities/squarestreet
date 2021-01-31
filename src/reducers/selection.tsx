import { combineReducers } from 'redux';

// TODO: https://www.digitalocean.com/community/tutorials/react-react-native-redux
const INITIAL_STATE = {
  current: [],
  possible: []
};

const selectionsReducer = (state = INITIAL_STATE, action) => {
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
