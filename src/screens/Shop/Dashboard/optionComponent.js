import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'
import * as image from '../../../utils/imagePath'

export default class OptionContainer extends React.Component{
    render(){
        return(
            <TouchableOpacity 
            onPress={() => this.props.onPress()}
            style={styles.container}>
                <View style={styles.qtyContainer}>
                    <Text style={[styles.qty, {color:this.props.qtyColor}]}>{this.props.qty}</Text>
                </View>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                <Image 
                    source={image.forwardIcon}
                    style={styles.forwardIcon}
                /> 
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:45,
        borderRadius:30,
        marginHorizontal:30,
        backgroundColor:Colors.lightgray,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center'
    },
    qtyContainer:{
        height:30,
        width:50,
        borderRadius:35,
        backgroundColor:'white',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
    },
    qty:{
        fontSize:18,
        fontFamily:Fonts.PoppinsRegular,
        marginTop:3
    },
    title:{
        fontSize:17,
        color:'gray',
        fontFamily:Fonts.PoppinsRegular,
        marginLeft:20
    },
    forwardIcon:{
        height:20,
        width:20,
        tintColor:'gray',
        position:'absolute',
        right:20
    }
})
