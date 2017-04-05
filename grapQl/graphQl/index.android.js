/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class graphQl extends Component {
  constructor() {
    super();
    this.state = {
      graph: '',
    };
  }

  componentDidMount() {
    this.getData()
  }
  getData() {
    fetch('http://192.168.40.87:4000/graphql?query={nama program todo}')
    .then(resp => {
      let response = JSON.parse(resp._bodyText)
      this.setState({ graph: response.data });
    })
    .catch()
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome integrate GraphQL
      </Text>
      <Text style={styles.instructions}>
        My cool name {this.state.graph.nama}
      </Text>
      <Text style={styles.instructions}>
        i prefer like program {this.state.graph.program}
      </Text>
      <Text style={styles.instructions}>
        right now im going {this.state.graph.todo}
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('graphQl', () => graphQl);
