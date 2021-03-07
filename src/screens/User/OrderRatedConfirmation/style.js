import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  topContainer: {
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.themeBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainerText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'white',
    fontFamily:Fonts.PoppinsRegular
  },
  cancelMsg: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 10,
    color: Colors.themeGreen,
    fontFamily:Fonts.PoppinsRegular
  },
  checkContainer: {
    height: 100,
    width: 100,
    borderRadius: 150,
    alignSelf: 'center',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CheckIcon: {
    height: 100,
    width: 100,
    tintColor: Colors.themeBlue,
  },
  returnHomeText: {
    color: Colors.themeBlue,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
