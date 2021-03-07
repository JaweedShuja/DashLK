import {StyleSheet} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    heading:{
        fontSize:18,
        margin:15,
        fontFamily:Fonts.PoppinsBold,
        color:Colors.themeBlue   
    },
    detailsContainer:{
        backgroundColor:Colors.whitesmoke,
        padding:10
    },
    buttonContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
    }
})