import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import DashLK from '../../../images/Dash.lk.png';
import SignInText from '../../../images/registerText.png';
import FacebookIcon from '../../../images/facebookIcon.png';
import InstagramIcon from '../../../images/instagramIcon.png';
import GoogleIcon from '../../../images/googleIcon.png';
import commonStyles from '../../../utils/commonStyles';
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'

class SignIN extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <MyStatusBar 
            backgroundColor={Colors.statusBarColor}
            barStyle={'dark-content'}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_SignIn')}
          style={styles.backIconContainer}>
          <Image style={commonStyles.backIconSize} source={BackIcon} />
        </TouchableOpacity>

        <Image style={styles.DashLK} source={DashLK} />
        <Image source={SignInText} style={styles.SignInText} />
        <TextInput
          style={[styles.inputStyle, {marginTop: 10, fontFamily:Fonts.PoppinsRegular}]}
          placeholder="Email"
        />
        <TextInput
          style={[styles.inputStyle, {marginTop: 10, fontFamily:Fonts.PoppinsRegular}]}
          placeholder="Password"
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_ForgotPassword')}>
          <Text style={{
            alignSelf: 'flex-end',
            marginRight: 40,
            marginTop: 10,
            color: 'gray',
            fontFamily:Fonts.PoppinsRegular
          }}>Forgot Password</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_SignIn')}
          style={[styles.signInButton, commonStyles.shadow]}>
          <Text style={styles.signInText}>Agree & Create Account</Text>
        </TouchableOpacity>

        <Text
          style={{
            color: 'gray',
            alignSelf: 'center',
            marginTop: 15,
            fontSize: 12,
            fontFamily:Fonts.PoppinsRegular
          }}>
          By registering a Dash account, you agree
        </Text>
        <Text style={{
          color: 'gray', 
          alignSelf: 'center', 
          fontSize: 12, 
          fontFamily:Fonts.PoppinsRegular,
          marginTop:-5
          }}>
          that you have read and accepted our
        </Text>
        <Text
          style={{
            color: Colors.themeGreen, 
            alignSelf: 'center', 
            fontSize: 12,
            fontFamily:Fonts.PoppinsRegular,
          marginTop:-5
            }}>
          Dash Free Membership Agreement
        </Text>
        <Text style={{alignSelf: 'center', fontSize: 12,fontFamily:Fonts.PoppinsRegular,
          marginTop:-5}}>
          <Text style={{color: 'gray'}}>and</Text>
          <Text style={{color: Colors.themeGreen}}> Privacy Policy.</Text>
        </Text>

        <Text style={styles.orText}>Sign in with</Text>

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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_SignIn')}>
          <Text style={styles.goToSignInText}>
            <Text style={{color: 'gray'}}>Have an account? </Text>
            <Text style={{color: Colors.themeGreen}}> Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIN;
