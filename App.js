import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';

export default class App extends Component<{}> {
  render() {
    return (
      <CenaPrincipal/>
    );
  }
}
