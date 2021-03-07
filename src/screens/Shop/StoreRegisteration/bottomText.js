import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default class BottomText extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    By registering for a Dash account, you agree
                </Text>
                <Text style={styles.textStyle}>
                    that you have read and accepted our
                </Text>
                <Text style={[styles.textStyle, {color:Colors.themeGreen}]}>
                    Dash Free Membership Agreement
                </Text>
                <Text style={styles.textStyle}>
                    <Text>
                    and 
                    </Text>
                    <Text style={{color:Colors.themeGreen}}>
                         {' Privacy Policy.'}
                    </Text>
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:50
    },
    textStyle:{
        color:'gray',
        alignSelf:'center',
        fontFamily:Fonts.PoppinsLight,
        fontSize:12,
    }
})