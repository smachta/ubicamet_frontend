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
import Panel from './accordion.js';

var background = '#DC7633'

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
        dataSource13: ds12.cloneWithRows([]),
        dataSource14: ds12.cloneWithRows([]),
        dataSource15: ds12.cloneWithRows([]),
        dataSource16: ds12.cloneWithRows([]),
        dataSource17: ds12.cloneWithRows([]),
        longitude: '',
        latitude:' '
      }
  }

  componentDidMount(){
  
/////Comida
        var places = [];
        fetch('https://ubicamet.herokuapp.com/categories/41/places')
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
          fetch('https://ubicamet.herokuapp.com/categories/21/places')
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
           fetch('https://ubicamet.herokuapp.com/categories/111/places')
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
              fetch('https://ubicamet.herokuapp.com/categories/31/places')
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
                 fetch('https://ubicamet.herokuapp.com/categories/121/places')
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

//////Departamentos
                    var places6 = [];
                    fetch('https://ubicamet.herokuapp.com/categories/71/places')
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
                       fetch('https://ubicamet.herokuapp.com/categories/11/places')
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

/////Administrativo
                        var places8 = [];
                        fetch('https://ubicamet.herokuapp.com/categories/1/places')
                          .then((response) => response.json())
                          .then((responseJson)=>{
                           var aux= responseJson;
                              for(var i=0; i<aux.length; i++){
                                 places8[i] = aux[i].name;
                               }
                             this.setState({
                                 dataSource8: this.state.dataSource.cloneWithRows(places8),
                                 })
                           })

/////Cultura y recreacion
                           var places9 = [];
                           fetch('https://ubicamet.herokuapp.com/categories/51/places')
                             .then((response) => response.json())
                             .then((responseJson)=>{
                              var aux= responseJson;
                                 for(var i=0; i<aux.length; i++){
                                    places9[i] = aux[i].name;
                                  }
                                this.setState({
                                    dataSource9: this.state.dataSource.cloneWithRows(places9),
                                    })
                              })

/////Decanatos y Rectorados
                              var places10 = [];
                              fetch('https://ubicamet.herokuapp.com/categories/61/places')
                                .then((response) => response.json())
                                .then((responseJson)=>{
                                 var aux= responseJson;
                                    for(var i=0; i<aux.length; i++){
                                       places10[i] = aux[i].name;
                                     }
                                   this.setState({
                                       dataSource10: this.state.dataSource.cloneWithRows(places10),
                                       })
                                 })

/////Direcciones
                                 var places11 = [];
                                 fetch('https://ubicamet.herokuapp.com/categories/81/places')
                                   .then((response) => response.json())
                                   .then((responseJson)=>{
                                    var aux= responseJson;
                                       for(var i=0; i<aux.length; i++){
                                          places11[i] = aux[i].name;
                                        }
                                      this.setState({
                                          dataSource11: this.state.dataSource.cloneWithRows(places11),
                                          })
                                    })

////Escuelas
                                    var places12 = [];
                                    fetch('https://ubicamet.herokuapp.com/categories/91/places')
                                      .then((response) => response.json())
                                      .then((responseJson)=>{
                                       var aux= responseJson;
                                          for(var i=0; i<aux.length; i++){
                                             places12[i] = aux[i].name;
                                           }
                                         this.setState({
                                             dataSource12: this.state.dataSource.cloneWithRows(places12),
                                             })
                                       })


/////Deporte
                                    var places13 = [];
                                    fetch('https://ubicamet.herokuapp.com/categories/101/places')
                                      .then((response) => response.json())
                                      .then((responseJson)=>{
                                        var aux= responseJson;
                                            for(var i=0; i<aux.length; i++){
                                              places13[i] = aux[i].name;
                                              }
                                            this.setState({
                                                dataSource13: this.state.dataSource.cloneWithRows(places13),
                                              })
                                       })



/////Oficinas
                                    var places14 = [];
                                    fetch('https://ubicamet.herokuapp.com/categories/131/places')
                                      .then((response) => response.json())
                                      .then((responseJson)=>{
                                        var aux= responseJson;
                                            for(var i=0; i<aux.length; i++){
                                              places14[i] = aux[i].name;
                                              }
                                            this.setState({
                                                dataSource14: this.state.dataSource.cloneWithRows(places14),
                                              })
                                       })

/////Otros
                                    var places15 = [];
                                    fetch('https://ubicamet.herokuapp.com/categories/141/places')
                                      .then((response) => response.json())
                                      .then((responseJson)=>{
                                        var aux= responseJson;
                                            for(var i=0; i<aux.length; i++){
                                              places15[i] = aux[i].name;
                                              }
                                            this.setState({
                                                dataSource15: this.state.dataSource.cloneWithRows(places15),
                                              })
                                       })

/////Servicios
                                    var places16 = [];
                                    fetch('https://ubicamet.herokuapp.com/categories/151/places')
                                      .then((response) => response.json())
                                      .then((responseJson)=>{
                                        var aux= responseJson;
                                            for(var i=0; i<aux.length; i++){
                                              places16[i] = aux[i].name;
                                              }
                                            this.setState({
                                                dataSource16: this.state.dataSource.cloneWithRows(places16),
                                              })
                                       })

/////Edificios
                                    var places17 = [];
                                    fetch('https://ubicamet.herokuapp.com/categories/161/places')
                                      .then((response) => response.json())
                                      .then((responseJson)=>{
                                        var aux= responseJson;
                                            for(var i=0; i<aux.length; i++){
                                              places17[i] = aux[i].name;
                                              }
                                            this.setState({
                                                dataSource17: this.state.dataSource.cloneWithRows(places17),
                                              })
                                       })

}


  render(){
      return (  //Step 2
    <ScrollView style={styles.container}>
      <View style={styles.containerTitulo}>
          <Image source={require('../image/Ubicamet.png')}
          style={styles.image}/>
      </View>
      <View style={styles.container_acordion}>
          <Panel title="Auditorios"
                background={'#AD5203'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource2}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Comida"
                 background={'#B85702'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Estacionamientos"
                 background={'#C35C02'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource3}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Aulas"
                 background={'#CC6001'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource4}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Laboratorios"
                 background={'#D46503'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource5}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Departamentos"
                 background={'#E06B04'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource6}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Areas de estudio"
                 background={'#ED7206'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource7}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Decanatos y Rectorados"
                     background={'#EF6C00'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource10}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Direcciones"
                 background={'#F57C00'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource11}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Escuelas"
                 background={'#FB8C00'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource12}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Deporte"
                 background={'#FF9800'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource13}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Oficinas"
                 background={'#FFA726'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource14}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Otros"
                 background={'#FFB74D'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource15}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Servicios"
                 background={'#FFCC80'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource16}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Edificios"
                 background={'#FFE0B2'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource17}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
          <Panel title="Cultura y Recreación"
                 background={'#FFF3E0'} >
            <ListView
              enableEmptySections = {true}
              dataSource = {this.state.dataSource9}
              renderRow = {this.renderRow.bind(this)}
            />
          </Panel>
      </View>
      <View style={{alignItems:'center'}}>
          <Text style={styles.developedTitle}>Developed by Salvador Machta & Alejandro Chiossone</Text>
      </View>
    </ScrollView>
      );
    }

      actualizarCoordenadas(json, dataRow){
        var descripcion='';
        var places= json;
        var coord = [];
        var images_array = [];
        var img = [];
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


    pressCell(dataRow) {
      fetch('http://192.168.1.11:3000/places.json')
        .then((response) => response.json())
        .then((responseJson)=>{
          var aux = responseJson;
            this.actualizarCoordenadas(aux, dataRow);
        })//si me aparece lo del problema de mounted, poner en vez de navegarLugar
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
      backgroundColor : 'white',
      paddingTop      : 30
    },
    cell: {
      borderBottomWidth:1,
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
      backgroundColor:'#055CB3'
    },
    containerTitulo:{
      paddingTop: 20,
      paddingBottom: 40,
      borderBottomColor: '#34495E',
      alignItems: 'center'
    },
    image:{
      width: 220,
      height: 40,
    },
    container_acordion:{
      marginBottom: 30
    },
    developedTitle:{
      fontFamily: 'Helvetica',
      fontSize: 10,
      color: 'black',
      fontWeight: 'bold'
    }
  });
