import React from 'react';

import CenaPrincipal from './components/CenaPrincipal';
import CenaClientes from './components/CenaClientes';

import {Router, Scene, Stack} from 'react-native-router-flux';

const Rotas = () => (
  <Router>
    <Stack key='root'>
      <Scene key='cenaprincipal' component={CenaPrincipal} initial title="ATM Consultoria" />
      <Scene key='cenaclientes' component={CenaClientes} title="Nossos Clientes" />
    </Stack>
  </Router>
);

export default Rotas;;
