import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class ConfigScreen extends React.Component {
  static navigationOptions = {title: 'Configuration'};

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Configuration here</Text>
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
