import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BottomNavBar from '../../../components/BottomNavBar';
import BackIcon from '../../../images/backIcon.png';
import ForwardIcon from '../../../images/forwardIcon.png';
import createNote from '../../../images/createNote.png';
import PointsIcon from '../../../images/pointsIcon.png';
import SettingsIcon from '../../../images/settingsIcon.png';
import HomeIcon from '../../../images/homeIcon.webp';
import UserIcon from '../../../images/userIcon.png';
import GarageIcon from '../../../images/garageIcon.png';
import LogoutIcon from '../../../images/logoutIcon.png';
import commonStyles from '../../../utils/commonStyles';
import AppBar from '../../../components/AppBar';
import MyStatusBar from '../../../components/StatusBar'
import { Fonts } from '../../../utils/fonts';
import { 
  settingsIcon, 
  userIconProfile, 
  homeIconprofile, 
  garageIcon,
  pointsIcon,
  supportIcon,
  faqIcon,
  logoutIcon
 } from '../../../utils/imagePath'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
        <View style={styles.topChildContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backIconContainer}>
            <Image style={[styles.BackIcon, commonStyles.backIconSize]} source={BackIcon} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerText, {fontSize: 18, fontFamily:Fonts.PoppinsRegular}]}>Profile</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Station_Settings')}
            style={{
              height: 50,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 0,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                
                tintColor: 'white',
              }}
              source={settingsIcon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: -70,
            margin: 20,
          }}>
          <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Shop_Profile')
          }}
            style={{
              height: 70,
              width: 70,
              borderRadius: 70,
              backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 35,
                width: 35,
                tintColor: 'white',
              }}
              source={homeIconprofile}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_Profile')}
            style={{
              height: 120,
              width: 120,
              borderRadius: 120,
              backgroundColor: 'gray',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 60,
                width: 60,
                tintColor: 'white',
              }}
              source={userIconProfile}
            />
            <Text style={{
              color: 'white', 
              fontSize: 18, 
              fontFamily:Fonts.PoppinsBold,
            }}>Damith</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 70,
              backgroundColor: Colors.themeGreen,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 35,
                width: 35,
                tintColor: 'white',
              }}
              source={garageIcon}
            />
          </View>
        </View>

        

        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Station_MyPoints')}
        style={[styles.dashboardButton, {marginTop: 30}]}>
          <View style={styles.buttonLeftElement}>
            <Image
              source={pointsIcon}
              style={{height: 25, width: 25, tintColor: Colors.themeBlue}}
            />
          </View>
          <Text style={styles.buttonText}>Points</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.dashboardButton}>
          <View style={styles.buttonLeftElement}>
            <Image source={supportIcon} style={styles.buttonElementImage} />
          </View>
          <Text style={styles.buttonText}>Support</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Station_FAQ')}
        style={styles.dashboardButton}>
          <View style={styles.buttonLeftElement}>
            <Image source={faqIcon} style={styles.buttonElementImage} />
          </View>
          <Text style={styles.buttonText}>FAQ</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.dashboardButton}>
          <View style={styles.buttonLeftElement}>
            <Image source={logoutIcon} style={styles.buttonElementImage} />
          </View>
          <Text style={styles.buttonText}>Sign Out</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>

        <BottomNavBar station navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Profile;
