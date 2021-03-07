import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'
import * as image from '../../../utils/imagePath'

export default class ListItem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={this.props.item.image}
                    />
                </View>
                <View style={{flex:1,}}>
                    <View style={styles.detailsContainer}>
                            <Text style={styles.name}>{this.props.item.name}</Text>
                            <Text style={styles.qty}>{`QTY: ${this.props.item.qty}`}</Text>
                            <Text style={styles.price}>{'LKR ' + this.props.item.price}</Text>
                           
                    </View>
                    <TouchableOpacity 
                    onPress={() => this.props.onMoreIconPress()}
                    style={styles.moreButtonContainer}>
                        <Image 
                            style={styles.moreIcon}
                            source={image.moreIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height:20,
                        width:80,
                        position:'absolute',
                        right:10,
                        bottom:20
                    }}>
                        <Text
                            style={{
                                fontFamily:Fonts.PoppinsLight,
                                color:Colors.themeGreen
                            }}
                        >{'Pending   >'}</Text>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:15,
        borderRadius:15,
        borderWidth:0.7,
        borderColor:'rgba(0,0,0,0.6)',
        flexDirection:'row',
        paddingHorizontal:10,
        marginBottom:10,
        paddingTop:20,
        // paddingVertical:10
    },
    image:{
        height:100,
        width:100
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
        marginRight:10
    },
    detailsContainer:{
        flex:1,
        justifyContent:'center',
    },
    name:{
        color:'gray',
        fontFamily:Fonts.PoppinsRegular,
        fontSize:12,
        width:150,
        lineHeight:15
    },
    price:{
        fontFamily:Fonts.PoppinsBold,
        fontSize:15
    },
    qty:{
        fontSize:10,
        fontFamily:Fonts.PoppinsLight,
        color:'gray'
    },
    moreButtonContainer:{
        height:25,
        width:25,
        position:'absolute',
        top:20,
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    moreIcon:{
        height:25,
        width:25
    },
    topDetailsContainer:{
        position:'absolute',
        marginLeft:10,
        marginTop:5
    }
})
