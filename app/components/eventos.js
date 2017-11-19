import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Icon } from 'react-native-elements'


export default class Eventos extends Component{



  render(){
    console.log('render1')
    return(
        <AgendaScreen
        />
    );
  }
}





 class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {'2017-10-22': [{text: 'Foro Bienvenido a tu futuro',
                              hour: '11:30 AM',
                              lugar: 'Auditorio Manoa'}],
      '2017-10-23': [{text: 'Escenarios Politicos De Venezuela',
                              hour: '9:30 AM',
                              lugar: 'Auditorio Fundación Polar'}],
      '2017-10-24': [],
      '2017-10-25': [{text: 'Charla Con Emprendedores',
                              hour: '2:00 PM',
                              lugar: 'Auditorio Francesca Pensieri'}],
      '2017-10-26': [],
    },
    lista: []
  }

}


  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        minDate={'2017-10-20'}
        selected={'2017-10-20'}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // monthFormat={'yyyy'}
        theme={{calendarBackground: '#0B59A7', agendaKnobColor: '#2a3c48'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }


  renderEvents(day){
        var items_eventos = this.state.lista;
        console.log('WUJUUU')
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
                for(let j=0 ; j<items_eventos.length; j++){
                    if(!this.state.items[items_eventos[j].date]){
                        this.state.items[items_eventos[j].date]=[]
                        this.state.items[items_eventos[j].date].push({
                      text: items_eventos[j].name,
                      hour: items_eventos[j].hour,
                      lugar: items_eventos[j].lugar
                    });
                  }
                }

            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
             if (!this.state.items[strTime]) {
               console.log('estoy adentro'+ strTime);
              this.state.items[strTime] = [];
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

    var eventos = [];
    fetch('https://ubicamet.herokuapp.com/events/')
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
      })
  }

  renderItem(item) {

    return (
      <View style={[styles.item, {height: item.height}]}>
        <Text style={{fontWeight: 'bold',textAlign:'center'}}>{item.text}</Text>
        <Text>  </Text>
        <Text style={{fontSize: 12}}>Hora: {item.hour}</Text>
        <Text style={{fontSize: 12}}>Lugar: {item.lugar}
          <Icon
            reverse
            name='map'
            type='font-awesome'
            color='#0B59A7'
            size = {15}
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
