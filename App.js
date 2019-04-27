/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import "./shim";
import words from './assets/words'
const bitcoin = require("rn-bitcoinjs-lib");
const bip39 = require("bip39")
const bip32 = require("bip32")


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      mnemonic: 'unknown',
      address1: 'unknown',
      address2: 'unknown',
      address3: 'unknown',
    };
  }

  componentDidMount() {
    // node.js libs
    // const keyPair = bitcoin.ECPair.makeRandom();
    //console.log(keyPair);

    function getAddress (node, network) {
      return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address
    }

    let mnemonic = bip39.generateMnemonic(strength=256, wordlist=words)

    bip39.mnemonicToSeed(mnemonic).then(seed => {
      const root = bip32.fromSeed(seed)
      address1 = getAddress(root.derivePath("m/44/0/0/0/0"))
      address2 = getAddress(root.derivePath("m/44/0/0/0/1"))
      address3 = getAddress(root.derivePath("m/44/0/0/0/2"))

      this.setState({"address1": address1})
      this.setState({"address2": address2})
      this.setState({"address3": address3})
    })

    this.setState({"mnemonic": mnemonic})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>mnemonic: {this.state.mnemonic}</Text>
        <Text>----------</Text>
        <Text>Address1: {this.state.address1}</Text>
        <Text>Address2: {this.state.address2}</Text>
        <Text>Address3: {this.state.address3}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
