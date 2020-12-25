import React from "react";
import { Text, View } from "react-native";

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
      <View>
        <Text>{this.props.row} {this.props.col}</Text>
      </View>
    );
  }
}
