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
    justifyContent: 'space-between',
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
    height: 24,
    width: 24,
    tintColor: 'white',
  },
  topOptionIcon: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  orderSectionIcons: {
    height: 45,
    width: 45,
  },
  optionIcon: {
    height: 80,
    width: 80,
    // tintColor: 'white',
  },
});
