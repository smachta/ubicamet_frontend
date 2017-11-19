'use strict';
/* eslint no-console: 0 */

import React, { Component } from 'react';
import Mapbox, { MapView } from 'react-native-mapbox-gl';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  ScrollView
} from 'react-native';
import {ubicacion} from '../config/data.js';
import { Button } from 'react-native-elements';

const accessToken = 'pk.eyJ1Ijoic2FsdmFtMTAwIiwiYSI6ImNqNjA1aXNjNTBod3YzM212dmpiaGlqamgifQ._zxPSdROi-em--GJtflQCA';
Mapbox.setAccessToken(accessToken);

export default class MapExample extends Component {


  state = {
    nombre_lugar:'Caracas',
    center: {
      latitude: 10.4988,
      longitude: - 66.7851
    },
    zoom: 16 ,
    userTrackingMode: Mapbox.userTrackingMode.followWithCourse,
    annotations: [{
      coordinates: [10.4988, - 66.7851],
      type: 'point',
      title: 'This is marker 1',
      subtitle: 'It has a rightCalloutAccessory too',
      rightCalloutAccessory: {
        source: { uri: 'https://cldup.com/9Lp0EaBw5s.png' },
        height: 25,
        width: 25
      },
      annotationImage: {
        source: { uri: '/Users/smachta1/Downloads/metro_marker.png' },
        height: 25,
        width: 25
      },
      id: 'marker1'
    }, {
      coordinates: [40.714541341726175,-74.00579452514648],
      type: 'point',
      title: 'Important!',
      subtitle: 'Neat, this is a custom annotation image',
      annotationImage: {
        source: { uri: 'https://cldup.com/7NLZklp8zS.png' },
        height: 25,
        width: 25
      },
      id: 'marker2'
    }, {
      coordinates: [[40.76572150042782,-73.99429321289062],[40.743485405490695, -74.00218963623047],[40.728266950429735,-74.00218963623047],[40.728266950429735,-73.99154663085938],[40.73633186448861,-73.98983001708984],[40.74465591168391,-73.98914337158203],[40.749337730454826,-73.9870834350586]],
      type: 'polyline',
      strokeColor: '#00FB00',
      strokeWidth: 4,
      strokeAlpha: .5,
      id: 'foobar'
    }, {
      coordinates: [[40.749857912194386, -73.96820068359375], [40.741924698522055,-73.9735221862793], [40.735681504432264,-73.97523880004883], [40.7315190495212,-73.97438049316406], [40.729177554196376,-73.97180557250975], [40.72345355209305,-73.97438049316406], [40.719290332250544,-73.97455215454102], [40.71369559554873,-73.97729873657227], [40.71200407096382,-73.97850036621094], [40.71031250340588,-73.98691177368163], [40.71031250340588,-73.99154663085938]],
      type: 'polygon',
      fillAlpha: 1,
      strokeColor: '#ffffff',
      fillColor: '#0000ff',
      id: 'zap'
    }]
  };

  componentDidMount(){
const {state} = this.props.navigation;

  }

  onRegionDidChange = (location) => {
    this.setState({ currentZoom: location.zoomLevel });
    console.log('onRegionDidChange', location);
  };
  onRegionWillChange = (location) => {
    console.log('onRegionWillChange', location);
  };
  onUpdateUserLocation = (location) => {
    console.log('onUpdateUserLocation', location);
  };
  onOpenAnnotation = (annotation) => {
    console.log('onOpenAnnotation', annotation);
  };
  onRightAnnotationTapped = (e) => {
    console.log('onRightAnnotationTapped', e);
  };
  onLongPress = (location) => {
    console.log('onLongPress', location);
  };
  onTap = (location) => {
    console.log('onTap', location);
  };
  onChangeUserTrackingMode = (userTrackingMode) => {
    this.setState({ userTrackingMode });
    console.log('onChangeUserTrackingMode', userTrackingMode);
  };

  componentWillMount() {
    this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
      console.log('offline pack progress', progress);
    });
    this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
      console.log('offline max allowed tiles', tiles);
    });
    this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
      console.log('offline error', error);
    });

