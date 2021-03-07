import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import {Colors} from '../../../utils/colors';
import styles from './style';
import BottomNavBar from '../../../components/BottomNavBar';
import NoteIcon from '../../../images/todoIcon.png';
import {qrequested, notificationIcon} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import commonStyles from '../../../utils/commonStyles';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'

let items;

class QuotationRequested extends Component {
  render() {
    items = [];
    for (let index = 0; index < 4; index++) {
      items.push(
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Station_QuotationDetails')}
          key={index.toString()}
          style={{
            height: 140,
            marginHorizontal: 15,
            borderRadius: 20,
            marginVertical: 5,
            borderWidth: 0.7,
            borderColor: 'gray',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: Colors.themeGreen,
              borderRadius: 20,
              margin: 15,
            }}>
            <Image style={{height: 70, width: 70}} source={qrequested} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 10,
                width: 10,
                borderRadius: 10,
                marginTop: 20,
                backgroundColor:
                  index == 0 || index == 1
                    ? Colors.themeGreen
                    : 'red',
                alignSelf: 'center',
              }}></View>

            {index == 0 || index == 1 ? (
              <View>
                <Text style={{fontSize: 20, alignSelf: 'center'}}>
                  On-Way
                </Text>
                <TouchableOpacity
                  style={{
                    height: 25,
                    borderRadius: 30,
                    width: 100,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 5,
                  }}>
                  <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text style={{fontSize: 20, alignSelf: 'flex-end', fontFamily:Fonts.PoppinsRegular}}>
                  Request
                </Text>
                <Text style={{fontSize: 20, alignSelf: 'flex-end', fontFamily:Fonts.PoppinsRegular, marginTop:-10}}>
                  Delivered
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20, 
                alignSelf: 'flex-end', 
                marginRight: 10, 
                fontFamily:Fonts.PoppinsRegular,
                marginBottom:-10
                }}>
              Total
            </Text>
            <Text
              style={{fontSize: 20, alignSelf: 'flex-end', marginRight: 10, fontFamily:Fonts.PoppinsRegular}}>
              123,000
            </Text>

            {index == 0 || index == 1 ? (
              <TouchableOpacity
                style={{
                  height: 25,
                  borderRadius: 30,
                  width: 100,
                  backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: Platform.OS == 'ios' ? 15 : 5,
                }}>
                <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular}}>Order</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </TouchableOpacity>,
      );
    }
    return (
      <View style={styles.container}>
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />
        
        <TopBar 
          navigation={this.props.navigation}
          title={'Quotation Requested'}
        />
        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          {items}
        </ScrollView>
        <BottomNavBar
        station 
        navigation={this.props.navigation}
          plusButton={true}
        />
      </View>
    );
  }
}

export default QuotationRequested;
