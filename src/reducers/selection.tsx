import { combineReducers } from 'redux';

// TODO: https://www.digitalocean.com/community/tutorials/react-react-native-redux
const INITIAL_STATE = {
  selections: []
};

const selectionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  selections: selectionsReducer
});
