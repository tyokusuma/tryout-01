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
      value: '',
    };
  }

  componentDidMount() {}

  render() {
    return <View />;
  }
}

AppRegistry.registerComponent('graphQl', () => graphQl);
