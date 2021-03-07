import {StyleSheet} from 'react-native'
import { Colors } from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    topContainer:{
        height:100,
        backgroundColor:Colors.themeBlue
    },
    heading:{
        fontSize:18,
        color:'white',
        fontFamily:Fonts.PoppinsRegular,
        alignSelf:'center',
        marginTop:10
    },
    tabsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginHorizontal:30,
        marginTop:20
    },
    dateContainer:{
        flexDirection:'row',
        marginTop:60,
        alignItems:'center',
        justifyContent:'space-around',
        marginHorizontal:50
    },
    calenderIconContainer:{
        height:45,
        width:45,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.themeGreen
    },
    calenderIcon:{
        height:30,
        width:30
    }
})