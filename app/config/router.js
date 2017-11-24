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
import CategoriaProceso from '../components/categoriaProceso.js';
import MapExample1 from '../populares/mapa1.js';
import Info from '../components/info_proceso.js'
import Busqueda from '../components/busqueda.js'
import Panels from '../components/accordionPanels.js'
import ImageDrawer from '../components/imageDrawer.js'


export const Stack2= StackNavigator({
  Procesos: {
    screen: Procesos,
      navigationOptions: {
        title: 'Procesos',
        headerTintColor: '#EF6C00',
      }
  },
  CategoriaProceso: {
    screen: CategoriaProceso,
      navigationOptions:{
        headerTintColor: '#DC7633',
      }
  },
  Info: {
    screen: Info,
      navigationOptions:{
        headerTintColor: '#EF6C00'
      }
  }
});

export const Stack3= StackNavigator({
  Eventos: {
    screen: Eventos,
      navigationOptions: {
        title: 'Eventos',
        headerTintColor: '#EF6C00'
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
        backgroundColor: '#EF6C00',//#0DC7633

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
      }
  }
},
{
    contentComponent: props => <ImageDrawer {...props} />
})

export const Drawer = DrawerNavigator({
  Home: {
    screen: Stack1,
    navigationOptions:{
      drawerLabel: 'Home'
    },
  },
  "navegarLugar": {
    screen: Home,
    navigationOptions:{
      drawerLabel: 'Aulas impares A2-001 al A2-007'
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
