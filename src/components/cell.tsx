import React from "react";
import { Text, View } from "react-native";

import { styles } from "../styles";

type BaseCellProps = {
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
      <View style={styles.cellContainer}>
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
    return <BaseCell val={this.props.row + " " + this.props.col} />;
  }
}
