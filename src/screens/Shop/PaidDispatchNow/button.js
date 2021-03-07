import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity 
            onPress={() => this.props.onPress()}
            style={styles.container}>
                <Text style={styles.text}>Order Dash Stickers</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:45,
        borderRadius:30,
        width:250,
        alignSelf:'center',
        position:'absolute',
        bottom:150,
        backgroundColor:Colors.themeBlue,
        elevation:3,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:18,
        color:'white',
        fontFamily:Fonts.PoppinsRegular,
        marginTop:3
    }
})