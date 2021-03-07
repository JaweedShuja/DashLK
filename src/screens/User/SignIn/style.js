import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  backIconContainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackIcon: {
    height: 30,
    width: 30,
  },
  DashLK: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginTop:20
  },
  SignInText: {
    alignSelf: 'center',
    height: 29.75,
    width: 71.75,
    marginTop:-15
  },
  inputStyle: {
    marginHorizontal: 40,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    fontFamily:Fonts.PoppinsRegular,
    // justifyContent:'center'
    paddingVertical:5
  },
  inputText: {
    marginLeft: 40,
    color: 'gray',
    fontFamily:Fonts.PoppinsRegular,
    marginBottom:-10
  },
  forgotPasswordText: {
    alignSelf: 'flex-end',
    marginRight: 40,
    marginTop: 10,
    color: 'gray',
    fontFamily:Fonts.PoppinsRegular
  },
  signInButton: {
    height: 45,
    backgroundColor: '#292660',
    marginHorizontal: 60,
    marginTop: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    color: 'white',
    fontSize: 16,
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
    marginTop: 20,
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
  dontHaveText: {
    fontSize: 12,
    fontFamily:Fonts.PoppinsRegular
  },
  dontHaveContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  dontHaveContainerTouch:{
    height:50,
    width:200,
    alignSelf:'flex-end',
    alignItems:'center',
    justifyContent:'center',
  }
});
