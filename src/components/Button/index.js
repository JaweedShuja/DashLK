import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
import { color } from 'react-native-reanimated'
import { Colors } from '../../utils/colors'
import { Fonts } from '../../utils/fonts'

export default class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity 
            onPress={() => {
                this.props.onPress()
            }}
            style={{
                height:this.props.height ? this.props.height : 45,
                width: this.props.width ? this.props.width : 150,
                alignSelf: this.props.alignSelf ? this.props.alignSelf : 'center',
                borderRadius: this.props.borderRadius ? this.props.borderRadius : 30,
                backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : Colors.themeBlue,
                alignItems : this.props.alignItems ? this.props.alignItems : 'center',
                justifyContent: this.props.justifyContent ? this.props.justifyContent : 'center',
                elevation: this.props.elevation ? this.props.elevation : 3,
                marginTop: this.props.marginTop ? this.props.marginTop : 0,
                borderWidth: this.props.borderWidth ? this.props.borderWidth : 0,
                borderColor : this.props.borderColor ? this.props.borderColor : Colors.themeBlue,
                marginBottom:5,
            }}>
                <Text style={{
                    fontSize: this.props.fontSize ? this.props.fontSize : 14,
                    color: this.props.color ? this.props.color : 'white',
                    fontFamily:this.props.fontFamily ? this.props.fontFamily : Fonts.PoppinsRegular
                }}>
                    {this.props.title ? this.props.title : 'OK'}
                </Text>

            </TouchableOpacity>
        )
    }
}