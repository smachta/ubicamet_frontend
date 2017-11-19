
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  AlertIOS,
  NavigatorIOS
} from 'react-native';
import MapExample from './mapa.js';
import {Tabs, Stack1, Stack2, Drawer} from '../config/router.js';


export default class Ubicamet extends Component {
    render(){
      return(
      <Drawer/>
      );
    }
}



const styles = StyleSheet.create({
  containerDetails: {
    paddingTop: 80 ,
    alignItems: 'center',

  },
  letras: {
    fontSize: 50,
    color: 'blue'
  },
  cell: {
    borderBottomWidth:1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#505ecc',
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
