import React from 'react'
import {
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native'
import * as image from '../../utils/imagePath'

export default class BellIcon extends React.Component{
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.onPress()} 
                style={styles.container}>
                <Image 
                    style={styles.icon}
                    source={image.notificationIcon}
                />

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        width:50,
        position:'absolute',
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        height: (6.8 * 3.5),
        width: (5.5 * 3.5),
        tintColor:'white'
    }
})