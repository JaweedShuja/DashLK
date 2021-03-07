import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  topChildContainer: {
    height: 50,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.themeBlue,
    padding: 5,
  },
  backIconContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackIcon: {
    tintColor: 'white',
  },
  inputContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 30,
    marginVertical: 2,
    paddingHorizontal: 10,
  },
  NotificationIcon: {
    height: 25,
    width: 20,
  },
  menuContainer: {
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    borderWidth: 0.7,
    borderColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical:10,
  },
  menuCircle: {
    height: 80,
    width: 80,
    backgroundColor: Colors.themeGreen,
    borderRadius: 80,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBottomText: {
    color: 'rgba(0,0,0,0.9)',
    fontSize: 16,
    marginTop: 5,
    width:100,
    textAlign:'center',
    fontFamily:Fonts.PoppinsRegular
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 20,
    color: 'white',
    marginTop:10,
    fontFamily:Fonts.PoppinsBold
  },
});
