import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome To Square Street</Text>
    </View>
  );
};
