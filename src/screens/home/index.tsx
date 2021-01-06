import React from "react";
import { View } from "react-native";

import { styles } from "../../styles";
import { CellGrid } from "../../components/cellGrid";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CellGrid />
    </View>
  );
};
