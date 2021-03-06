import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#fff'}
              activeOpacity={0.5}
              onPress={() => { Actions.cenaclientes(); }}>
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#fff'}
              activeOpacity={0.5}
              onPress={() => { Actions.cenacontatos(); }}>
              <Image style={styles.imgMenu} source={menuContato} />
            </TouchableHighlight>
          </View>

          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#fff'}
              activeOpacity={0.5}
              onPress={() => { Actions.cenaempresa(); }}>
              <Image style={styles.imgMenu} source={menuEmpresa} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#fff'}
              activeOpacity={0.5}
              onPress={() => { Actions.cenaservicos(); }}>
              <Image style={styles.imgMenu} source={menuServico} />
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
})