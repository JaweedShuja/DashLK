import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'
import * as image from '../../../utils/imagePath'

export default class Item extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={image.engine1}
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.descriptionText}>
                        {this.props.description}
                    </Text>
                    <View>
                        <Text style={styles.priceText}>
                            {'LKR ' + this.props.price}
                        </Text>
                        <Text style={styles.dateText}>
                            {this.props.date}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:50,
        height:110
        
    },
    imageContainer:{
        flex:1,
        borderRightWidth:1,
        borderColor:'lightgray',
    },
    detailsContainer:{
        flex:2,
        paddingLeft:10,
        justifyContent:'space-between'
    },
    image:{
        height:110,
        width:110,
    },
    descriptionText:{
        fontSize:16,
        color:'gray',
        fontFamily:Fonts.PoppinsLight
    },
    priceText:{
        fontSize:18,
        fontFamily:Fonts.PoppinsRegular,
        color:Colors.themeBlue
    },
    dateText:{
        fontSize:14,
        color:'gray',
        fontFamily:Fonts.PoppinsLight
    }
})