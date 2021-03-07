import {StyleSheet} from 'react-native'
import { Colors } from '../../../utils/colors'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.appBackgroundColor
    },
    detailsContainer:{
        height:120,
        backgroundColor:Colors.whitesmoke,
        marginTop:50,
        paddingVertical:10,
        paddingHorizontal:20,
    }
})