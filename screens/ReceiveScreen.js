import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import "../shim";
import words from '../assets/words'
const bitcoin = require("rn-bitcoinjs-lib");
const bip39 = require("bip39");
const bip32 = require("bip32");
import SInfo from 'react-native-sensitive-info';


export default class ReceiveScreen extends React.Component {
    static navigationOptions = {title: 'Receive'};

    constructor(props) {
        super(props);
        this.state = {
            address: 'unknown',
        }
    }

    componentDidMount() {
        function getAddress (node, network) {
          return bitcoin.payments.p2pkh({
            pubkey: node.publicKey, network
          }).address
        }

        SInfo.getItem('mnemonic', {}).then(mnemonic => {
            if(mnemonic === null || mnemonic === ''){
            // REDIRECT
            }
            bip39.mnemonicToSeed(mnemonic).then(seed => {
                const root = bip32.fromSeed(seed)
                address = getAddress(root.derivePath("m/44/0/0/0/0"))
                this.setState({"address": address})
            });
        });
    }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.state.address}</Text>
      </ScrollView>
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
