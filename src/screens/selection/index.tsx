import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { addSelection } from '../../actions/selection';
import Selection from '../../services/selection';

type SelectionScreenProps = {
  selections: Selection[];
  addSelection: Function;
};

class SelectionScreen extends React.Component<SelectionScreenProps> {
  render() {
    const navigation = useNavigation();

    return (
      <View>
        <Text>Add Selections</Text>

        {
          this.props.selections.map((selection, index) => (
            <Button
              key={ index }
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
            navigation.navigate('Home')
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
