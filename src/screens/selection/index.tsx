import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, Button } from 'react-native';

import { addSelection } from '../../actions/selection';
import Selection from '../../services/selection';

export const SelectionScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>Add Selection {route.params.index}</Text>

      <Button
        title="Back to home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </View>
  );
}

// const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     addSelection,
//   }, dispatch)
// );

// export default connect(mapStateToProps, mapDispatchToProps)(SelectionScreen);
