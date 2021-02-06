import React from "react";
import { Button, Text, TextStyle, View, ViewStyle } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from "redux";

import { styles } from "../styles";
import { addSelection } from "../actions/selection";

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

export function ButtonCell(props:ButtonCellProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.cellContainer}>
      // TODO: This button should automatically update the selections
      // Need to move to redux to update the global state
      <Button
        onPress={() => this.props.addSelection('Gravy')}
        title={props.val}
      />
    </View>
  )
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
