import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default class DetailsRow extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.textStyle, {
                        fontSize:this.props.fontSize ? this.props.fontSize : 12,
                        color:this.props.color ? this.props.color: Colors.gray
                    }]}>
                    {this.props.title}
                </Text>
                <Text
                    style={[styles.textStyle, {
                        fontSize:this.props.fontSize ? this.props.fontSize : 12,
                        color:this.props.color ? this.props.color: Colors.gray
                    }]}>
                    {this.props.price}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:5,
    },
    textStyle:{
        fontFamily:Fonts.PoppinsLight
    }
})