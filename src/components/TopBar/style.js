import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts'
export default StyleSheet.create({
  
  topChildContainer: {
    height: 50,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.themeBlue,
  },
  BackIcon: {
    tintColor: 'white',
  },
  backIconContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 30,
    height:35,
    flexDirection:'row',
    alignItems:'center',
  },
  NotificationIcon: {
    height: 25,
    width: 20,
  },
  searchIcon:{
    height:25,
    width:25,
    marginLeft:7
  },
  searchText:{
    color:'#C0C0C0',
    fontFamily:Fonts.PoppinsRegular,
    fontSize:10,
    marginLeft:5,
    marginTop:3
  },
});
