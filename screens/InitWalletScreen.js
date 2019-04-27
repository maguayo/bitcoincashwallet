import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import "../shim";
import words from '../assets/words'
const bitcoin = require("rn-bitcoinjs-lib");
const bip39 = require("bip39")
const bip32 = require("bip32")
import SInfo from 'react-native-sensitive-info';
import { StackActions, NavigationActions } from 'react-navigation'


export default class CreateWalletScreen extends React.Component {
    static headerMode = 'none';
    static navigationOptions = {header: null}

    constructor(props) {
        super(props);
        this.state = {
            mnemonic: 'unknown',
        };
    }

    goHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    componentDidMount() {
        _this = this
        SInfo.getItem('mnemonic', {}).then(mnemonic => {
            if(mnemonic === null || mnemonic === ''){
                let mnemonic = bip39.generateMnemonic(strength=256, rng=null, wordlist=words)
                SInfo.setItem('mnemonic', mnemonic, {});
                setTimeout(function(){
                    _this.goHome()
                }, 1000);
            }else{
                _this.goHome()
            }
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mnemonicWarningTop}>
                    Creating wallet...
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    mnemonicWarningTop: {
        margin: 25,
        fontSize: 16,
        lineHeight: 22,
    },
});
