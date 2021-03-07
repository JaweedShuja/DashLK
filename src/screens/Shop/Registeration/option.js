import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default class Option extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={this.props.source}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.description}>
                        {this.props.description}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:80,
        width:'80%',
        borderRadius:20,
        backgroundColor:Colors.themeBlue,
        elevation:3,
        marginTop:10,
        flexDirection:'row'
    },
    imageContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    detailsContainer:{
        flex:2,
        justifyContent:'center'
    },
    image:{
        height:40,
        width:40,
        tintColor:Colors.themeGreen
    },
    title:{
        fontSize:20,
        color:'white',
        fontFamily:Fonts.PoppinsRegular
    },
    description:{
        fontSize:12,
        color:Colors.gray,
        fontFamily:Fonts.PoppinsLight,
        marginVertical:-5
    }
})