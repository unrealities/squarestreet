import React from "react";
import { Text, View } from "react-native";

type SelectionProps = {
  awayVal: Number;
  homeVal: Number;
};

export class Selection extends React.Component<SelectionProps> {
  render() {
    return (
      <View>
        <Text>
          {this.props.awayVal} + " " + {this.props.homeVal}
        </Text>
      </View>
    );
  }
}
