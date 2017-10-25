import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Image source={detalheServicos} />
          <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>

        <View style={styles.detalheServicos}>
          <Text style={styles.txtDetalheServicos}>- Consultoria</Text>
          <Text style={styles.txtDetalheServicos}>- Processos</Text>
          <Text style={styles.txtDetalheServicos}>- Acompanhamento de projetos</Text>
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
    marginHorizontal: 20,
    marginTop: 20
  },

  txtTitulo: {
    fontSize: 30,
    color: '#19D1C8',
    marginLeft: 10,
    marginTop: 25
  },

  detalheServicos: {
    padding: 20,
    marginTop: 10
  },

  txtDetalheServicos: {
    fontSize: 18
  }
})
