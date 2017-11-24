import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native';
import {List, ListItem, SearchBar, Tabs, Tab, Icon, Button} from 'react-native-elements';
import {link} from '../config/data.js';


export default class Busqueda extends React.Component {

  constructor(){
      super()
      var ds= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      this.state = {
        dataSource: ds.cloneWithRows([]),
        text: '',
        espacio: ' ',
        lugares: ' ',
      }
  }

  componentDidMount(){

      var places = [];
      var filtro_lugares = [];
      fetch(link.concat('places.json'))
        .then((response) => response.json())
        .then((responseJson)=>{
          var aux= responseJson;
            for(var i=0; i<aux.length; i++){
              var objLugar = new Object();
                  objLugar.name = aux[i].name;
                  objLugar.descripcion = aux[i].description;

              places[i] = objLugar;
              filtro_lugares[i] = aux[i].name;
            }
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(places),
            lugares: places
          })
        })
    }


  render(){
     const {goBack} = this.props.navigation;
    return(
      <View>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1,justifyContent:'center', backgroundColor:'#e1e8ee', borderColor: 'black'}}>
            <Icon
              name='arrow-left'
              type='font-awesome'
              onPress={()=> goBack()}
              color='#86939e' />
          </View>
          <View style={{flex:7}}>
            <SearchBar
              round
              lightTheme
              clearIcon = {{name: 'close', type: 'font-awesome'}}
              onChangeText={(text) => this.filterSearch(text)}
              value={this.state.text}
              placeholder='Buscar Lugar...'/>
          </View>
          </View>
          <View  style={styles.buttonsContainer}>
           <View>
            <Button
              borderRadius = {6}
              large
              onPress = {this.listaxCategoria.bind(this, 'Comida')}
              style={styles.navigatorButton}
              icon={{name: 'cutlery' ,type: 'font-awesome'}}
              backgroundColor= '#EF6C00'
              />
            </View>
              <Button
                borderRadius = {6}
                onPress = {this.listaxCategoria.bind(this, 'Estacionamiento')}
                style={styles.navigatorButton}
                large
                style={{flex: 1}}
                icon={{name: 'car' ,type: 'font-awesome'}}
                backgroundColor= '#EF6C00'
                />
              <Button
                borderRadius = {6}
                onPress = {this.listaxCategoria.bind(this, 'Deporte')}
                style={styles.navigatorButton}
                large
                style={{flex: 1}}
                icon={{name: 'soccer-ball-o' ,type: 'font-awesome'}}
                backgroundColor= '#EF6C00'
                 />
          </View>
          <List>
            <ListView
              style={styles.container}
              enableEmptySections = {true}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
            />
          </List>
      </View>
    );
  }


  listaxCategoria(espacio){
    this.setState({
      espacio: espacio
    })
    if(espacio === 'Estacionamiento'){

      var places = [];
      fetch('https://ubicamet.herokuapp.com/categories/111/places')//https://ubicamet.herokuapp.com/categories/111/places'
        .then((response) => response.json())
        .then((responseJson)=>{
          var aux= responseJson;
            for(var i=0; i<aux.length; i++){
              var objLugar = new Object();
                  objLugar.name = aux[i].name;
                  objLugar.descripcion = aux[i].description;

              places[i] = objLugar
            }
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(places)
          })
        })
    }else if(espacio === 'Comida'){

      var places = [];
      fetch('https://ubicamet.herokuapp.com/categories/41/places')
        .then((response) => response.json())
        .then((responseJson)=>{
          var aux= responseJson;
            for(var i=0; i<aux.length; i++){
              var objLugar = new Object();
                  objLugar.name = aux[i].name;
                  objLugar.descripcion = aux[i].description;

              places[i] = objLugar
            }
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(places)
          })
        })
      }else if(espacio === 'Deporte'){

        var places=[];
        fetch('https://ubicamet.herokuapp.com/categories/101/places')
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux= responseJson;
              for(var i=0; i<aux.length; i++){
                var objLugar = new Object();
                    objLugar.name = aux[i].name;
                    objLugar.descripcion = aux[i].description;

                places[i] = objLugar
              }
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(places),
            })
          })
      }

    return(
      <List>
        <ListView
          style={styles.container}
          enableEmptySections = {true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </List>
    )
  }


  actualizarCoordenadas(json, dataRow){
    var descripcion='';
    var places= json;
    var coord = [];
    var images_array =[];
    var img=[];
    const {state} = this.props.navigation;
    const lugar = dataRow;


    for(var i=0; i<places.length; i++){
      if(lugar === places[i].name){
        coord[0] = places[i].longitude;
        coord[1] = places[i].latitude;
        descripcion = places[i].description;
        var enlace='http://192.168.1.11:3000'
        img[0] = places[i].image_url_medium;
        img[1] = places[i].avatar_url_medium;
        img[2] = places[i].picture_url_medium;
          for(var j=0; j<img.length; j++ ){
              var image = new Object();
              image.pic = enlace.concat(img[j]);
              image.key = j;
              images_array[j] = image;
          }
        i = places.length-1;
      }
    }


    const {navigate} = this.props.navigation;
    navigate('navegarLugar', {place: dataRow,
                              coord: coord,
                              descripcion: descripcion,
                              image: images_array});
  }

/////////////////////////////////////////////
/////////////////////////////////////////////
  pressCell(dataRow) {
    fetch(link.concat('places.json'))
      .then((response) => response.json())
      .then((responseJson)=>{
        var aux = responseJson;
          this.actualizarCoordenadas(aux, dataRow);
      })//si me aparece lo del problema de mounted, poner en vez de navegarLugar
  }

  filterSearch(text){
    var objLugares = this.state.lugares;
    var places = [];

      for(var i=0; i<objLugares.length; i++){
        places[i] = objLugares[i].name;
      }

      const newData = places.filter(function(item){
      const itemData = item.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    })
    var aux=[];
      for(var j=0; j<objLugares.length; j++){
          for(var k=0; k<newData.length; k++){
             if( objLugares[j].name === newData[k]){
               aux[k] = objLugares[j];
             }
          }
      }

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(aux),
      text: text
    })
  }

renderRow (dataRow, sectionID) {

  return (
    <ListItem
      fontFamily= 'Helvetica'
      titleStyle= {{color: 'white', fontWeight: 'bold'}}
      style= {styles.cell}
      chevronColor= 'white'
      onPress={()=>this.pressCell(dataRow.name)}
      roundAvatar
      key={sectionID}
      title={dataRow.name}
      subtitle={
        <Text style={styles.texto_descripcion}>{dataRow.descripcion}</Text>}
    />
  )
}
}


styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
  buttonsContainer:{
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    paddingBottom: 20,
  },
    containerTitulo: {
      paddingBottom: 30,
      alignItems: 'center'
    },
    letras: {
      fontSize: 50
    },
    cell: {
      borderBottomWidth:3,
      borderBottomColor: '#EF6C00',
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
    },
    container: {
      //flex: 1,
      //paddingTop:60,
      backgroundColor:'#0B59A7'
    },
    navigationBar:{
      flexDirection: 'row',
      paddingBottom: 0,
      justifyContent: 'center',
      alignItems:'center'
    },
    navigatorButton:{
    flex:1
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
    texto_descripcion:{
      color: '#99A3A4',
      fontFamily: 'Helvetica',
      fontSize: 11,
      fontWeight: 'bold',
      marginLeft: 10
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
})
