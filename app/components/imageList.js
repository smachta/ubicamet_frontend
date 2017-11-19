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
import Swiper from 'react-native-swiper'

const {width} = Dimensions.get('window')

export default class ImageList extends Component {

renderItem(item){
   return(
    <View>
     <View>
     <Image style={{width: 100, height: 200, marginBottom:0}}
      source={{uri: item.pic}}/>
      </View>
    </View>
   )
}

renderSeparator = () => {
   return (
     <View
       style={{
         marginLeft: "35.6%"
       }}
     />
   );
 };

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          horizontal
          ItemSeparatorComponent={this.renderSeparator}
          data={this.props.data}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    )
  }

}

  const styles= StyleSheet.create({
    container: {
      flex:1  ,
      paddingTop: 10
    },
    image:{
      flex:1,
      width: width
    },
    sliderContainer:{
      flex:1,
      justifyContent: 'center'
    }
  })
