import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/styles/index';

export default class App extends React.Component {
  render() {
    console.log("render in App");
    return (
      <View style = { styles }>
        <Text>Testing</Text>
      </View>
    );
  }
};
