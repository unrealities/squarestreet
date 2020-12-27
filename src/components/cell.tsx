import React from "react";
import { Text, View } from "react-native";

import { styles } from "../styles";

type BaseCellProps = {
  row: Number,
  col: Number
}

export class BaseCell extends React.Component<BaseCellProps> {
  constructor(props: BaseCellProps) {
    super(props)
  }

  render() {
    return (
      <View style={styles.cellContainer}>
        <Text style={styles.cellText}>{this.props.row} {this.props.col}</Text>
      </View>
    );
  }
}
