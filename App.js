import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CreateWalletScreen from './screens/CreateWalletScreen'
import HomeScreen from './screens/HomeScreen'
import CreateWalletWarningScreen from './screens/CreateWalletWarningScreen'
import InitWalletScreen from './screens/InitWalletScreen'

const AppNavigator = createStackNavigator({
  InitWalletScreen: {
    screen: InitWalletScreen
  },
  Home: {
    screen: HomeScreen
  },
  CreateWalletWarningScreen: {
    screen: CreateWalletWarningScreen
  },
  CreateWalletScreen: {
    screen: CreateWalletScreen
  },
});

export default createAppContainer(AppNavigator);