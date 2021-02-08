import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Button } from 'react-native';
import { addSelection } from '../../actions/selection';
import Selection from '../../services/selection';

type SelectionScreenProps = {
  selections: Selection[];
};

class SelectionScreen extends React.Component<SelectionScreenProps> {
  render() {
    return (
      <View>
        <Text>Add Selections</Text>

        {
          this.props.selections.possible.map((selection, index) => (
            <Button
              key={ selection }
              title={ `Add ${ selection }` }
              onPress={() =>
                this.props.addSelection(index)
              }
            />
          ))
        }

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addSelection,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SelectionScreen);
