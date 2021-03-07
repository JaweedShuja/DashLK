import React, {Component} from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import styles from './style.js';

import BackIcon from '../../../images/backIcon.png';
import PinLocator from '../../../images/pinLocator.png';
import PrivacyPolicyIcon from '../../../images/privacyPolicyIcon.png';
import ReturnPolicyIcon from '../../../images/returnPolicy.png';
import LogoutIcon from '../../../images/logoutIcon.png';

import NotificationIcon from '../../../images/notificationIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import commonStyles from '../../../utils/commonStyles';
import {notificationIcon} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'

class Settings extends Component {
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
        {/* <View style={styles.topChildContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={commonStyles.backIconContainer}>
            <Image style={[styles.BackIcon, commonStyles.backIconSize]} source={BackIcon} />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 18, fontFamily:Fonts.PoppinsRegular}}>Settings</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User_Notification')}
            style={styles.backIconContainer}>
            <Image style={styles.NotificationIcon} source={notificationIcon} />
          </TouchableOpacity>
        </View> */}
        <TopBar 
            title={'Settings'}
            navigation={this.props.navigation}
        />

        <View style={styles.profileNameContainer}>
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: Colors.themeBlue, fontFamily:Fonts.PoppinsRegular}}>Profile</Text>
            <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular, marginVertical:-5}}>Damith</Text>
            <Text style={{color: 'gray', fontSize: 12, fontFamily:Fonts.PoppinsRegular}}>profile@gmail.com</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
              right: 20,
              top:10,
            }}>
            <Text style={{ fontFamily:Fonts.PoppinsRegular}}>Account Status</Text>
            <Switch style={{marginLeft:5}} 
            trackColor={{ false: "#767577", true: Colors.themeBlue }}
            thumbColor={true ? "white" : "#f4f3f4"}
            
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            value={true}
            />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.settingsOptionContainer, {marginTop: 50}]}>
          <Image
            source={NotificationIcon}
            style={[styles.NotificationIcon, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Notification</Text>
          <Switch />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_DeliveryDetails')}
          style={styles.settingsOptionContainer}>
          <Image
            source={PinLocator}
            style={[styles.NotificationIcon, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Delivery address</Text>
          {/* <Switch /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsOptionContainer}>
          <Image
            source={PrivacyPolicyIcon}
            style={[styles.NotificationIcon, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Privacy policy</Text>
          {/* <Switch /> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsOptionContainer}>
          <Image
            source={ReturnPolicyIcon}
            style={[styles.NotificationIcon, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Return policy</Text>
          {/* <Switch /> */}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_SignIn')}
          style={styles.settingsOptionContainer}>
          <Image
            source={LogoutIcon}
            style={[styles.NotificationIcon, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Log out</Text>
          {/* <Switch /> */}
        </TouchableOpacity>

        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 20,
            fontFamily:Fonts.PoppinsLight
          }}>
          Version 3.0.0
        </Text>
        <BottomNavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Settings;
