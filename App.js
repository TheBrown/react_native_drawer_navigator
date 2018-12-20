/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createDrawerNavigator, createAppContainer, createStackNavigator, StackActions, NavigationActions } from "react-navigation";

import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});


export default createAppContainer(AppNavigator);