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
import {ubicacion} from '../config/data.js';
import MapExample from './mapa.js'


export default class Menu extends Component {
  constructor(){
      super()
      var ds= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      this.state = {
        dataSource: ds.cloneWithRows([])
      }
  }

  componentDidMount(){
    var places = ubicacion.lugares;
    var aux = [];
    for(var i = 0 ; i< places.length; i++){
        aux[i] = places[i].name
    }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(aux)
        })

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>
            Los Más Buscados
          </Text>
        </View>
        <ListView
          enableEmptySections = {true}
          dataSource = {this.state.dataSource}
          renderRow = {this.renderRow.bind(this)}
        />
      </View>
    );
  }
  pressCell(dataRow) {
  const {navigate} = this.props.navigation;
    navigate(dataRow, {place: dataRow});
  }


  renderRow(dataRow){
      return(
        <TouchableHighlight onPress={()=>this.pressCell(dataRow)}>
          <View
            style= {styles.cell}>
              <Text style={styles.texto}>
                {dataRow}
              </Text>
          </View>
        </TouchableHighlight>
      )
  }
}

const styles = StyleSheet.create({
  containerTitulo: {
    paddingBottom: 30,
    alignItems: 'center'
  },
  letras: {
    fontSize: 50
  },
  cell: {
    borderBottomWidth:3,
    borderBottomColor: '#DC7633',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    paddingTop:60,
    backgroundColor:'#0B59A7'
  },
  navigationBar:{
    flexDirection: 'row',
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems:'center'
  },
  navigatorButton:{
  flex:1,
  textAlign:'center'
  },
  navigatorTitle:{
    flex:3,
    textAlign:'center'
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
  texto:{
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo:{
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
    color: 'white',
    textAlign: 'center'
  },
  image: {
    width: 400,
    height:400,
    alignItems: 'center'
  }
});
