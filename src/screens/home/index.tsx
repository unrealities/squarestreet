import React from "react";
import { Text, View } from "react-native";
import { styles } from "../../styles";
import { BaseCell } from "../../components/cell";

export const HomeScreen = ({ navigation }) => {
  const cells = [];

  for (let i=0; i<=10; i++){
    cells.push(<BaseCell id={i} />);
  }

  return (
    <View style={styles.container}>
      <Text>Welcome To Square Street</Text>
      {cells}
    </View>
  );
};
