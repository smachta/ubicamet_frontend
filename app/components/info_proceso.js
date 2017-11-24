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
  NavigatorIOS,
  ScrollView,
  Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {api} from '../config/data.js';
import Hyperlink from 'react-native-hyperlink';
import {link} from '../config/data.js';

export default class Info extends React.Component {

  constructor(props){
      super(props);
      this.state={
        descripcion: ' ',
        image: ' '
      }

    }

  static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.processName}`
  });


  componentWillMount(){
      const {state} = this.props.navigation;
      processName = state.params.processName;
      processCategory = state.params.processCategory;
      var processInfo = [];

      if(processCategory === 'Académicos'){
        fetch(link.concat('procedures/3/subpocesses.json'))
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux = responseJson;
            var objProcess = new Object();
              for(var i=0; i<aux.length; i++){
                    if(processName === aux[i].name){
                        objProcess.descripcion = aux[i].description;
                        var string1='http://192.168.43.147:3000'
                        var string2 = aux[i].image_url_medium;
                        var resp = string1.concat(string2);
                        objProcess.image= resp;
                    }
              }
            this.setState({
              descripcion: objProcess.descripcion,
              image: objProcess.image
            })
          })
      }
      else if (processCategory === 'Administrativo') {
        fetch(link.concat('procedures/2/subpocesses.json'))
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux = responseJson;
            var objProcess = new Object();
              for(var i=0; i<aux.length; i++){
                    if(processName === aux[i].name){
                        objProcess.descripcion = aux[i].description;
                        var string1='http://192.168.1.11:3000'
                        var string2 = aux[i].image_url_medium;
                        var resp = string1.concat(string2);
                        objProcess.image= resp;
                    }
              }
            this.setState({
              descripcion: objProcess.descripcion,
              image: objProcess.image
            })
          })
      }
      else if(processCategory === 'Inscripcion'){
        fetch(link.concat('procedures/1/subpocesses.json'))
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux = responseJson;
            var objProcess = new Object();
              for(var i=0; i<aux.length; i++){
                    if(processName === aux[i].name){
                        objProcess.descripcion = aux[i].description;
                        var string1='http://192.168.1.11:3000'
                        var string2 = aux[i].image_url_medium;
                        var resp = string1.concat(string2);
                        objProcess.image= resp;
                    }
              }
            this.setState({
              descripcion: objProcess.descripcion,
              image: objProcess.image
            })
          })
      }
      else if(processCategory === 'Condiciones de Graduación'){
        fetch(link.concat('procedures/4/subpocesses.json'))
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux = responseJson;
            var objProcess = new Object();
              for(var i=0; i<aux.length; i++){
                    if(processName === aux[i].name){
                        objProcess.descripcion = aux[i].description;
                        var string1='http://192.168.1.11:3000'
                        var string2 = aux[i].image_url_medium;
                        var resp = string1.concat(string2);
                        objProcess.image= resp;
                    }
              }
            this.setState({
              descripcion: objProcess.descripcion,
              image: objProcess.image
            })
          })
      }
      else if(processCategory === 'Apoyo Socioeconómico'){
        fetch(link.concat('procedures/5/subpocesses.json'))
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux = responseJson;
            var objProcess = new Object();
              for(var i=0; i<aux.length; i++){
                    if(processName === aux[i].name){
                        objProcess.descripcion = aux[i].description;
                        var string1='http://192.168.1.11:3000'
                        var string2 = aux[i].image_url_medium;
                        var resp = string1.concat(string2);
                        objProcess.image= resp;
                    }
              }
            this.setState({
              descripcion: objProcess.descripcion,
              image: objProcess.image
            })
          })
      }
      else{
        fetch(link.concat('procedures/6/subpocesses.json'))
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux = responseJson;
            var objProcess = new Object();
              for(var i=0; i<aux.length; i++){
                    if(processName === aux[i].name){
                        objProcess.descripcion = aux[i].description;
                        var string1='http://192.168.1.11:3000'
                        var string2 = aux[i].image_url_medium;
                        var resp = string1.concat(string2);
                        objProcess.image= resp;
                    }
              }
            this.setState({
              descripcion: objProcess.descripcion,
              image: objProcess.image
            })
          })
      }
  }

  dividirParrafo(cadena){
    var vector = cadena.split('*');

      return(
      vector.map((item, i) => (vector[i].substr(-1) ==='+') ?
        <Text key= {i}
              style={styles.titles}>{item.split('+')}</Text>
        :(item.indexOf('http')>=0)?
              <Hyperlink linkDefault={true}
                          linkStyle={ { color: '#2980b9'}}
                          key={i}>
              <Text key={i}
              style={styles.descripcionText}>{item}</Text>
              </Hyperlink>
              :
              <Text key={i}
                    style={styles.descripcionText}>{item}</Text>
              )
      )

  }


  render(){

    return(
      <ScrollView style={styles.containerDetails}>
        <Image
          style={{width: 400 , height:250, marginBottom: 10}}
          source={{uri:this.state.image}}
        />
        <View>{this.dividirParrafo(this.state.descripcion)}</View>
      </ScrollView>
    );

  }
}



const styles = StyleSheet.create({
  containerDetails: {
    flex: 1,
    backgroundColor:'white',
    paddingBottom: 10

  },
  descripcionText:{
    fontFamily: 'Helvetica',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'justify',
    marginRight: 10,
    color: '#626567'
  },
  titles:{
    color:'black',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textAlign: 'justify',
    marginLeft: 8,
    marginRight: 10
  }
});
