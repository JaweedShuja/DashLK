import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  topChildContainer: {
    height: 110,
    marginBottom: 5,
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: Colors.themeBlue,
    padding: 5,
    justifyContent: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backIconContainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
  BackIcon: {
    tintColor: 'white',
  },

  headerText: {
    color: 'white',
  },
  headerTextContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'red',
    height:50,
    justifyContent:'center',
  },
  menuContainer: {
    height: 130,
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  menuCircle: {
    height: 80,
    width: 80,
    backgroundColor: Colors.themeGreen,
    borderRadius: 70,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBottomText: {
    color: 'rgba(0,0,0,0.9)',
    fontSize: 16,
    marginTop: 5,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  dashboardButton: {
    height: 40,
    marginHorizontal: 30,
    borderRadius: 30,
    borderWidth: 0.7,
    backgroundColor: Colors.appBackgroundColor,
    borderColor: 'lightgray',
    flexDirection: 'row',
    marginBottom: 10,
  },
  buttonLeftElement: {
    height: 40,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center',
    marginLeft: 5,
    fontFamily:Fonts.PoppinsRegular
  },
  childLeftElement: {
    height: 30,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forwarIcon: {
    height: 35,
    width: 35,
    tintColor: Colors.themeBlue,
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
  childElementText: {
    color: Colors.themeGreen,
    fontSize: 18,
  },
  buttonElementImage: {
    height: 25,
    width: 25,
    tintColor: Colors.themeBlue,
  },
});
