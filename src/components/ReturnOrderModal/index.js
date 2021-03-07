import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';
import styles from './style';
import CrossIcon from '../../images/crossIcon.png';
import CouponIcon2 from '../../images/couponIcon2.png';
import {Colors} from '../../utils/colors';

class ReturnOrderModal extends Component {
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
              Return Order
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => this.setState({selected: 1})}
            style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
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

            <Text style={{color: 'gray', marginLeft: 10}}>
              Item not as described
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 2})}
            style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
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

            <Text style={{color: 'gray', marginLeft: 10}}>Delivert Issue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 3})}
            style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
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

            <Text style={{color: 'gray', marginLeft: 10}}>Quality Issue</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 4})}
            style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
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

            <Text style={{color: 'gray', marginLeft: 10}}>Damaged Item</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 5})}
            style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
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
                    this.state.selected == 5 ? Colors.themeGreen : 'white',
                }}></View>
            </View>

            <Text style={{color: 'gray', marginLeft: 10}}>
              Item accessory issues
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.setState({selected: 6})}
            style={{flexDirection: 'row', marginLeft: 20, marginTop: 15}}>
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
                    this.state.selected == 6 ? Colors.themeGreen : 'white',
                }}></View>
            </View>

            <Text style={{color: 'gray', marginLeft: 10}}>Other</Text>
          </TouchableOpacity>

          {/* <TextInput
            style={{
              marginHorizontal: 30,
              //   height: 100,
              borderWidth: 1,
              borderColor: 'lightgray',
            }}
          /> */}

          <View
            style={{
              marginHorizontal: 20,
              height: 80,
              borderWidth: 1,
              borderColor: 'lightgray',
              marginTop: 10,
              borderRadius: 10,
            }}></View>

          <TouchableOpacity
            style={[styles.couponButtons, {backgroundColor: Colors.themeBlue}]}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
              }}>
              Confirm Request
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ReturnOrderModal;
