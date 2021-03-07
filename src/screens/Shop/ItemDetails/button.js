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
                <Text style={styles.text}>
                    Mark as dispatched
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:45,
        width:250,
        borderRadius:30,
        backgroundColor:Colors.themeBlue,
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
    },
    text:{
        color:'white',
        fontFamily:Fonts.PoppinsRegular,
        fontSize:18
    }
})