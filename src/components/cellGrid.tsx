import React from "react";
import { View } from "react-native";

import { styles } from "../styles";
import { ButtonCell, HeaderCell, ScoreCell } from "./cell";
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
    this.state = { selections: this.props.selections };
  }
  render() {
    const cells = [];
    let s = 0;

    for (let r = 0; r < 10; r++) {
      cells.push(<HeaderCell val={r.toString()} />);
      for (let c = 0; c < 10; c++) {
        if (this.state.selections[s].player != " ") {
          cells.push(<ScoreCell row={r} col={c} display={this.state.selections[s].player} />);
        } else {
          cells.push(<ButtonCell val="Purchase Square" row={r} col={c}/>);
        }
        s++;
      }
    }

    return cells;
  }
}

export class RowHeaderCells extends React.Component {
  render() {
    const cells = [<HeaderCell val="" />];

    for (let i = 0; i < 10; i++) {
      cells.push(<HeaderCell val={i.toString()} />);
    }

    return <View style={styles.cellGridHeader}>{cells}</View>;
  }
}
