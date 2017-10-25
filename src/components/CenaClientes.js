import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Image source={detalheClientes}/>
          <Text style={styles.txtTitulo}>Nossos clientes</Text>
        </View>

        <View style={styles.detalheClientes}>
          <Image source={cliente1}/>
          <Text style={styles.txtDetalheClientes}>Lorem ipsum dolor sit amet</Text>
        </View>
        
        <View style={styles.detalheClientes}>
          <Image source={cliente2}/>
          <Text style={styles.txtDetalheClientes}>Orci varius natoque penatibus</Text>
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

  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },

  txtTitulo: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },

  detalheClientes: {
    padding: 20,
    marginTop: 10
  },

  txtDetalheClientes: {
    fontSize: 18,
    marginLeft: 20
  }
})
