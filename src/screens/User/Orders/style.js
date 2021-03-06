import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  headingContainer: {
    height: 40,
    backgroundColor: Colors.themeBlue,
    marginTop: -5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 18,
    color: 'white', 
    fontFamily:Fonts.PoppinsRegular
  },
  orderContainer: {
    height: 150,
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 0.7,
    margin: 5,
  },
});
