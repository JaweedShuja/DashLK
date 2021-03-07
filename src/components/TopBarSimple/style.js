import {StyleSheet} from 'react-native'
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';

export default StyleSheet.create({
    container:{
        height:50,
        backgroundColor:Colors.themeBlue,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:18,
        color:'white',
        fontFamily:Fonts.PoppinsRegular
    },
})