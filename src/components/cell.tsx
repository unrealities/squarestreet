import React from "react";
import { Alert, Button, Text, TextStyle, View, ViewStyle } from "react-native";

import { styles } from "../styles";

type BaseCellProps = {
  vStyle: ViewStyle;
  val: String;
  tStyle: TextStyle;
};

type ButtonCellProps = {
  val: string;
};

type HeaderCellProps = {
  val: String;
};

type ScoreCellProps = {
  row: Number;
  col: Number;
  display: String;
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

export class ButtonCell extends React.Component<ButtonCellProps> {
  constructor(props: ButtonCellProps) {
    super(props);
  }

  render() {
    return (
      <View style={styles.cellContainer}>
        <Button
          onPress={() => console.log('Button Clicked')}
          title={this.props.val} 
        />
      </View>
    )
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
        val={this.props.display}
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
