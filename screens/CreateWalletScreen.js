import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class CreateWalletScreen extends React.Component {
  static navigationOptions = {title: 'Create Wallet'};

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Create Wallet</Text>
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
