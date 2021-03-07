import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'
export default class RowItem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={[styles.titleStyle, {color: this.props.titleColor ? this.props.titleColor : 'gray'}]}>
                    {this.props.title}
                </Text>
                <Text style={[styles.descriptionStyle, {color:this.props.descriptionColor ? this.props.descriptionColor : Colors.themeBlue}]}>
                    {this.props.description}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:10,
        marginHorizontal:5,
        justifyContent:'space-between'
    },
    titleStyle:{
        fontFamily:Fonts.PoppinsLight,
        fontSize:12,
        width:100
    },
    descriptionStyle:{
        fontFamily:Fonts.PoppinsLight,
        opacity:0.8,
        width:200,
        textAlign:'right'
    }
})