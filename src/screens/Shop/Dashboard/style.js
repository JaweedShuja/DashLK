import {StyleSheet} from 'react-native'
import { Colors } from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    circlesContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20
    },
    horizontalLine:{
        height:0.7,
        marginVertical:10,
        backgroundColor:Colors.themeGreen
    },
    viewMoreContainer:{
        flexDirection:'row',
        marginHorizontal:30,
        marginTop:10,
        justifyContent:'space-between'
    },
    earningText:{
        fontSize:18,
        color:'gray',
        fontFamily:Fonts.PoppinsRegular,
    },
    viewMoreText:{
        color:Colors.themeBlue,
        fontFamily:Fonts.PoppinsRegular,
    },
    earningDetailsContainer:{
        marginHorizontal:30,
        backgroundColor:Colors.lightgray,
        borderRadius:20,
        marginTop:5,
        paddingHorizontal:20,
        paddingVertical:10
    },
    earningContainerRow:{
        flex:1, 
        flexDirection:'row',
    }
})