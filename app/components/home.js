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
import { NavigationActions } from 'react-navigation';
import {api} from '../config/data.js';
import {Tabs, Stack1, Stack2, Stackdef} from '../config/router.js';


export default class Home extends React.Component {

  render(){
    const {state} = this.props.navigation;
    return(
        <Stackdef
          screenProps={
             {place: state.params.place,
             coord: state.params.coord,
             descripcion: state.params.descripcion,
             image: state.params.image}
          }
        />
    );

  }
}



const styles = StyleSheet.create({
  containerDetails: {
    paddingTop: 80,
    alignItems: 'center'
  },
});
