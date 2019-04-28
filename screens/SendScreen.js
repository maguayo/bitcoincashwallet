import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SendScreen extends React.Component {
  static navigationOptions = {title: 'Send'};

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Send here</Text>
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
