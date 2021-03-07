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
    justifyContent: 'space-between',
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
  },
  NotificationIcon: {
    height: 20,
    width: 16,
    marginLeft:5
  },
  profileNameContainer: {
    height: 80,
    marginTop: 5,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingsOptionContainer: {
    height: 40,
    borderWidth: 0.7,
    borderColor: 'lightgray',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  settingOptionText: {
    fontSize: 18,
    color: 'gray',
    position: 'absolute',
    left: 50,
    fontFamily:Fonts.PoppinsRegular
  },
  optionImage:{
    height:25,
    width:25
  },
  forwardIcon:{
    height: 20,
    width: 20,
    tintColor: Colors.themeBlue,
    position: 'absolute',
    right: 15,
    alignSelf: 'center',
  }
});
