import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  searchText:{
    color:'#C0C0C0',
    fontFamily:Fonts.PoppinsRegular,
    fontSize:10,
    marginLeft:5,
    marginTop:3
  },
  topContainer: {
    height: 110,
    backgroundColor: Colors.themeBlue,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topChildContainer: {
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
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
    // marginVertical: 5,
    flexDirection:'row',
    // justifyContent:'space-between',
    alignItems:'center',
  },
  NotificationIcon: {
    height: 25,
    width: 20,
  },
  topContainerCard: {
    height: 115,
    marginHorizontal: 10,
    // marginTop: 10,
    borderRadius: 10,
  },
  Banner1: {
    height: '100%',
    width: '100%',
    resizeMode:'stretch',
    borderRadius: 5,
  },
  searchIcon:{
    height:25,
    width:25,
    marginLeft:7
  },
  whiteDot:{
    height:7,
    width:7,
    borderRadius:7,
    backgroundColor:'white'
  },
  whiteDotContainer:{
    height:10,
    width:80, 
    position:'absolute',
    alignSelf:'center',
    bottom:10,
    zIndex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  }
});
