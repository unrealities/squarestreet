import React from "react";
import { View } from "react-native";

import { styles } from "../styles";
import { BaseCell, ScoreCell } from "./cell";

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
    return (
      <View style={styles.cellGridContainer}>
        <HeaderCells />
        {cells}
      </View>
    )
  }
}

export class HeaderCells extends React.Component {
  render() {
    const cells = [];

    for (let i = 0; i <= 10; i++) {
      cells.push(<BaseCell val={i.toString()} />);
    }

    return <View style={styles.cellGridHeader}>{cells}</View>
  }
}
