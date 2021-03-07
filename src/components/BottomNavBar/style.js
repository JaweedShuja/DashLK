import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import Helper from '../../utils/Helper'
export default StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    // backgroundColor: Colors.appBackgroundColor,
    position: 'absolute',
    bottom: 0,
  },
  leftSide: {
    flex: 2,
    backgroundColor: Colors.themeGreen,
    borderTopRightRadius: 30,
    flexDirection: 'row',
  },
  center: {
    // flex: 1,
    // borderBottomLeftRadius: 40,
    // backgroundColor: 'yellow',
    // borderBottomRightRadius: 40,
    // marginBottom: 10,
    flex: 1,
    backgroundColor: Colors.themeGreen,
  },
  rightSide: {
    flex: 2,
    backgroundColor: Colors.themeGreen,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
  },
  bottomTabButton: {
      height:60,
      width:60,
      alignItems:'center',
      justifyContent:'center',
    
  },
  bottomTabImage: {
    height: 32,
    width: 32,
    tintColor: 'white',
  },
  bottomTabSide:{
    height:70,
    width:Helper.screenWidth /2,
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  tabText:{
    fontSize:12,
    fontFamily:Fonts.PoppinsRegular,
    color:'white',
    fontWeight:'100'
  }
});
