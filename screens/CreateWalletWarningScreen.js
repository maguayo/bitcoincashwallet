import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'


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
                        <Text style={styles.warningTop}>Are you alone?</Text>
                        <Image
                            source={require('../assets/flaticons/png/001-complain.png')}
                            style={styles.warningImage}
                        />
                        <Text style={styles.warningBottom}>Make sure nobody see your recovery seed. Anyone with this phrase can steal your Bitcoins.</Text>
                        <View style={styles.buttonContainer}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                <TouchableOpacity style={styles.buttonDanger}>
                                    <Text style={styles.buttonText} onPress={() => this.goSkipCreateWallet()}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText} onPress={() => this.goCreateWallet()}>Let's go!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
        backgroundColor: '#242424',
    },
    warningImage: {
        width: "50%",
        resizeMode: 'contain'
    },
    warningTop: {
        fontSize: 20,
        lineHeight: 30,
        color: "#fff",
        marginTop: 20,
    },
    warningBottom: {
        color: "#fff",
        fontSize: 20,
        lineHeight: 30,
        margin: 25,
        textAlign: "center"
    },
    button: {
        backgroundColor: "#5ccb79",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 35,
        paddingRight: 35,
        marginLeft: 7,
        marginRight: 7,
    },
    buttonDanger: {
        backgroundColor: "#f44336",
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 35,
        paddingRight: 35,
        marginLeft: 7,
        marginRight: 7,
    },
    buttonContainer: {
        margin: 25,
        flexDirection:'column',
        justifyContent: 'flex-start'
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
        textAlign: "center"
    }
});
