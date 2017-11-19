import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';
import {datos, array_inscripciones} from '../config/data.js';



export default class Inscripciones extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }


componentDidMount(){
   var tipos_procesos = [];
   var aux = datos.Inscripciones;
   this.setState({
     dataSource: this.state.dataSource.cloneWithRows(aux)
   })
}

pressCell(dataRow){
  this.props.navigation.navigate(dataRow);
}

 renderRow(dataRow){
  return (
    <TouchableHighlight onPress={() => this.pressCell(dataRow)}>
      <View style={styles.cell}>
        <Text style={styles.texto}>{dataRow}</Text>
      </View>
    </TouchableHighlight>
  );
}

render() {
 return (
    <View style={styles.container}>
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
      <View>
     <Image
       source={require('../image/bandera-unimet.jpg')}
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
    fontSize: 16,
  },
  titulo:{
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Copperplate',
    color: 'white',
    textAlign: 'center'
  },
    image: {
      width: 500,
      height:200,
      alignItems: 'center'
    }
});