/*
    fetch('http://192.168.1.11:3000/places')
      .then((response) => response.json())
      .then((responseJson)=>{
        var aux= responseJson;
        this.setState({
          nombre_lugar: aux
        })
        this.updateMarker1(aux);
      })*/
      var aux= 'borrar';
      this.updateMarker1(aux);
  }

  componentWillUnmount() {
    this._offlineProgressSubscription.remove();
    this._offlineMaxTilesSubscription.remove();
    this._offlineErrorSubscription.remove();
  }

  addNewMarkers = () => {
    // Treat annotations as immutable and create a new one instead of using .push()
    this.setState({
      annotations: [ ...this.state.annotations, {
        coordinates: [40.73312,-73.989],
        type: 'point',
        title: 'This is a new marker',
        id: 'foo'
      }, {
        'coordinates': [[40.749857912194386, -73.96820068359375], [40.741924698522055,-73.9735221862793], [40.735681504432264,-73.97523880004883], [40.7315190495212,-73.97438049316406], [40.729177554196376,-73.97180557250975], [40.72345355209305,-73.97438049316406], [40.719290332250544,-73.97455215454102], [40.71369559554873,-73.97729873657227], [40.71200407096382,-73.97850036621094], [40.71031250340588,-73.98691177368163], [40.71031250340588,-73.99154663085938]],
        'type': 'polygon',
        'fillAlpha': 1,
        'fillColor': '#000000',
        'strokeAlpha': 1,
        'id': 'new-black-polygon'
      }]
    });
  };

  updateMarker1 = (json) => {

    var nom='';
    //var places= json;
    var places = ubicacion.lugares //borrar en lo que ale venga
    var coord = [];
        const {state} = this.props.navigation;


        for(var i=0; i<places.length; i++){
          if(state.routeName === places[i].name){
            coord[0] = places[i].longitude;
            coord[1] = places[i].latitude;
            nom = places[i].name;
            i = places.length-1;
          }else{
            coord[0] = places[i].longitude;
            coord[1] = places[i].latitude;
            nom = places[i].name;
          }
        }

    // Treat annotations as immutable and use .map() instead of changing the array
    this.setState({
      annotations: this.state.annotations.map(annotation => {
        if (annotation.id !== 'marker1') { return annotation; }
        return {
          coordinates: coord,
          'type': 'point',
          title: 'SAMAN',
          subtitle: 'Símbolo de la Universidad Metropolitana',
          annotationImage: {
            source: { uri: '/Users/smachta1/Downloads/metro_marker.png' },
            height: 35,
            width: 35
          },
          id: 'marker1'
        };
      })
    });
  };

  removeMarker2 = () => {
    this.setState({
      annotations: this.state.annotations.filter(a => a.id !== 'marker2')
    });
  };

  render() {
    StatusBar.setHidden(true);
    return (
      <View style={styles.container}>
        <View style= {styles.container_button}>
          <Button
            small
            containerViewStyle = {styles.container_button}
            buttonStyle= {styles.button}
            icon={{name: 'search', type: 'font-awesome'}}
            backgroundColor = '#BDC3C7'
            title= '                                                              '
            borderRadius = {6}
            fontFamily ='Helvetica'
            onPress={() => this.props.navigation.navigate('Busqueda')}/>
        </View>
        <MapView
          ref={map => { this._map = map; }}
          style={styles.map}
          initialCenterCoordinate={this.state.center}
          initialZoomLevel={this.state.zoom}
          initialDirection={0}
          rotateEnabled={true}
          annotationsPopUpEnabled={true}
          scrollEnabled={true}
          zoomEnabled={true}
          showsUserLocation={true}
          styleURL={Mapbox.mapStyles.hybrid}
          userTrackingMode={this.state.userTrackingMode}
          annotations={this.state.annotations}
          annotationsAreImmutable
          onChangeUserTrackingMode={this.onChangeUserTrackingMode}
          onRegionDidChange={this.onRegionDidChange}
          onRegionWillChange={this.onRegionWillChange}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation}
          onLongPress={this.onLongPress}
          onTap={this.onTap}
          compassIsHidden={false}
        />  
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  map: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  button:{
    flex:1
  },
  container_button:{
    backgroundColor:'#CACFD2',
  },
  buttonStyle:{

  }
});
