import React from 'react'
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    Platform
} from 'react-native'
import * as image from '../../utils/imagePath'
import { Fonts } from '../../utils/fonts'
export default class SearchBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.image}
                    source={image.searchIcon}
                />
                <TextInput 
                    underlineColorAndroid={'transparent'}
                    style={styles.input}
                    placeholder={this.props.placeholder}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:35,
        borderRadius:30,
        marginHorizontal:50,
        backgroundColor:'white',
        flexDirection:'row',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:7
    },
    image:{
        height:20,
        width:20,
    },
    input:{
        flex:1,
        paddingVertical:-15,
        fontSize:10,
        paddingTop:Platform.OS == 'android' ? 5 : null,
        fontFamily:Fonts.PoppinsRegular,
    }
})