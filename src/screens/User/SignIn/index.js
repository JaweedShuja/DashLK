import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import {backIcon} from '../../../utils/imagePath'
import DashLK from '../../../images/Dash.lk.png';
import SignInText from '../../../images/signInText.png';
import FacebookIcon from '../../../images/facebookIcon.png';
import InstagramIcon from '../../../images/instagramIcon.png';
import GoogleIcon from '../../../images/googleIcon.png';
import commonStyles from '../../../utils/commonStyles'
import MyStatusBar from '../../../components/StatusBar'

class SignIN extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle={'dark-content'}
        /> */}
        <MyStatusBar 
          backgroundColor={'white'}
          barStyle={'dark-content'}
        />
        {/* <TouchableOpacity
          style={commonStyles.backIconContainer}
          >
          <Image style={commonStyles.backIconSize} source={backIcon} />
        </TouchableOpacity> */}

        <Image style={styles.DashLK} source={DashLK} />
        <Image source={SignInText} style={styles.SignInText} />
        <Text style={[styles.inputText, {marginTop: 30}]}>Username</Text>
        <TextInput style={styles.inputStyle} />
        <Text style={[styles.inputText, {marginTop: 10}]}>Password</Text>
        <TextInput 
          secureTextEntry={true}
          style={styles.inputStyle} />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_Dashboard')}
          style={[styles.signInButton, commonStyles.shadow]}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or</Text>

        <View style={styles.socialMediaIconsContainer}>
          <TouchableOpacity style={[styles.socialButton, commonStyles.shadow]}>
            <Image style={styles.socialIcon} source={GoogleIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, commonStyles.shadow]}>
            <Image style={styles.socialIcon} source={FacebookIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, commonStyles.shadow]}>
            <Image style={styles.socialIcon} source={InstagramIcon} />
          </TouchableOpacity>
         
        </View>
        <View style={styles.dontHaveContainer}>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('User_SignUp')}
          style={styles.dontHaveContainerTouch}>
          <Text style={styles.dontHaveText}>
            <Text style={{color: 'gray'}}>Don't have an account?</Text>
            <Text style={{color: Colors.themeGreen}}> Sign up</Text>
          </Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity

          style={styles.dontHaveContainer}
          onPress={() => this.props.navigation.navigate('User_SignUp')}>
          <Text style={styles.dontHaveText}>
            <Text style={{color: 'gray'}}>Don't have an account?</Text>
            <Text style={{color: Colors.themeGreen}}> Sign up</Text>
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default SignIN;
