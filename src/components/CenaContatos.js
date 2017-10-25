import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}>Contatos</Text>
        </View>

        <View style={styles.detalheContatos}>
          <Text style={styles.txtDetalheContatos}>Telefone: (55) 3334-3757</Text>
          <Text style={styles.txtDetalheContatos}>Celular: (55) 99123-5678</Text>
          <Text style={styles.txtDetalheContatos}>Email: contato@atmconsultoria.com.br</Text>
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
    marginHorizontal: 20
  },

  txtTitulo: {
    fontSize: 30,
    color: '#61BD8C',
    marginLeft: 10,
    marginTop: 25
  },

  detalheContatos: {
    padding: 20
  },

  txtDetalheContatos: {
    fontSize: 18
  }
})
