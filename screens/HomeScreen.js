import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {title: 'Home'};

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
        </View>
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
