import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import "../shim";
import words from '../assets/words'
const bitcoin = require("rn-bitcoinjs-lib");
const bip39 = require("bip39")
const bip32 = require("bip32")
import SInfo from 'react-native-sensitive-info';

export default class CreateWalletScreen extends React.Component {
    static navigationOptions = {title: 'Wallet recovery'};

    constructor(props) {
        super(props);
        this.state = {
          mnemonic: 'unknown',
        };
      }

        goHome = () => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Main' })],
            });
            this.props.navigation.dispatch(resetAction);
        }

    
      componentDidMount() {

        /*function getAddress (node, network) {
          return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address
        }*/

        SInfo.getItem('mnemonic', {}).then(mnemonic => {
            if(mnemonic === null || mnemonic === ''){
                let mnemonic = bip39.generateMnemonic(strength=256, rng=null, wordlist=words)
                SInfo.setItem('mnemonic', mnemonic, {});
            }
            this.setState({"mnemonic": mnemonic})
        });
    
        /*bip39.mnemonicToSeed(mnemonic).then(seed => {
          const root = bip32.fromSeed(seed)
          address1 = getAddress(root.derivePath("m/44/0/0/0/0"))
          address2 = getAddress(root.derivePath("m/44/0/0/0/1"))
          address3 = getAddress(root.derivePath("m/44/0/0/0/2"))
    
          this.setState({"address1": address1})
          this.setState({"address2": address2})
          this.setState({"address3": address3})
        })*/
      }
    
      render() {
        return (
          <View style={styles.container}>
            <Text style={styles.mnemonicWarningTop}>
                Write down this phrase. This will be used as your wallet Backup
            </Text>
            <Text style={styles.mnemonic}>{this.state.mnemonic}</Text>
            <Text style={styles.mnemonicWarningBottom}>
                Do not share this phrase, anyone with this phrase can steal your Bitcoins.
            </Text>
            <TouchableOpacity>
                <Text onPress={() => this.goHome()}>Done!</Text>
            </TouchableOpacity>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    mnemonic: {
        margin: 25,
        padding: 20,
        backgroundColor: "#efefef",
        fontSize: 24,
        textAlign: "center",
        letterSpacing: 1,
        lineHeight: 32,
        borderWidth: 2,
        borderColor: "#ccc",
        borderStyle: "dotted",
        borderRadius: 1
    },
    mnemonicWarningTop: {
        margin: 25,
        fontSize: 16,
        lineHeight: 22,
    },
    mnemonicWarningBottom: {
        margin: 25,
        fontSize: 18,
        lineHeight: 24,
    }
});
