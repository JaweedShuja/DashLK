import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts'
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
    justifyContent: 'space-between',
    backgroundColor: Colors.themeBlue,
    padding: 5,
  },
  vehicleImageContainer:{
    height: 50,
    width: 100,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIconContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackIcon: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  inputContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 30,
    // marginVertical: 5,
  },
  NotificationIcon: {
    height: 25,
    width: 20,
  },
  vehicleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    marginTop: 10,
  },
  vehicleButton: {
    height: 50,
    width: 100,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleImage: {
    // height: 26,
    // width: 55,
    tintColor: 'white',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  brandButton: {
    height: 70,
    width: 70,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: Colors.themeGreen,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandImage: {
    height: 40,
    width: 40,
  },
  singleButtonContainer: {},
  optionHeading: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 7,
    fontFamily:Fonts.PoppinsRegular
  },
});
