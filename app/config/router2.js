import React from 'react';
import { TabNavigator, StackNavigator , DrawerNavigator} from "react-navigation";
import {Icon} from "react-native-elements";
import {
  Button
} from 'react-native';

//MENU DEL TABBAR
import Home from '../components/home.js';
import MapExample from '../components/mapa.js';
import Eventos from '../components/eventos.js'
import Procesos from '../components/procesos.js';
import Lugares from '../components/lugares.js';
//TIPOS DE PROCESOS
import Administrativo from '../components/administrativos.js';
import Inscripciones from '../components/inscripciones.js';
import Academicos from '../components/academicos.js';
import Menu from '../components/menu.js'
import MapExample1 from '../populares/mapa1.js';
import Matricula from '../components/pago_matricula.js'
import Busqueda from '../components/busqueda.js'



export const TabBusqueda = TabNavigator({
  Estacionamiento:{
    screen: Eventos
  }
})
