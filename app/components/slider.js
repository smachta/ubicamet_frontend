
import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'

import Swiper from 'react-native-swiper'

const {width, height} = Dimensions.get('window')

const Slider = props => ( <View style={styles.container}>
        <Image style={styles.image} source={{uri:props.uri}}/>
    </View>
)

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    image: {
        flex: 1,
        width: "100%"
    }
}

export default class Slide extends Component {
    constructor(props){
        super(props)

        this.state = {
            imagesSlider: this.props.data
        }
    }
    render(){
        return (
                <Swiper
                    autoplay
                    height={400}
                >
                {
                    this.state.imagesSlider.map((item, i) =>
                    <Slider
                        uri={item.pic}
                        key={item.key}
                    />)
                }
                </Swiper>

        )
    }
}
