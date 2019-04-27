import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import TransactionsList from '../components/TransactionsList'


export default class HomeScreen extends React.Component {
  static navigationOptions = {title: 'Wallet'};

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.topHeaderHome} source={require('../assets/images/header.png')} />
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
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
  },
  containerInner: {},
  topHeaderHome: {
    backgroundColor: "red",
    marginBottom: 10,
    width: "100%",
    height: 180,
    borderRadius: 7,
    resizeMode: 'cover'
  },
  sectionContainer: {
    marginTop: 35,
  },
  sectionTitle: {
    fontSize: 17,
    marginBottom: 15,
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
