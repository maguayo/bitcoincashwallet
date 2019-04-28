import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import TransactionsList from '../components/TransactionsList'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class HomeScreen extends React.Component {
  static navigationOptions = {title: 'Wallet'};
  static headerMode = 'block'

  render() {
    return (
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.topHeaderHome} source={require('../assets/images/header-home-bitcoincash.png')}>
          <View style={styles.topHeaderHomeInner}>
            <Text style={styles.topHeaderHomeTitle}>Balance</Text>
            <Text style={styles.topHeaderHomeBalance}>2.007633926890 BCH</Text>
          </View>
        </ImageBackground>
        <View style={styles.boxes}>
          <View style={styles.boxLeft}>
            <View style={styles.iconContainerLeft}>
              <Icon name="paper-plane" style={styles.icon} size={15} color="#fff" />
            </View>
            <Text>Send</Text>
          </View>
          <View style={styles.boxRight}>
            <View style={styles.iconContainerRight}>
              <Icon name="share" style={styles.icon} size={15} color="#fff" />
            </View>
            <Text>Receive</Text>
          </View>
        </View>
        <View style={styles.containerInner}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>ACTIVITY</Text>
            <TransactionsList />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  iconContainerRight: {
    backgroundColor: "#84d12e",
    padding: 13,
    borderRadius: 100,
    marginBottom: 7
  },
  iconContainerLeft: {
    backgroundColor: "#e57373",
    padding: 13,
    borderRadius: 100,
    marginBottom: 7
  },
  topHeaderHomeTitle: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 7
  },
  topHeaderHomeBalance: {
    fontSize: 18,
    color: "#fff"
  },
  topHeaderHomeAddress: {
    fontSize: 12,
    color: "#fff",
    marginTop: 45
  },
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
  },
  containerInner: {},
  topHeaderHomeInner: {
    padding: 25,
  },
  topHeaderHome: {
    marginBottom: 10,
    width: "100%",
    height: 110,
    borderRadius: 7,
    resizeMode: 'cover',
  },
  sectionContainer: {
    marginTop: 35,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: "#444"
  },
  boxLeft: {
    backgroundColor: "#ffffff",
    flex: 1,
    marginRight: 5,
    height: 105,
    alignItems: "center",
    justifyContent: 'center'
  },
  boxRight: {
    backgroundColor: "#ffffff",
    flex: 1,
    marginLeft: 5,
    height: 105,
    alignItems: "center",
    justifyContent: 'center'
  },
  boxes: {
    flex: 2,
    flexDirection: "row"
  }
});
