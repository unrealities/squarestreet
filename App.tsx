import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/styles/';

export default class App extends React.Component {
  render() {
    console.log("redner in App");
    return (
      <View style = { styles }>
        <Text>Testing</Text>
      </View>
    );
  }
}
