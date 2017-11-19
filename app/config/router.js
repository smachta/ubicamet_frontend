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
import Panels from '../components/accordionPanels.js'


export const Stack2= StackNavigator({
  Procesos: {
    screen: Procesos,
      navigationOptions: {
        title: 'Procesos',
        headerTintColor: '#DC7633',
      }
  }

});

export const Stack3= StackNavigator({
  Eventos: {
    screen: Eventos,
      navigationOptions: {
        title: 'Eventos',
        headerTintColor: '#DC7633'
      }
  }

});


export const Tabs = TabNavigator({
  Home: {
    screen: MapExample,
    navigationOptions:{
        tabBarlabel: 'home',
        tabBarIcon: ({tintColor}) => <Icon type= "font-awesome" name= "home" size={25} color={tintColor} />,
      },
    },
  Eventos: {
    screen: Stack3,
    navigationOptions:{
        tabBarLabel: 'Eventos',
        tabBarIcon: ({tintColor}) => <Icon  type= "font-awesome" name= "calendar" size={25} color={tintColor} />
    },
  },
  Procesos: {
    screen: Stack2,
    navigationOptions:{
      tabBarLabel: 'Procesos',
      tabBarVisible: true,
      tabBarIcon: ({tintColor}) => <Icon type= "font-awesome" name= "folder-open" size={25} color={tintColor} />
    },
  },
},
  {
      animationEnabled: true,
    tabBarOptions: {
      inactiveTintColor: 'white',
      activeTintColor: '#0B59A7',
      tabStyle:{
        borderRightColor:'blue',
          justifyContent: 'center',
          alignItems: 'right'
      },
      style: {
        backgroundColor: '#DC7633',

      },
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Helvetica'
      },
    },
});


export const Stack1 = StackNavigator({
  Home: {
    screen: Tabs,
     navigationOptions: {
       header : null
        }
      },
  Procesos: {
    screen: Procesos,
      navigationOptions: {
        title: 'Procesos',
        headerTintColor: '#DC7633',
      }
  },
  Administrativos: {
    screen: Administrativo,
      navigationOptions:{
        title: 'Administrativos',
        headerTintColor: '#DC7633',

      }
  },
  Inscripciones: {
    screen: Inscripciones,
      navigationOptions:{
        title: 'Inscripciones',
        headerTintColor: '#DC7633'
      }
  },
  Academicos: {
    screen: Academicos,
      navigationOptions:{
        title: 'Academicos',
        headerTintColor: '#DC7633'
      }
  },
  PagoMatricula: {
    screen: Matricula,
      navigationOptions:{
        title: 'Pago de Matricula',
        headerTintColor: '#DC7633'
      }
  },
  Busqueda:{
    screen: Busqueda,
      navigationOptions:{
        header: null
      }
  }
});

export const Drawer2 = DrawerNavigator({
  Home2: {
    screen: MapExample1,
      navigationOptions:{
        drawerLabel: 'AulasA1'
      }
  }
})

export const Drawer = DrawerNavigator({
  Home: {
    screen: Stack1,
    navigationOptions:{
      drawerLabel: 'Home'
    },
  },
  "Aulas impares A2-001 al A2-007": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Aulas impares A2-001 al A2-007'
    },
  },
  "Aulas Pares A2-002 al A2-008": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Aulas Pares A2-002 al A2-008'
    },
  },
  "Bibloteca Pedro Grases": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Bibloteca Pedro Grases'
    },
  },
  "saman": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'saman'
    },
  },
  "Laboratorio de Suelos": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Suelos'
    },
  },
  "Estacionamiento C (Deportivo)": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Estacionamiento C Deportivo'
    },
  },
  "Estacionamiento D (Plano)": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Estacionamiento D (Plano)'
    },
  },
  "Estacionamiento E (Inclinado)": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Estacionamiento E (Inclinado)'
    },
  },
  "Estacionamiento F (VIP)": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Estacionamiento F (VIP)'
    },
  },
  "Estacionamiento G": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Estacionamiento G'
    },
  },
  "Estacionamiento H": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Estacionamiento H'
    },
  },
  "Estacionamiento I (Rústico)": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Estacionamiento I (Rústico)'
    },
  },
  "Auditorio Fundación Polar": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Auditorio Fundación Polar'
    },
  },
  "Auditorio Francesca Pensieri": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Auditorio Francesca Pensieri'
    },
  },
  "Auditorio Manoa": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Auditorio Manoa'
    },
  },
  "Kisoko Corimón": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Kiosko Corimón'
    },
  },
  "Depósito de Reactivos y Materiales": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Depósito de Reactivos y Materiales'
    },
  },
  "Laboratorio de Suelos": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Suelos'
    },
  },
  "Laboratorio de Materiales": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Materiales'
    },
  },
  " Laboratorio Ciencia de los Materiales ": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio Ciencia de los Materiales'
    },
  },
  "Laboratorio de Control": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Control'
    },
  },
  "Laboratorio de Redes": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Redes'
    },
  },
  "Laboratorio de Autómatas": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Autómatas'
    },
  },
  "Laboratorio de Simulación de Redes Eléctricas": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Simulación de Redes Eléctricas'
    },
  },
  "Laboratorio de Procesos de Separación": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Procesos de Separación'
    },
  },
  "Laboratorio de Investigación": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Procesos de Investigación'
    },
  },
  "Laboratorio de Fenómenos de Transferencia": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Fenómenos de Transferencia'
    },
  },
  "Laboratorio de Fotografía": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Fotografía'
    },
  },
  "Laboratorio de Análisis de Alimentos": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Análisis de Alimentos'
    },
  },
  "Laboratorio de Bioingeniería": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Bioingeniería'
    },
  },
  "Laboratorio de Análisis Instrumental": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Análisis Instrumental'
    },
  },
  "Laboratorio de Físico-Química": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Físico-Química'
    },
  },
  "Laboratorio de Química General I": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Química General I'
    },
  },
  "Laboratorio de Química General II": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Química General II'
    },
  },
  "Laboratorio de Química Orgánica": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Química Orgánica'
    },
  },
  "Laboratorio de Analítica": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Analítica'
    },
  },
  "Laboratorio de Química General III": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Laboratorio de Química General III'
    },
  },
  "Unidad de Psicología": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Unidad de Psicología'
    },
  },
  "Salón del Estudiante": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Salón del Estudiante'
    },
  },
  "Dirección de Escuela de Ingeniería": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Dirección de Escuela de Ingeniería'
    },
  },
  "Departamento de Química": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Departamento de Química'
    },
  },
  "Departamento de Estudios Ambientales": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Departamento de Estudios Ambientales'
    },
  },
  "Departamento de Ciencias y Técnicas de la Construcción": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Departamento de Ciencias y Técnicas de la Construcción'
    },
  },
  "Departamento de Gestión de la Tecnología": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Departamento de Gestión de la Tecnología'
    },
  },
  "Departamento de Procesos y Sistemas": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Departamento de Procesos y Sistemas'
    },
  },
  "Departamento de Energética": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Departamento de Energética'
    },
  },
},
{
    contentComponent: props => <Panels {...props} />
})

export const Stackdef = StackNavigator({
    "Drawer2": {
      screen: Drawer2,
        navigationOptions:{
          header: null
      }
    },
    "Drawer": {
      screen: Drawer,
        navigationOptions:{
          header: null
        }
    }
  },
)
