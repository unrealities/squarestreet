import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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
