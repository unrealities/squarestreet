import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/home";
import { ProfileScreen } from "../screens/profile";

import Selection from "../../src/services/selection";

const Stack = createStackNavigator();

type MyStackProps = {
  selections: Selection[];
};

export class MyStack extends React.Component<MyStackProps> {
  constructor(props: MyStackProps) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Square Street" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
};
