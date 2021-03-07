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
import BottomNavBar from '../../../components/BottomNavBar';
import { Fonts } from '../../../utils/fonts';
import commonStyles from '../../../utils/commonStyles';
import {notificationIcon, privacyIcon,returnPolicyIcon, logoutIcon} from '../../../utils/imagePath'
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'
import ForwardIcon from '../../../images/forwardIcon.png';


class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
     
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />
        
        <TopBar 
          title={'Settings'}
          navigation={this.props.navigation}
        />

        <View style={styles.profileNameContainer}>
          <View style={{marginLeft: 20}}>
            <Text style={{fontFamily: Fonts.PoppinsRegular, fontSize: 20, color: Colors.themeBlue}}>Profile</Text>
            <Text style={{fontFamily: Fonts.PoppinsRegular, color: Colors.themeGreen, marginVertical:-5}}>Service Station Name</Text>
            <Text style={{fontFamily: Fonts.PoppinsRegular, color: 'gray', fontSize: 12}}>profile@gmail.com</Text>
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
            source={notificationIcon}
            style={[styles.NotificationIcon, {tintColor: 'black', opacity:0.8}]}
          />
          <Text style={styles.settingOptionText}>Notification</Text>
          <Switch style={{marginLeft:5}} 
            trackColor={{ false: "#767577", true: Colors.themeBlue }}
            thumbColor={true ? "white" : "#f4f3f4"}
            
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            value={true}
            />
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.settingsOptionContainer}>
          <Image
            source={privacyIcon}
            style={[styles.optionImage, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Privacy policy</Text>
          <Image source={ForwardIcon} style={styles.forwardIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsOptionContainer}>
          <Image
            source={returnPolicyIcon}
            style={[styles.optionImage, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Return policy</Text>
          <Image source={ForwardIcon} style={styles.forwardIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_SignIn')}
          style={styles.settingsOptionContainer}>
          <Image
            source={logoutIcon}
            style={[styles.optionImage, {tintColor: 'gray'}]}
          />
          <Text style={styles.settingOptionText}>Log out</Text>
          <Image source={ForwardIcon} style={styles.forwardIcon} />
        </TouchableOpacity>

        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 20,
            color: 'gray',
            fontFamily:Fonts.PoppinsLight
          }}>
          Version 3.0.0
        </Text>
        <BottomNavBar navigation={this.props.navigation} 
        plusButton={true}
        shop
        />
      </View>
    );
  }
}

export default Settings;
