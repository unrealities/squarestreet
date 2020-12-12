import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import * as SplashScreen from 'expo-splash-screen';

// import MyStack from './src/navigations/app-navigator.js'

export default class App extends React.Component {
  // const [stuffToReturnHere, setLoadingComplete] = React.useState(false);

  /*
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();
        // TODO: Load stuff here
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  */

  render() {
    console.log("is there anybody out there?");
    return (
      <View>
        <Text>Testing</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
