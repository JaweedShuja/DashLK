import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  topChildContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.themeBlue,
    padding: 5,
    justifyContent: 'center',
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
    height: 30,
    width: 30,
    tintColor: 'white',
  },

  headerText: {
    color: 'white',
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  vehicleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginTop: 10,
  },
  vehicleImageContainer: {
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vehicleImage: {
    tintColor: 'white',
  },
  brandContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10
  },
  brandImage: {
    height: 30,
    width: 30,
  },
  optionHeading: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 7,
    fontFamily:Fonts.PoppinsRegular
  },
  optionButton: {
    height: 40,
    marginHorizontal: 30,
    borderRadius: 30,
    backgroundColor: Colors.themeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  optionButtonText: {
    fontSize: 18,
    color: 'white',
    fontFamily:Fonts.PoppinsRegular
  },
  optionButtonImage: {
    height: 15,
    width: 15,
    tintColor: 'white',
    position: 'absolute',
    right: 15,
  },
  plusMinusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterButton: {
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: Colors.themeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  counterText: {
    fontSize: 20,
    color: 'white',
    fontFamily:Fonts.PoppinsRegular,
    marginTop:5
  },
  counterDisplay: {
    height: 40,
    width: 100,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    height: 40,
    width: 150,
    borderRadius: 30,
    backgroundColor: Colors.themeGreen,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  addText: {
    fontSize: 18,
    color: 'white',
    fontFamily:Fonts.PoppinsRegular
  },
  bottomContainer: {
    backgroundColor: 'white',
  },
  plusMinusIcon:{
    height:15,
    width:15,
    tintColor:'white'
  }
});
