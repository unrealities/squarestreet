import React from "react";
import { Text, View } from "react-native";

import { styles } from "../../styles";

export const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
};
