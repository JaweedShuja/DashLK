import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Fonts } from '../../../utils/fonts'
import { Colors } from '../../../utils/colors'

export default class ListItem extends React.Component{
    render(){
        return(
            <TouchableOpacity 
            onPress={() => {
                this.props.navigation.navigate('Shop_ItemDetails')
            }}
            style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={this.props.item.image}
                    />
                </View>
                <View style={{flex:1,}}>
                    <Text style={styles.dispatchNowText}>Paid - dispatch now</Text>
                    <View style={styles.detailsContainer}>
                        <View style={{flex:1.8}}>
                            <Text style={styles.name}>{this.props.item.name}</Text>
                        </View>
                        <View style={{flex:1.2, alignItems:'flex-end'}}>
                            <Text style={styles.price}>{'LKR ' + this.props.item.price}</Text>
                            <Text style={styles.freeDeliveryText}>FREE delivery</Text>
                            <Text style={styles.clientName}>{this.props.item.clientName}</Text>
                            <Text style={styles.date}>{this.props.item.date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }   
}

const styles = StyleSheet.create({
    container:{
        height:120,
        marginHorizontal:15,
        borderRadius:15,
        borderWidth:0.7,
        borderColor:'rgba(0,0,0,0.7)',
        flexDirection:'row',
        padding:10,
        marginBottom:10
    },
    image:{
        height:100,
        width:100
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:0.5,
        marginVertical:10,
        marginRight:10
    },
    dispatchNowText:{
        fontFamily:Fonts.PoppinsRegular,
        color:Colors.red
    },
    detailsContainer:{
        flexDirection:'row',
        flex:1,
    },
    name:{
        color:'gray',
        fontFamily:Fonts.PoppinsRegular,
        fontSize:12
    },
    price:{
        fontFamily:Fonts.PoppinsBold,
        fontSize:15
    },
    freeDeliveryText:{
        fontSize:12,
        fontFamily:Fonts.PoppinsLight,
        color:'gray',
        marginVertical:-5
    },
    clientName:{
        fontSize:11,
        fontFamily:Fonts.PoppinsLight,
    },
    date:{
        fontSize:11,
        fontFamily:Fonts.PoppinsLight,
    }
})
