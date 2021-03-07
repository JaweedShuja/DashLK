import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  Dash_lk: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  Dashtext: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    position: 'absolute',
    // bottom: 100,
  },
  Polygon1: {
    height: 500,
    width: 500,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50,
  },
  Polygon2: {
    height: 500,
    width: 500,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 150,
  },
  polygonContainer: {
    // marginRight: 300,
    position: 'absolute',
    left: 30,
    // top: 50,
  },
});
