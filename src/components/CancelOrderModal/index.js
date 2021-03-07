import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Image, Text} from 'react-native';
import styles from './style';
import CrossIcon from '../../images/crossIcon.png';
import CouponIcon2 from '../../images/couponIcon2.png';
import {Colors} from '../../utils/colors';
import { Fonts } from '../../utils/fonts';

class CancelOrderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    };
  }
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
              onPress={() => this.props.setModalVisible()}
              style={{
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: 0,
              }}>
              <Image
                style={{height: 15, width: 15, tintColor: 'gray'}}
                source={CrossIcon}
              />
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', fontSize: 16, fontFamily:Fonts.PoppinsRegular}}>
              Cancel Order
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => this.setState({selected: 1})}
            style={{flexDirection: 'row', margin: 20}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 15,
                  backgroundColor:
                    this.state.selected == 1 ? Colors.themeGreen : 'white',
                }}></View>
            </View>

            <Text style={{color: Colors.themeGreen, marginLeft: 10,fontFamily:Fonts.PoppinsRegular}}>
              I dont want this order anymore
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 2})}
            style={{flexDirection: 'row', margin: 20}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 15,
                  backgroundColor:
                    this.state.selected == 2 ? Colors.themeGreen : 'white',
                }}></View>
            </View>

            <Text style={{color: Colors.themeGreen, marginLeft: 10,fontFamily:Fonts.PoppinsRegular}}>
              The saller raised the price of this order
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 3})}
            style={{flexDirection: 'row', margin: 20}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 15,
                  backgroundColor:
                    this.state.selected == 3 ? Colors.themeGreen : 'white',
                }}></View>
            </View>

            <Text style={{color: Colors.themeGreen, marginLeft: 10,fontFamily:Fonts.PoppinsRegular}}>
              Product(s) out of stock
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 4})}
            style={{flexDirection: 'row', margin: 20}}>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 15,
                  backgroundColor:
                    this.state.selected == 4 ? Colors.themeGreen : 'white',
                }}></View>
            </View>

            <Text style={{color: Colors.themeGreen, marginLeft: 10,fontFamily:Fonts.PoppinsRegular}}>
              Other reasons
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => this.props.confirm()}
            style={[styles.couponButtons, {backgroundColor: Colors.themeBlue}]}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',fontFamily:Fonts.PoppinsRegular
              }}>
              Confirm Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CancelOrderModal;
