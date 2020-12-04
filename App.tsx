import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [stuffToReturnHere, setLoadingComplete] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
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


  return (
    <View style={styles.container}>
      <Text>What needs to be done?</Text>
      <Text>Client</Text>
      <Text>Should be able to login via Google, +++</Text>
      <Text>Should show user what events they can enter</Text>
      <Text>Should be able to enter an event if available</Text>
      <Text>Should provide admin functionality for leagues and custom events</Text>
      <Text>Server</Text>
      <Text>Need to cache sporting event statuses</Text>
      <Text>Need to persist users</Text>
      <Text>Need to persist games</Text>
      <Text>Need to persist leagues</Text>
      <Text>MVP Baby Steps</Text>
      <Text>User can login</Text>
      <Text>User can see single available challenge with a single game</Text>
      <Text>User can join challenge</Text>
      <Text>User can pick one square</Text>
      <Text>User can see what their numbers are</Text>
      <Text>Pretend game can be played out and user alerted of status</Text>
    </View>
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
