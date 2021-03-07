import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';

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
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    color: Colors.themeGreen,
    fontFamily:Fonts.PoppinsBold
  },
  checkContainer: {
    height: 80,
    width: 80,
    borderRadius: 150,
    borderWidth: 7,
    alignSelf: 'center',
    marginVertical: 5,
    borderColor: Colors.themeBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CheckIcon: {
    height: 70,
    width: 70,
    alignSelf:'center',
    tintColor: Colors.themeBlue,
    marginBottom:10,
  },
  orderDes: {
    alignSelf: 'center',
    color: Colors.themeBlue,
    alignSelf:'center',
    marginHorizontal:80,
    textAlign:'center',
    fontFamily:Fonts.PoppinsRegular
  },
});
