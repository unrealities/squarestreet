import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, mapStateToProps } from 'redux';
import { Text, View, Button } from 'react-native';

import { addSelection } from '../../actions/selection';
import Selection from '../../services/selection';

export const SelectionScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>Add Selections</Text>

      {
        this.props.selections.map((selection, index) => (
          <Button
            key={index}
            title={`Add ${selection}`}
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addSelection,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SelectionScreen);
