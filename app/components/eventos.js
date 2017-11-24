import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Icon } from 'react-native-elements'


const link = 'http://192.168.43.147:3000/'

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
    },
    lista: [],
    day: {year: 2017, month: 10, day: 7, timestamp: 1507420800000, dateString: "2017-10-08"}
  }
// this.pressCellMethod = this.pressCell.bind(this, 'Auditorio Francesca Pensieri')
}

componentWillMount(){
  var eventos = [];
  fetch(link.concat('events.json'))
      .then((response) => response.json())
      .then((responseJson)=>{
        var aux= responseJson;
          for(var i=0; i<aux.length; i++){
            var objEvento = new Object();
                objEvento.name = aux[i].title;
                objEvento.date  = aux[i].date.slice(0,10);
                objEvento.endDate = aux[i].end.slice(0,10);
                objEvento.hour  = aux[i].hour;
                objEvento.lugar = aux[i].place_string;
            eventos[i] = objEvento;
          }
        this.setState({
            lista: eventos
        })
        this.renderEvents(this.state.day);
      })
}

  render() {
    var date= new Date();
    var fechaActual= date.toISOString().split('T')[0];
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        minDate={fechaActual}
        selected={fechaActual}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // monthFormat={'yyyy'}
        theme={{calendarBackground: '#0B59A7',
                agendaKnobColor: '#2a3c48',
                agendaTodayColor: '#EF6C00',
                monthTextColor: 'white',
                dayTextColor: '#FF9900',
                textSectionTitleColor: '#00adf5',
                textDisabledColor: 'black'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }




  renderEvents(day){
        var items_eventos = this.state.lista;
        oneDay = 24*60*60*1000;

        setTimeout(() => {
          for (let i = -15; i < 200; i++) {

            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
             if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];
              }
          }

          for(let j=0 ; j<items_eventos.length;j++){
            console.log('la diferencia');
            var inicio = new Date(items_eventos[j].date).getTime();
            var final = new Date(items_eventos[j].endDate).getTime();
            var dif = Math.round(Math.abs((inicio-final)/(oneDay)));
              if(dif > 0 ){
                for(var k=0; k<dif+1; k++){
                  var fecha = new Date(items_eventos[j].date);
                  fecha.setDate(fecha.getDate()+k);
                  var strFecha = fecha.toISOString().split('T')[0];
                  this.state.items[strFecha].push({
                    text: items_eventos[j].name,
                    hour: items_eventos[j].hour,
                    lugar: items_eventos[j].lugar
                  });
                }
              }else{
                this.state.items[items_eventos[j].date].push({
                  text: items_eventos[j].name,
                  hour: items_eventos[j].hour,
                  lugar: items_eventos[j].lugar
                });
              }
        }

          const newItems = {};
          Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
          this.setState({
            items: newItems
          });
        }, 1000);
        // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  loadItems(day){

  /*  fetch('http://192.168.1.11:3000/events.json')
      .then((response) => response.json())
      .then((responseJson)=>{
        var aux= responseJson;
          for(var i=0; i<aux.length; i++){
            var objEvento = new Object();
                objEvento.name = aux[i].title;
                objEvento.date  = aux[i].date;
                objEvento.hour  = aux[i].hour;
                objEvento.lugar = aux[i].place_string;
            eventos[i] = objEvento;
          }
        this.setState({
            lista: eventos
        })
        this.renderEvents(day);
      })*/
  }


  alertDescription(info, titulo){
    Alert.alert(
titulo,
  info,
[
  {text: 'OK', onPress: () => console.log('OK Pressed')},
],
{ cancelable: false }
)
  }


  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}>
        <Text style={{fontWeight: 'bold',textAlign:'center'}}>{item.text}</Text>
        <Text> </Text>
        <Text style={{fontSize: 12, paddingBottom:10}}>Hora: {item.hour}
          <Icon
          reverse
          name='info'
          type='font-awesome'
          color='#0B59A7'
          size = {10}
          onPress= {this.alertDescription.bind(this, item.description, item.text)}/></Text>
        <Text style={{fontSize: 12}}>Lugar: {item.lugar}
          <Icon
            reverse
            name='map'
            type='font-awesome'
            color='#0B59A7'
            size = {15}
            onPress= {this.pressCell.bind(this, item.lugar)}
        /></Text>



      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>No hay eventos para esta fecha!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
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




  pressCell(dataRow) {
      fetch(link.concat('places.json'))
      .then((response) => response.json())
      .then((responseJson)=>{
        var aux = responseJson;
          this.actualizarCoordenadas(aux, dataRow);
      })//si me aparece lo del problema de mounted, poner en vez de navegarLugar
  }


}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,

  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});
