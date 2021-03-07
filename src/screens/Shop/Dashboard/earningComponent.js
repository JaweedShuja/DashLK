import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Fonts } from '../../../utils/fonts'

export default class EarningComponent extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.type}>{this.props.type}</Text>
                {
                    this.props.qty ?
                    <Text style={[styles.amount, {color:this.props.color ? this.props.color: 'rgba(0,0,0,0.7)'}]}>{this.props.qty + " ("+this.props.amount+")"}</Text>    
                    : <Text style={[styles.amount, {color:this.props.color ? this.props.color: 'rgba(0,0,0,0.7)'}]}>{this.props.amount}</Text>   

                }
                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:5
    },
    type:{
        fontSize:12,
        color:'gray',
        fontFamily:Fonts.PoppinsRegular
    },
    amount:{
        fontFamily:Fonts.PoppinsBold
    }
})