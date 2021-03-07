import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BottomNavBar from '../../../components/BottomNavBar';
import BackIcon from '../../../images/backIcon.png';
import ForwardIcon from '../../../images/forwardIcon.png';
import commonStyles from '../../../utils/commonStyles';
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import { 
  settingsIcon, 
  userIconProfile, 
  homeIconprofile, 
  garageIcon,
  pointsIcon,
  supportIcon,
  faqIcon,
  binIcon2
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
            onPress={() => this.props.navigation.navigate('Shop_Settings')}
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
                height: 30,
                width: 30,
                tintColor: 'white',
              }}
              source={homeIconprofile}
            />
          </View>
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
                height: 55,
                width: 55,
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
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Station_Profile')}
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
              source={garageIcon}
            />
          </TouchableOpacity>
        </View>


        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Shop_Earning')}
        style={[styles.dashboardButton, {marginTop: 30}]}>
          <View style={styles.buttonLeftElement}>
            <Image
              source={pointsIcon}
              style={{height: 25, width: 25, tintColor: Colors.themeBlue}}
            />
          </View>
          <Text style={styles.buttonText}>Earnings</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.dashboardButton}>
          <View style={styles.buttonLeftElement}>
            <Image source={supportIcon} style={styles.buttonElementImage} />
          </View>
          <Text style={styles.buttonText}>Support</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.dashboardButton}>
          <View style={styles.buttonLeftElement}>
            <Image source={binIcon2} style={styles.buttonElementImage} />
          </View>
          <Text style={styles.buttonText}>Delete Store</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>

       

        <BottomNavBar 
        shop
        navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Profile;
