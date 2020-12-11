import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

import MyStack from './src/navigations/app-navigator.js'

export default function App() {
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

  console.log("is there anybody out there?");

  return (
    <SafeAreaView>
      <Text>Testing</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
