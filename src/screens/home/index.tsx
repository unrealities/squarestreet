import React from "react";
import { View } from "react-native";

import { styles } from "../../styles";
import { CellGrid } from "../../components/cellGrid";

import Selection from "../../services/selection";

export const HomeScreen = ({ navigation }) => {
  const players = ["Abe", "Betty", "Carl", "Diana", "Edward"];
  const selections = [];

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let randPlayer = players[(Math.random() * players.length) | 0];
      let s = new Selection(r, c, randPlayer);
      selections.push(s);
    }
  }

  return (
    <View style={styles.container}>
      <CellGrid selections={selections} />
    </View>
  );
};
