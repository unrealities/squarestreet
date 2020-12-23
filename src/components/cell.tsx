import React from "react";
import { Text, View } from "react-native";

type BaseCellProps = {
  id: Number
}

export class BaseCell extends React.Component<BaseCellProps> {
  constructor(props: BaseCellProps) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>{this.props.id}</Text>
      </View>
    );
  }
}
