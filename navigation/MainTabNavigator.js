import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import ReceiveScreen from '../screens/ReceiveScreen';
import SendScreen from '../screens/SendScreen';
import ConfigScreen from '../screens/ConfigScreen';


const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => {
        let colour = "#454545"
        if (focused){
            colour = "#84d12e"
        }
        return (
            <Icon name="home" style={styles.icon} size={17} color={colour} />
        )
    },
};

const ReceiveStack = createStackNavigator({
    ReceiveScreen: ReceiveScreen,
});

ReceiveStack.navigationOptions = {
    tabBarLabel: 'Receive',
    tabBarIcon: ({ focused }) => {
        let colour = "#454545"
        if (focused){
            colour = "#84d12e"
        }
        return (
            <Icon name="share" style={styles.icon} size={17} color={colour} />
        )
    },
};


const SendStack = createStackNavigator({
    SendScreen: SendScreen,
});

SendStack.navigationOptions = {
    tabBarLabel: 'Send',
    tabBarIcon: ({ focused }) => {
        let colour = "#454545"
        if (focused){
            colour = "#84d12e"
        }
        return (
            <Icon name="paper-plane" style={styles.icon} size={17} color={colour} />
        )
    },
};

const ConfigStack = createStackNavigator({
    ConfigScreen: ConfigScreen,
});

ConfigStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => {
        let colour = "#454545"
        if (focused){
            colour = "#84d12e"
        }
        return (
            <Icon name="cog" style={styles.icon} size={17} color={colour} />
        )
    },
};
  
export default createBottomTabNavigator({
    "Home": HomeStack,
    "Receive": ReceiveStack,
    "Send": SendStack,
    "Config": ConfigStack,
}, {
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#84d12e',
        inactiveTintColor: '#454545',
    }
});


const styles = StyleSheet.create ({
    icon: {},
})