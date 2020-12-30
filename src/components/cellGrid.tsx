import React from "react";
import { View } from "react-native";

import { styles } from "../styles";
import { ScoreCell } from "./cell";

export class CellGrid extends React.Component<{}> {
  constructor({}) {
    super({});
  }

  render() {
    const cells = [];

    for (let r = 0; r <= 10; r++) {
      for (let c = 0; c <= 10; c++) {
        cells.push(<ScoreCell row={r} col={c} />);
      }
    }
    return <View style={styles.cellGridContainer}>{cells}</View>;
  }
}
