import React from "react";
import { View } from "react-native";

import { styles } from "../styles";
import { HeaderCell, ScoreCell } from "./cell";

export class CellGrid extends React.Component<{}> {
  constructor({}) {
    super({});
  }

  render() {
    return (
      <View style={styles.cellGridContainer}>
        <RowHeaderCells />
        <Cells />
      </View>
    )
  }
}

export class Cells extends React.Component {
  render() {
    const cells = [];

    for (let r = 0; r <= 10; r++) {
      cells.push(<HeaderCell val={r.toString()} />);
      for (let c = 0; c <= 10; c++) {
        cells.push(<ScoreCell row={r} col={c} />);
      }
    }

    return cells
  }
}

export class RowHeaderCells extends React.Component {
  render() {
    const cells = [<HeaderCell val="" />];

    for (let i = 0; i <= 10; i++) {
      cells.push(<HeaderCell val={i.toString()} />);
    }

    return <View style={styles.cellGridHeader}>{cells}</View>
  }
}
