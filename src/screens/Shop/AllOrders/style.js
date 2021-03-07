import {StyleSheet} from 'react-native'
import { Colors } from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    settlingContainer:{
        height:45,
        backgroundColor:Colors.themeBlue,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:15,
        alignItems:'center',
        justifyContent:'center'
    },
    sellingText:{
        color:'white',
        fontSize:18,
        fontFamily:Fonts.PoppinsRegular
    }
})