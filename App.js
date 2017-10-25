import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Rotas from './src/Rotas';

export default class App extends Component<{}> {
  render() {
    return (
      <Rotas/>
    );
  }
}
