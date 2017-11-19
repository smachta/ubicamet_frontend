import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import {shows_First} from '../config/data.js'
import ImageList from './imageList.js'
import Slide from './slider.js'



export default class ImageDrawer extends Component {

  render(){
    return(
    <View style={{flex:1}}>
      <View style={{flex:2, backgroundColor: '#BDC3C7'}}>
        <View style={{flex:1}}>
        <Slide
          data={this.props.screenProps.image}
        />
        </View>
        <View style={{flex:1}}>
         <ImageList
           data= {this.props.screenProps.image}
           coord={this.props.screenProps.coord[0]}
         />
       </View>
     </View>
     <View style={styles.textContainer}>
       <View style={{borderBottomWidth:2, borderBottomColor:'#BDC3C7', marginRight:8}}>
      <Text style={styles.title}>{this.props.screenProps.place}</Text>
       </View>
       <View>
      <Text style={styles.description}>{this.props.screenProps.descripcion}</Text>
       </View>
    </View>
  </View>
    )
  }
}



const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'white',
    flex:1
  },
    title: {
    fontFamily:'Helvetica',
    fontSize:18,
    fontWeight: 'bold',
    borderColor: 'black',
    paddingTop: 35,
    color: '#EF6C00',
    marginLeft: 6,
    //width: width
  },
  description: {
  fontFamily:'Helvetica',
  color:'#626567',
  fontSize: 16,
  fontWeight: 'bold',
  paddingTop: 20,
  marginLeft: 6,
  marginRight: 6,
  textAlign: 'justify',
  //width: width
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
