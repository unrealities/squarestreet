import React from "react";
import { Text, TextStyle, View, ViewStyle } from "react-native";

import { styles } from "../styles";

type BaseCellProps = {
  vStyle: ViewStyle;
  val: String;
  tStyle: TextStyle;
};

type HeaderCellProps = {
  val: String;
};

type ScoreCellProps = {
  row: Number;
  col: Number;
};

export class BaseCell extends React.Component<BaseCellProps> {
  constructor(props: BaseCellProps) {
    super(props);
  }

  render() {
    return (
      <View style={this.props.vStyle}>
        <Text style={this.props.tStyle}>{this.props.val}</Text>
      </View>
    );
  }
}

export class ScoreCell extends React.Component<ScoreCellProps> {
  constructor(props: ScoreCellProps) {
    super(props);
  }

  render() {
    return (
      <BaseCell
        vStyle={styles.cellContainer}
        val={this.props.row + " " + this.props.col}
        tStyle={styles.cellText}
      />
    );
  }
}

export class HeaderCell extends React.Component<HeaderCellProps> {
  constructor(props: HeaderCellProps) {
    super(props);
  }

  render() {
    return (
      <BaseCell
        vStyle={styles.cellContainer}
        val={this.props.val}
        tStyle={styles.cellHeaderText}
      />
    );
  }
}
