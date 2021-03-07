import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  topChildContainer: {
    height: 70,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.themeBlue,
    padding: 5,
    justifyContent: 'center',
    marginBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  backIconContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
  BackIcon: {
    tintColor: 'white',
  },
  NotificationIcon: {
    height: 20,
    width: 20,
  },
  headerText: {
    color: 'white',
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  grayDot: {
    height: 7,
    width: 7,
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 4,
  },
  greenBlueCircle: {
    height: 70,
    width: 70,
    borderWidth: 10,
    borderColor: Colors.themeGreen,
    borderRadius: 80,
    backgroundColor: Colors.themeBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
    marginVertical:5,
    marginLeft:5,
    marginRight:20,
    paddingHorizontal: 20,
    fontFamily:Fonts.PoppinsRegular,
    paddingVertical:-2,
  },
  applyButton: {
    height: 45,
    width: 170,
    backgroundColor: Colors.themeBlue,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  circleImage: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
});
