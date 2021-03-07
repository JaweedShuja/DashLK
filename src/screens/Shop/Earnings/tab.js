import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default class Tab extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text
                    style={[styles.titleStyle, {color:this.props.type == 'income' ? Colors.themeGreen : 'lightgray'}]}
                >
                    {this.props.title}
                </Text>
                <Text style={[styles.amountStyle, {color:this.props.type == 'income' ? Colors.themeGreen : 'lightgray'}]}>
                    {this.props.amount}
                </Text>
            </View>
        )   
    }
}

const styles = StyleSheet.create({
    container:{
        height:80,
        width:150,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems:'center',
        justifyContent:'center'
    },
    titleStyle:{
        fontFamily:Fonts.PoppinsLight,
        fontSize:16,
    },
    amountStyle:{
        fontFamily:Fonts.PoppinsBold,
        fontSize:16
    }
})