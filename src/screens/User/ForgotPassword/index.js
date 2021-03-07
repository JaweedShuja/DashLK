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
import BottomNavBar from '../../../components/BottomNavBar';
import StarIcon from '../../../images/starIcon.png';
import AppBar from '../../../components/AppBar';
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import commonStyles from '../../../utils/commonStyles';

class ForgotPassword extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={Colors.themeBlue}
          barStyle={'light-content'}
        /> */}
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
        />
        {/* <AppBar
          title={'Forgot password'}
          navigation={this.props.navigation}
        /> */}
       
        <TopBar 
            title={'Forgot password'}
            navigation={this.props.navigation}
        />
        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 30,
            color: Colors.themeBlue,
            marginLeft: 30,
            marginTop: 30,
            fontFamily:Fonts.PoppinsLight
          }}>
          Enter your email address
        </Text>

        <TextInput
          placeholder={'Email'}
          style={{
            marginHorizontal: 30,
            borderBottomWidth: 0.7,
            borderColor: 'gray',
            marginTop: 20,
            fontSize:16,
            marginHorizontal: 30,
            paddingHorizontal: 10,
            paddingVertical: 5,
            fontFamily:Fonts.PoppinsRegular
          }}
        />

        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            color: 'gray',
            fontFamily:Fonts.PoppinsLight
          }}>
          You will receive a verification code to
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            color: 'gray',
            fontFamily:Fonts.PoppinsLight,
            marginVertical:-5,
          }}>
          recover your password
        </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_Confirmation')}
          style={[{
            height: 45,
            width: 200,
            backgroundColor: Colors.themeBlue,
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
          }, commonStyles.shadow]}>
          <Text style={{fontSize: 18, color: 'white',fontFamily:Fonts.PoppinsRegular}}>Send Code</Text>
        </TouchableOpacity>

        

        {/* <BottomNavBar  plusButton={true} /> */}
      </View>
    );
  }
}

export default ForgotPassword;
