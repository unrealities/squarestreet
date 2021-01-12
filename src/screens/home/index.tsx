import React from "react";
import { View } from "react-native";

import { styles } from "../../styles";
import { CellGrid } from "../../components/cellGrid";

export const HomeScreen = ({ navigation }) => {
  // TODO: Generate random players with selections
  const players = ["Abe", "Betty", "Carl", "Diana", "Edward"];
  const selections = [];

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let randPlayer = players[(Math.random() * players.length) | 0];
      let s = new Selection(r, c, randPlayer);
      selections.push(s);
    }
  }

  console.log(selections);

  return (
    <View style={styles.container}>
      <CellGrid selection={selections} />
    </View>
  );
};
