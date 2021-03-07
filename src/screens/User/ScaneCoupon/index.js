import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
} from 'react-native';
import styles from './style';
import BackIcon from '../../../images/backIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import {Colors} from '../../../utils/colors';
import MyStatusBar from '../../../components/StatusBar'
import { Fonts } from '../../../utils/fonts';

class ScaneCoupon extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={Colors.themeBlue} /> */}
        <MyStatusBar  
          backgroundColor={Colors.themeBlue}
        />
        <View
          style={{
            height: 130,
            backgroundColor: Colors.themeBlue,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <View style={styles.topChildContainer}>
            <TouchableOpacity style={styles.backIconContainer}>
              <Image style={styles.BackIcon} source={BackIcon} />
            </TouchableOpacity>
            <TextInput
              placeholder={'Search keyword, category, brand or part'}
              style={styles.inputContainer}
            />
            <TouchableOpacity style={styles.backIconContainer}>
              {/* <Image style={styles.NotificationIcon} source={SettingsIcon} /> */}
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              alignSelf: 'center',
              marginTop: 30,
              fontFamily:Fonts.PoppinsRegular
            }}>
            QR Scan
          </Text>
        </View>

        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'gray',
            alignSelf: 'center',
            padding: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily:Fonts.PoppinsRegular
            }}>
            Find a code to scan
          </Text>
        </View>
        <BottomNavBar navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default ScaneCoupon;
