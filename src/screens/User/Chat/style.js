import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { Fonts } from '../../../utils/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  topContainer: {
    height: 45,
    backgroundColor: Colors.themeBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  backIconContainer: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
  },
  bottomContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: 'lightgray',
    alignItems: 'center',
    // marginHorizontal:10
    paddingHorizontal:10
  },
  emjiIcon: {
    height: 30,
    width: 30,
  },
  chatInput: {
    // borderWidth: 1,
    // borderColor: 'lightgray',
    elevation:3,
    backgroundColor:Colors.appBackgroundColor,
    fontFamily:Fonts.PoppinsRegular,
    justifyContent:'center',
    flex: 1,
    borderRadius: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical:5,
  },
});
