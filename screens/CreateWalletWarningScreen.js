import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';

export default class CreateWalletWarningScreen extends React.Component {

    static headerMode = 'none';
    static navigationOptions = {header: null}

    goCreateWallet = () => {
        this.props.navigation.navigate('CreateWalletScreen');
    }

    goSkipCreateWallet = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <Text>Warning</Text>
                        <TouchableOpacity>
                            <Text onPress={() => this.goCreateWallet()}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
