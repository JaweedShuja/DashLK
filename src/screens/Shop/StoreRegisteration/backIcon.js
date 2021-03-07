import React from 'react'
import {
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import * as image from '../../../utils/imagePath'

export default class BackIcon extends React.Component{
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.onPress()} 
                style={styles.container}>
                <Image 
                    style={[styles.icon, , {tintColor: this.props.tintColor ? this.props.tintColor : 'white'}]}
                    source={image.backIcon}
                />

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        height: 35,
        width: 35,
    }
})