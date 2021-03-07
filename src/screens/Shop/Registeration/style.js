import {StyleSheet} from 'react-native'
import {Colors} from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:150,
    },
    titleText:{
        fontSize:16,
        fontFamily:Fonts.PoppinsLight,
        color:Colors.gray,
        width:250,
        textAlign:'center',
        marginBottom:20
    },
    signinText:{
        fontFamily:Fonts.PoppinsLight,
        fontSize:16,
        marginTop:50
    }
})