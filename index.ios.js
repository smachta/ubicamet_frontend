
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Ubicamet from './app/components/app.js';


export default class UbicametApp extends Component {
    render(){
      return(
      <Ubicamet/>
      );
    }
}
AppRegistry.registerComponent('ubicamet', () => UbicametApp);
