import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles';
import { BaseCell } from '../../components/cell'

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome To Square Street</Text>
      <BaseCell/>
    </View>
  );
};
