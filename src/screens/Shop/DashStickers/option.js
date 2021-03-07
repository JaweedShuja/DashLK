import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'
import * as image from '../../../utils/imagePath'

export default class Option extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.props.title}
                    </Text>
                </View>
                <View style={styles.counterContainer}>
                    <TouchableOpacity style={styles.plusminusButton}>
                        <Image
                            style={styles.image} 
                            source={image.minusIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.counterValueText}>
                        {this.props.qty}
                    </Text>
                    <TouchableOpacity style={styles.plusminusButton}>
                        <Image
                            style={styles.image} 
                            source={image.plusIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:70,
        marginHorizontal:20,
        borderRadius:15,
        backgroundColor:Colors.whitesmoke,
        marginTop:20,
        flexDirection:'row',
        paddingHorizontal:15
    },
    titleContainer:{
        flex:2,
    },
    counterContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
    },
    title:{
        fontSize:16,
        margin:15,
        fontFamily:Fonts.PoppinsRegular,
        color:Colors.themeBlue
    },
    plusminusButton:{
        height:25,
        width:25,
        borderRadius:25,
        backgroundColor:Colors.lightgray,
        alignItems:'center',
        justifyContent:'center'
    },
    counterValueText:{
        fontSize:18,
        fontFamily:Fonts.PoppinsLight,
        color:Colors.gray
    },
    plusminusText:{
        fontSize:25,
        fontFamily:Fonts.PoppinsLight,
        color:Colors.gray
    },
    image:{
        height:18,
        width:18,
        tintColor:'gray'
    }
})