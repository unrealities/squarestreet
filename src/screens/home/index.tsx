import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../styles";
import { BaseCell } from "../../components/cell";

export const HomeScreen = ({ navigation }) => {
  const cells = [];

  for (let r=0; r<=10; r++){
    for (let c=0; c<=10; c++){
      cells.push(<BaseCell row={r} col={c}/>);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Welcome To Square Street</Text>
      <View style={styles.cellGridContainer}>{cells}</View>
    </View>
  );
};
