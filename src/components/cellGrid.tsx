import React from "react";
import { View } from "react-native";

import { styles } from "../styles";
import { HeaderCell, ScoreCell } from "./cell";
import Selection from "../services/selection";

type CellProps = {
  selections: Selection[];
};

type CellGridProps = {
  selections: Selection[];
};
export class CellGrid extends React.Component<CellGridProps> {
  constructor(props: CellGridProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.cellGridContainer}>
        <RowHeaderCells />
        <Cells selections={selections} />
      </View>
    );
  }
}

export class Cells extends React.Component<CellProps> {
  constructor(props: CellProps) {
    super(props);
  }
  render() {
    const cells = [];

    // TODO: insert selection data
    for (let r = 0; r <= 10; r++) {
      cells.push(<HeaderCell val={r.toString()} />);
      for (let c = 0; c <= 10; c++) {
        cells.push(<ScoreCell row={r} col={c} />);
      }
    }

    return cells;
  }
}

export class RowHeaderCells extends React.Component {
  render() {
    const cells = [<HeaderCell val="" />];

    for (let i = 0; i <= 10; i++) {
      cells.push(<HeaderCell val={i.toString()} />);
    }

    return <View style={styles.cellGridHeader}>{cells}</View>;
  }
}
