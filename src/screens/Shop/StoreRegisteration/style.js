import {
    StyleSheet
} from 'react-native'
import {Colors} from '../../../utils/colors'
import { Fonts } from '../../../utils/fonts'


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    DashLK: {
        height: 120,
        width: 120,
        alignSelf: 'center',
    },
    heading:{
        fontSize:25,
        alignSelf:'center',
        fontFamily:Fonts.PoppinsRegular,
        color:Colors.themeBlue
    },
    documentText:{
        alignSelf:'center',
        fontFamily:Fonts.PoppinsLight,
        marginTop:20
    }
})