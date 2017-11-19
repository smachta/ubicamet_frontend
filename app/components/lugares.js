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


export default class Lugares extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        lugares: '',
      }
    }

    Hola() {
      var places = '';
        fetch('http://192.168.1.11:3000/places')
        .then((response) => response.json())
        .then((responseJson)=>{
          var places= responseJson[0].name;
            this.setState({
              lugares: places
            })
         })
         .catch((error) => {
           console.error(error);
         });
         return this.state.lugares
     }

  render(){

    return(
      <Text style={styles.containerDetails}> {this.Hola()}</Text>
    );

  }
}



const styles = StyleSheet.create({
  containerDetails: {
    paddingTop: 80,
    alignItems: 'center'
  },
});
