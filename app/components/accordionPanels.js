import React, { Component } from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  ScrollView,
  ListView
} from 'react-native'; //Step 1
import Accordion from 'react-native-accordion';
import {ubicacion} from '../config/data.js';
import Panel from './accordion.js';

export default class Panels extends Component {

  constructor(){
      super()
      var ds= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds2= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds3= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds4= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds5= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds6= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds7= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds8= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds9= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds10= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds11= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })
      var ds12= new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2 })

      this.state = {
        dataSource: ds.cloneWithRows([]),
        dataSource2: ds2.cloneWithRows([]),
        dataSource3: ds3.cloneWithRows([]),
        dataSource4: ds4.cloneWithRows([]),
        dataSource5: ds5.cloneWithRows([]),
        dataSource6: ds6.cloneWithRows([]),
        dataSource7: ds7.cloneWithRows([]),
        dataSource8: ds8.cloneWithRows([]),
        dataSource9: ds9.cloneWithRows([]),
        dataSource10: ds10.cloneWithRows([]),
        dataSource11: ds11.cloneWithRows([]),
        dataSource12: ds12.cloneWithRows([]),
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
/////Comida
        var places = [];
        fetch('https://secure-cliffs-48876.herokuapp.com/categories/61/places')
          .then((response) => response.json())
          .then((responseJson)=>{
            var aux= responseJson;
              for(var i=0; i<aux.length; i++){
                places[i] = aux[i].name;
              }
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(places),
            })
          })

/////Auditorio
          var places2 = [];
          fetch('https://secure-cliffs-48876.herokuapp.com/categories/41/places')
            .then((response) => response.json())
            .then((responseJson)=>{
              var aux= responseJson;
                for(var i=0; i<aux.length; i++){
                  places2[i] = aux[i].name;
                }
              this.setState({
                dataSource2: this.state.dataSource.cloneWithRows(places2),
              })
            })

/////Estacionamientos
           var places3 = [];
           fetch('https://secure-cliffs-48876.herokuapp.com/categories/101/places')
             .then((response) => response.json())
             .then((responseJson)=>{
              var aux= responseJson;
                 for(var i=0; i<aux.length; i++){
                    places3[i] = aux[i].name;
                  }
                this.setState({
                    dataSource3: this.state.dataSource.cloneWithRows(places3),
                    })
              })

//////Aulas
              var places4 = [];
              fetch('https://secure-cliffs-48876.herokuapp.com/categories/1/places')
                .then((response) => response.json())
                .then((responseJson)=>{
                 var aux= responseJson;
                    for(var i=0; i<aux.length; i++){
                       places4[i] = aux[i].name;
                     }
                   this.setState({
                       dataSource4: this.state.dataSource.cloneWithRows(places4),
                       })
                 })

//////Laboratorios
                 var places5 = [];
                 fetch('https://secure-cliffs-48876.herokuapp.com/categories/11/places')
                   .then((response) => response.json())
                   .then((responseJson)=>{
                    var aux= responseJson;
                       for(var i=0; i<aux.length; i++){
                          places5[i] = aux[i].name;
                        }
                      this.setState({
                          dataSource5: this.state.dataSource.cloneWithRows(places5),
                          })
                    })

//////Departamentos y Escuelas
                    var places6 = [];
                    fetch('https://secure-cliffs-48876.herokuapp.com/categories/21/places')
                      .then((response) => response.json())
                      .then((responseJson)=>{
                       var aux= responseJson;
                          for(var i=0; i<aux.length; i++){
                             places6[i] = aux[i].name;
                           }
                         this.setState({
                             dataSource6: this.state.dataSource.cloneWithRows(places6),
                             })
                       })

/////Areas de estudio
                       var places7 = [];
                       fetch('https://secure-cliffs-48876.herokuapp.com/categories/31/places')
                         .then((response) => response.json())
                         .then((responseJson)=>{
                          var aux= responseJson;
                             for(var i=0; i<aux.length; i++){
                                places7[i] = aux[i].name;
                              }
                            this.setState({
                                dataSource7: this.state.dataSource.cloneWithRows(places7),
                                })
                          })

  }


  render(){
      return (  //Step 2
    <ScrollView style={styles.container}>
      <View style={styles.containerTitulo}>
          <Text style={styles.tituloMenu1}>  La</Text>
          <Text style={styles.tituloMenu2}>       Guia del</Text>
          <Text style={styles.tituloMenu3}>Estudiante</Text>
      </View>
      <View style={styles.container_acordion}>
          <Panel title="Auditorios">
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource2}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Comida">
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Estacionamientos">
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource3}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Aulas">
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource4}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Laboratorios">
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource5}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Departamentos y Escuelas">
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource6}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Areas de estudio">
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource7}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
      </View>
      <View style={{alignItems:'center'}}>
        <Image
          source={require('../image/Unimet_logo.png')}
          style={styles.image}/>
      </View>
    </ScrollView>
      );
    }


    pressCell(dataRow) {
    const {navigate} = this.props.navigation;
      navigate(dataRow, {place: dataRow});
    }


      renderRow(dataRow){
          return(
            <TouchableHighlight onPress={()=>this.pressCell(dataRow)}
              style={styles.containerRow}>
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
    container: {
      flex            : 1,
      backgroundColor : '#0B59A7',
      paddingTop      : 30
    },
    cell: {
      borderBottomWidth:3,
      borderBottomColor: '#DC7633',
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
    },
    texto:{
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 13,
      fontWeight: 'bold',
    },
    containerRow: {
      flex: 1,
      backgroundColor:'#0B59A7'
    },
    containerTitulo:{
      paddingBottom: 20,
      borderBottomWidth:5,
      borderBottomColor: '#34495E'
    },
    tituloMenu1:{
      fontSize: 55,
      textAlign: 'left',
      fontFamily: 'Savoye Let',
      paddingBottom: 0,
      fontWeight: 'bold',
      color:'white'
    },
    tituloMenu2:{
      fontSize: 55,
      textAlign: 'left',
      fontFamily: 'Savoye Let',
      fontWeight: 'bold',
      color:'white'
    },
    tituloMenu3:{
      fontSize: 55,
      fontWeight: 'bold',
      textAlign: 'right',
      fontFamily: 'Savoye Let',
      color:'white'
    },
    image:{
      width: 80,
      height: 80,
    },
    container_acordion:{
      borderBottomWidth:7,
      borderBottomColor: '#34495E',
      marginBottom: 30
    }
  });
