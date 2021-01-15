import React from "react";
import { View } from "react-native";

import { styles } from "../styles";
import { HeaderCell, ScoreCell } from "./cell";
import Selection from "../services/selection";

type CellGridProps = {
  selections: Selection[];
};

type CellsProps = {
  selections: Selection[];
};

type CellsState = {
  selections: Selection[];
}
export class CellGrid extends React.Component<CellGridProps> {
  constructor(props: CellGridProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.cellGridContainer}>
        <RowHeaderCells />
        <Cells selections={this.props.selections} />
      </View>
    );
  }
}

export class Cells extends React.Component<CellsProps, CellsState> {
  constructor(props: CellsProps) {
    super(props);
    this.state = {selections: this.props.selections};
  }
  render() {
    const cells = [];
    let s = 0;

    // TODO: insert selection data
    for (let r = 0; r < 10; r++) {
      cells.push(<HeaderCell val={r.toString()} />);
      for (let c = 0; c < 10; c++) {
        console.log("Cells: " + JSON.stringify(this.state.selections[s]));
        cells.push(<ScoreCell row={r} col={c} display={this.state.selections[s].player} />);
        s++;
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
