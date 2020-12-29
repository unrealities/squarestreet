import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../styles";
import { CellGrid } from "../../components/cellGrid";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome To Square Street</Text>
      <CellGrid />
    </View>
  );
};
