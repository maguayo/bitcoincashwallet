import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CreateWalletScreen from './screens/CreateWalletScreen'
import HomeScreen from './screens/HomeScreen'
import CreateWalletWarningScreen from './screens/CreateWalletWarningScreen'

const AppNavigator = createStackNavigator({
  CreateWalletWarningScreen: {
    screen: CreateWalletWarningScreen
  },
  CreateWalletScreen: {
    screen: CreateWalletScreen
  },
  Home: {
    screen: HomeScreen
  },
});

export default createAppContainer(AppNavigator);