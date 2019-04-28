import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CreateWalletScreen from './screens/CreateWalletScreen'
import HomeScreen from './screens/HomeScreen'
import CreateWalletWarningScreen from './screens/CreateWalletWarningScreen'
import InitWalletScreen from './screens/InitWalletScreen'

import BottomAppNavigator from './navigation/AppNavigator';

const AppNavigator = createStackNavigator({
  Main: {
    screen: BottomAppNavigator
  },
  Home: {
    screen: HomeScreen
  },
  InitWalletScreen: {
    screen: InitWalletScreen
  },
  CreateWalletWarningScreen: {
    screen: CreateWalletWarningScreen
  },
  CreateWalletScreen: {
    screen: CreateWalletScreen
  },
},{
  headerMode: 'none',
  navigationOptions: {
      header: null,
  },
});

export default createAppContainer(AppNavigator);