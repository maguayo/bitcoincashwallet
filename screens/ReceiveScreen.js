import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import "../shim";
import words from '../assets/words'
const bitcoin = require("rn-bitcoinjs-lib");
const bip39 = require("bip39");
const bip32 = require("bip32");
import SInfo from 'react-native-sensitive-info';
import QRCode from 'react-native-qrcode';



export default class ReceiveScreen extends React.Component {
    static navigationOptions = {title: 'Receive'};

    constructor(props) {
        super(props);
        this.state = {
            address: 'unknown',
            mnemonic: 'mnemonic',
            seed: 'seed',
        }
    }

    componentDidMount() {
      _this = this
        function getAddress (node, network) {
          return bitcoin.payments.p2pkh({
            pubkey: node.publicKey, network
          }).address
        }

        SInfo.getItem('mnemonic', {}).then(mnemonic => {
            if(mnemonic === null || mnemonic === ''){
            // REDIRECT
            }
            this.setState({"mnemonic": mnemonic})

            bip39.mnemonicToSeed(mnemonic).then(seed => {
                let root = bip32.fromSeed(seed)
                this.setState({"seed": seed})
                address = getAddress(root.derivePath("m/44/0/0/0/1"))
                this.setState({"address": address});
            }).catch(err => {
              _this.setState({"address": err.message});
              _this.setState({"seed": err.message})
            });
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.state.address}
          size={200}
          bgColor='black'
          fgColor='white'/>
        <Text style={{marginTop: 20}}>{this.state.address}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
});
