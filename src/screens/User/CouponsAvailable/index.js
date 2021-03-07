import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import AvailableCoupons from '../../../images/availableCoupons.png';
import AppBar from '../../../components/AppBar';
import { Fonts } from '../../../utils/fonts';
import {couponAvailable} from '../../../utils/imagePath'
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'

class CouponAvailable extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={Colors.themeBlue}
          barStyle={'light-content'}
        /> */}
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
            barStyle={'light-content'}
        />


        {/* <AppBar
          title={'Coupons'}
          navigation={this.props.navigation}
        /> */}
        <TopBar 
          title={'Coupons'}
          navigation={this.props.navigation}
        />
        <View
          style={{
            height: 45,
            width: '100%',
            backgroundColor: Colors.appBackgroundColor,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16,  fontFamily:Fonts.PoppinsRegular, opacity:0.8}}>
              Available
            </Text>
            <View
              style={{
                height: 5,
                width: 5,
                borderRadius: 5,
                backgroundColor: Colors.themeGreen,
              }}></View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User_CouponsUsed')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              
            }}>
            <Text style={{fontSize: 16, 
              fontFamily:Fonts.PoppinsRegular, 
              color:'gray',}}>Used</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex:1,
          }}
          >
            <Image
              style={{
                height:(36.2*3),
                width:(123.8*3),
                alignSelf:'center',
              }}
              source={couponAvailable}
            />
            <Image
              style={{
                height:(36.2*3),
                width:(123.8*3),
                alignSelf:'center',
              }}
              source={couponAvailable}
            />
            <Image
              style={{
                height:(36.2*3),
                width:(123.8*3),
                alignSelf:'center',
              }}
              source={couponAvailable}
            />
            <Image
              style={{
                height:(36.2*3),
                width:(123.8*3),
                alignSelf:'center',
              }}
              source={couponAvailable}
            />
          {/* <Image
            source={AvailableCoupons}
            resizeMode={'contain'}
            style={{
              height: '100%',
              width: '100%',
              backgroundColor:'red'
            }}
          /> */}
        </View>

        <BottomNavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

export default CouponAvailable;
