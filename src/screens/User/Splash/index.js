import React, {Component} from 'react';
import {
  View, 
  Image, 
  StatusBar,
  StyleSheet
} from 'react-native';
// import styles from './style';
import {splashBackground} from '../../../utils/imagePath'
import Helper from '../../../utils/Helper'
class Splash extends Component {
  constructor(props) {
    super(props);

    var t = setInterval(function() {
      props.navigation.navigate('User_SignIn');
      clearInterval(t);
    }, 3000);
  }
  render() {
  //   return (
  //     <View style={{
  //       flex: 1,
  //       // flexDirection: "column"
  //     }}>
  //       {/* <StatusBar backgroundColor={Colors.statusBarColor} /> */}
  //       {/* <Image 
  //         style={{
  //           flex:1,
  //           height:Helper.screenHeight,
  //           width:Helper.screenWidth
  //         }}
  //         resizeMode='contain'
  //         source={splashBackground}
  //       /> */}
  //       {/* <Image style={styles.Dash_lk} source={Dash_lk} />
  //       <Image style={styles.Dashtext} source={Dashtext} />
  //       <View style={styles.polygonContainer}>
  //         <Image style={styles.Polygon1} source={Polygon1} />
  //         <Image style={styles.Polygon2} source={Polygon2} />
  //       </View> */}
  //       <ImageBackground source={splashBackground} style={{
  //   flex: 1,
  //   resizeMode: "stretch",
  //   // justifyContent: "center"
  // }}>
  //         {/* <Text style={styles.text}>Inside</Text> */}
  //       </ImageBackground>
  //     </View>
  //   );
  return(
    <View style={{ flex: 1 }}>
      {/* <StatusBar hidden /> */}
  <View style={styles.bgImageWrapper}>
    <Image source={splashBackground} style={styles.bgImage} />
  </View>
  {/* <Text style={styles.welcome}>
    Welcome to React Native!
  </Text> */}
</View>
  )
  }
}

export default Splash;

var styles = StyleSheet.create({
  bgImageWrapper: {
      position: 'absolute',
      top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
      flex: 1,
      resizeMode: "stretch",
      height:Helper.screenHeight,
      width:Helper.screenWidth
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
  }
});