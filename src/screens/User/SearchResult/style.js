import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
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
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  inputContainer: {
    height: 40,
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    // marginVertical: 5,
  },
  NotificationIcon: {
    height: 20,
    width: 20,
  },
});
