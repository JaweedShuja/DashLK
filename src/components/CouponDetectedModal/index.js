import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Image, Text} from 'react-native';
import styles from './style';
import CrossIcon from '../../images/crossIcon.png';
import CouponIcon2 from '../../images/couponIcon2.png';
import {Colors} from '../../utils/colors';

class CouponDetectedModal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'gray'} />

        <View
          style={{
            height: '70%',
            width: '80%',
            backgroundColor: 'white',
            borderRadius: 30,
          }}>
          <View
            style={{
              height: 50,
              backgroundColor: 'lightgray',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: 0,
              }}>
              <Image
                style={{height: 20, width: 20, tintColor: 'gray'}}
                source={CrossIcon}
              />
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', fontSize: 16}}>
              Coupon Detected
            </Text>
          </View>
          <Image
            style={{
              height: 100,
              width: 100,
              tintColor: Colors.themeGreen,
              alignSelf: 'center',
              marginTop: 20,
            }}
            source={CouponIcon2}
          />
          <Text
            style={{
              fontSize: 50,
              alignSelf: 'center',
              color: 'gray',
              marginTop: 20,
            }}>
            10 %
          </Text>

          <TouchableOpacity
            style={[styles.couponButtons, {backgroundColor: Colors.themeBlue}]}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
              }}>
              Apply
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.couponButtons,
              {backgroundColor: Colors.themeGreen},
            ]}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
              }}>
              Scan again
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CouponDetectedModal;
