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
  Image
} from 'react-native';
import {datos, tipos} from '../config/data.js';
import { NavigationActions } from 'react-navigation';


export default class Procesos extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }


componentDidMount(){
   var tipos_procesos = [];
   fetch('http://192.168.1.11:3000/procedures.json')
     .then((response) => response.json())
     .then((responseJson)=>{
       var aux = responseJson;
         for(var i=0; i<aux.length; i++){
                   tipos_procesos[i] = aux[i].name;
         }
       this.setState({
         dataSource: this.state.dataSource.cloneWithRows(tipos_procesos)
       })
     })
}


pressCell(dataRow){
    this.props.navigation.navigate('CategoriaProceso', {categoryName: dataRow});
  }

 renderRow(dataRow){
  return (
    <TouchableHighlight onPress={() => this.pressCell(dataRow)}>
      <View style={styles.cell}>
        <Text
          style={styles.texto}
          >{dataRow}</Text>
      </View>
    </TouchableHighlight>
  );
}

render() {
 return (
    <View style={styles.container}>
      <ListView
        removeClippedSubviews={false}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
      <View>
     <Image
       source={require('../image/saman-sepia.jpg')}
       style={styles.image}/>
     </View>
   </View>
    );
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
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center'
  },
  container: {
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
    fontSize: 14,
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
      height:450,
      alignItems: 'center'
    },
});
