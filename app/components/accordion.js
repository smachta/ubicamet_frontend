import React, { Component } from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated,
  ScrollView,
} from 'react-native';
import Accordion from 'react-native-accordion';


export default class Panel extends Component {
  constructor(props){
          super(props);

          this.icons = {     //Step 2
              'up'    : require('../image/upArrow.png'),
              'down'  : require('../image/downArrow.png')
          };

          this.state = {       //Step 3
              title       : props.title,
              expanded    : false,
              animation   : new Animated.Value(29),

          };
      }

      toggle(){
        //Step 1
        // let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
          //   finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

         let initialValue    = this.state.expanded? 350:29,
             finalValue      = this.state.expanded? 29:350;
         this.setState({
             expanded : !this.state.expanded  //Step 2
         });

         this.state.animation.setValue(initialValue);  //Step 3
         Animated.spring(     //Step 4
             this.state.animation,
             {
                 toValue: finalValue
             }
         ).start();  //Step 5
      }


    _setMaxHeight(event){
    this.setState({
        maxHeight   : event.nativeEvent.layout.height  //St
    });
      //console.log('maximo');
      //console.log(this.state.maxHeight);
  }

  _setMinHeight(event){
  this.setState({
      minHeight   : event.nativeEvent.layout.height,
  });
  //console.log('minimo');
  //console.log(this.state.minHeight);
}


      render(){
          let icon = this.icons['down'];

          if(this.state.expanded){
              icon = this.icons['up'];   //Step 4
          }

          //Step 5
          return (
            <Animated.View
              style={[styles.container,{height: this.state.animation}]}>
                  <View style={{flexDirection: 'row', backgroundColor: this.props.background }}
                        onLayout={this._setMinHeight.bind(this)}>
                      <Text style={styles.title}
                            onPress={this.toggle.bind(this)}>{this.state.title}</Text>
                  </View>
                  <View style={styles.body}
                        onLayout={this._setMaxHeight.bind(this)}>
                      {this.props.children}
                  </View>
              </Animated.View>
          );
      }
  }


  var styles = StyleSheet.create({
    container   : {
        backgroundColor: '#fff',
        overflow:'hidden',
        flex:1
    },
    title       : {
        flex    : 1,
        padding : 10,
        color   :'black',
        fontFamily: 'Helvetica',
        fontWeight:'bold',
        textAlign: 'center'
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
});
