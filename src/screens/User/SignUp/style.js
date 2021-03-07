import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  backIconContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackIcon: {
    height: 40,
    width: 40,
  },
  DashLK: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  SignInText: {
    alignSelf: 'center',
    height: 29.75,
    width: 90,
  },
  inputStyle: {
    marginHorizontal: 40,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    height: 40,
  },
  inputText: {
    marginLeft: 40,
    color: 'gray',
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    marginRight: 40,
    marginTop: 10,
    color: 'gray',
  },
  signInButton: {
    height: 40,
    backgroundColor: '#292660',
    marginHorizontal: 60,
    marginTop: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    color: 'white',
    fontSize: 16,
    fontFamily:Fonts.PoppinsRegular
  },
  orText: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'gray',
    fontSize: 16,
    fontFamily:Fonts.PoppinsRegular
  },
  socialMediaIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 60,
    marginTop: 10,
  },
  socialButton: {
    height: 50,
    width: 50,
    borderRadius: 70,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    height: 26,
    width: 25,
  },
  goToSignInText: {
    alignSelf: 'center',
    marginTop: 30,
    fontFamily:Fonts.PoppinsRegular
  },
});
