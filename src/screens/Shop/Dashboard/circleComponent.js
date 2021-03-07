import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Fonts } from '../../../utils/fonts'

export default class CircleComponent extends React.Component{
    render(){
        return(
            <View sytle={styles.container}>
                <View style={[styles.circle, {backgroundColor:this.props.circleBackgroundColor}]}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
                    <Text style={styles.description}>{this.props.description}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    circle:{
        height:70,
        width:70,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10
    },
    text:{
        fontSize:18,
        color:'white',
        fontFamily:Fonts.PoppinsBold
    },
    description:{
        color:'gray',
        fontFamily:Fonts.PoppinsLight,
        width:70,
        textAlign:'center',
        lineHeight: 15,
    },
})