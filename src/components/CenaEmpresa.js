import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtTitulo}>Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtDetalheEmpresa}>A ATM Consultoria disponibiliza aos seus clientes serviços de consultoria, via atendimento telefônico e online, para os assuntos de ICMS, IPI, ISS; IR e Contribuições; Trabalho e Previdência; Contabilidade e Societário e demais tributos relacionados.
Nossa equipe é composta por profissionais e especialistas capacitados e competentes em suas áreas de atuação, preparados para orientar de acordo com a legislação vigente, o que torna o ATM Consultoria uma empresa segura e confiável para prestar os melhores e mais atualizados serviços de consultoria.</Text>
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
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25
  },

  detalheEmpresa: {
    padding: 20,
    marginTop: 10
  },

  txtDetalheEmpresa: {
    fontSize: 18
  }
})
