import React from "react";
import { Text, View, ViewStyle } from "react-native";

import { styles } from "../styles";

type BaseCellProps = {
  styleSheet: ViewStyle;
  val: String;
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
      <View style={this.props.styleSheet}>
        <Text style={styles.cellText}>{this.props.val}</Text>
      </View>
    );
  }
}

export class ScoreCell extends React.Component<ScoreCellProps> {
  constructor(props: ScoreCellProps) {
    super(props);
  }

  render() {
    return <BaseCell styleSheet={styles.cellContainer} val={this.props.row + " " + this.props.col} />;
  }
}

export class HeaderCell extends React.Component<HeaderCellProps> {
  constructor(props: HeaderCellProps) {
    super(props);
  }

  render() {
    return <BaseCell styleSheet={styles.cellHeader} val={this.props.val} />;
  }
}
