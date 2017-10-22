import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

import BarraNavegacao from './src/components/BarraNavegacao';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <BarraNavegacao/>       
      </View>
    );
  }
}
