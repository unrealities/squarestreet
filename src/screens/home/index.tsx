import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import { styles } from "../../styles";
import { CellGrid } from "../../components/cellGrid";
import { addSelection } from "../../actions/selection";
import Selection from "../../services/selection";

type HomeScreenProps = {
  current: Array<Selection>,
  possible: Array<Selection>
};

export class HomeScreen extends React.Component<HomeScreenProps> {
  render() {
    const players = ["Abe", "Betty", "Carl", "Diana", "Edward", " "];
    const selections = [];
  
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        let randPlayer = players[(Math.random() * players.length) | 0];
        let s = new Selection(r, c, randPlayer);
        addSelection(s);
        selections.push(s);
      }
    }
  
    return (
      <View style={styles.container}>
        <CellGrid selections={this.props.current} />
      </View>
    );
  }
}

const mapStateToProps = (state: Selection) => {
  let selection = state
  return { selection }
};

export default connect(mapStateToProps)(HomeScreen);
