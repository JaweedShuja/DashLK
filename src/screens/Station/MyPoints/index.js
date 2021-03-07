import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import {Colors} from '../../../utils/colors';
import styles from './style';
import BottomNavBar from '../../../components/BottomNavBar';
import BackLight from '../../../images/backlight.png';
import {notificationIcon} from '../../../utils/imagePath'
import commonStyles from '../../../utils/commonStyles';
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'

let items;

class QuotationDetails extends Component {
  render() {
    items = [];
    for (let i = 0; i < 7; i++) {
      items.push(
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontFamily:Fonts.PoppinsLight}}>2020-11-03</Text>
          <Text style={{fontFamily:Fonts.PoppinsLight}}>Mr. Dehan Periras</Text>
          <Text style={{fontFamily:Fonts.PoppinsLight}}>50 PT</Text>
        </View>,
      );
    }
    return (
      <View style={styles.container}>
        
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />
        <TopBar 
          navigation={this.props.navigation}
          title={'My points'}
        />
       

        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <View style={styles.menuCircle}>
              <Text style={styles.circleText}>10000</Text>
            </View>
            <Text style={styles.circleBottomText}>Points earned</Text>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuCircle}>
              <Text style={styles.circleText}>155</Text>
            </View>
            <Text style={styles.circleBottomText}>Pending Points</Text>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuCircle}>
              <Text style={styles.circleText}>40</Text>
            </View>
            <Text style={styles.circleBottomText}>Token Applied</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginHorizontal: 30,
            borderRadius: 10,
            borderWidth: 0.7,
            borderColor: 'gray',
            alignItems: 'center',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontFamily:Fonts.PoppinsLight}}>Date</Text>
            <Text style={{fontFamily:Fonts.PoppinsLight}}>Used By</Text>
            <Text style={{fontFamily:Fonts.PoppinsLight}}>Points</Text>
          </View>
          {items}
        </View>

        <BottomNavBar 
        station
          navigation={this.props.navigation}
          plusButton={true}
        />
      </View>
    );
  }
}

export default QuotationDetails;
