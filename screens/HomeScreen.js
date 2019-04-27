import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TransactionsList from '../components/TransactionsList'


export default class HomeScreen extends React.Component {
  static navigationOptions = {title: 'Wallet'};

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.boxes}>
          <View style={styles.boxLeft}>
            <Text>Send</Text>
          </View>
          <View style={styles.boxRight}>
            <Text>Receive</Text>
          </View>
        </View>
        <View style={styles.containerInner}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Latest transactions</Text>
            <TransactionsList />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInner: {
    marginRight: 25,
    marginLeft: 25,
  },
  sectionContainer: {
    marginTop: 35,
  },
  sectionTitle: {
    fontSize: 17,
    marginBottom: 10,
  },
  boxLeft: {
    backgroundColor: "#ffebee",
    flex: 1,
    marginRight: 5,
    height: 110,
    alignItems: "center",
    justifyContent: 'center'
  },
  boxRight: {
    backgroundColor: "#e8f5e9",
    flex: 1,
    marginLeft: 5,
    height: 110,
    alignItems: "center",
    justifyContent: 'center'
  },
  boxes: {
    flex: 2,
    flexDirection: "row"
  }
});
