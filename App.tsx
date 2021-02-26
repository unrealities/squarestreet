import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { MyStack } from "./src/navigations/app-navigator";
import selectionReducer from './src/reducers/selection';

const store = createStore(selectionReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //todo: remove debug

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyStack />;
      </Provider>
    );
  }
}
