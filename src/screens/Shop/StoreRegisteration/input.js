import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default class Input extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                    secureTextEntry={this.props.secureTextEntry ? this.props.secureTextEntry : false}
                    style={styles.inputStyle}
                    placeholder={this.props.placeholder}
                />
                {
                    this.props.hasImage
                    ?
                    <TouchableOpacity style={styles.imageContainer}>
                        <Image 
                            source={this.props.source}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    :
                    null
                }
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        borderBottomWidth:1,
        borderColor:Colors.lightgray,
        marginHorizontal:30,
        marginTop:15,
        flexDirection:'row',
        alignItems:'center'
    },
    inputStyle:{
        fontSize:18,
        fontFamily:Fonts.PoppinsRegular,
        paddingBottom:5,
        flex:1,
    },
    imageContainer:{
        height:30,
        width:30,
    },
    image:{
        height:25,
        width:25,
    }
})