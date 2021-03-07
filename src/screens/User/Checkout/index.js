import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import engine from '../../../images/engine.png';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import { Fonts } from '../../../utils/fonts';

class Checkout extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />
        <TopBar 
          title={'Checkout'}
          navigation={this.props.navigation}
        />
        <ScrollView
          contentContainerStyle={{paddingBottom:150}}
        >
          
          <Text style={{margin: 10, fontFamily:Fonts.PoppinsRegular}}>
            <Text style={{ fontFamily:Fonts.PoppinsRegular}}>Seller</Text>
            <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular}}> Store00200</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{
                  height: 80,
                  width: 90,
                }}
                source={engine}
              />
            </View>
            <View style={{flex: 2, justifyContent: 'center', marginLeft: 20}}>
              <Text style={{ fontFamily:Fonts.PoppinsRegular}}>BMW 2018 N63 twin-turbo v8 petrol engine</Text>
              <Text style={{ fontFamily:Fonts.PoppinsRegular}}>Quanitity 1</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  alignItem: 'center',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20,
                    backgroundColor: 'lightgray',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontFamily:Fonts.PoppinsRegular}}>-</Text>
                </TouchableOpacity>

                <Text style={{fontFamily:Fonts.PoppinsRegular}}>1</Text>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 20,
                    backgroundColor: 'lightgray',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontFamily:Fonts.PoppinsRegular}}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'lightgray',
              marginTop: 10,
            }}></View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{flex: 1}}>
              <Text style={{marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>Deliver to:</Text>
            </View>
            <View style={{flex: 2}}>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
                Damith Hemachandra 80/3, Nisala uyana, Ilukwaththa Pilimathalawa
                0712003005
              </Text>
            </View>
            <View style={{flex: 1}}></View>
          </View>
          <View
            style={{
              height: 50,
              flexDirection: 'row',
              backgroundColor: 'whitesmoke',
              marginTop: 10,
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: Colors.themeBlue,
                marginLeft: 20,
              }}></View>

            <Text
              style={{fontSize: 18, color: Colors.themeBlue, marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>
              One day Delivery
            </Text>

            <Text style={{color: 'gray', marginLeft: 5, fontFamily:Fonts.PoppinsRegular}}>(Fees applies)</Text>
          </View>

          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 10, fontFamily:Fonts.PoppinsRegular}}>
            <Text>Add coupons:</Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'lightgray',
              marginTop: 10,
            }}></View>

          <View
            style={{
              backgroundColor: 'whitesmoke',
              paddingVertical: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>Subtotal(1 Item)</Text>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>Delivery (One day)</Text>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>1,000</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>Total</Text>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 451,000</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: 'whitesmoke',
              paddingVertical: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: Colors.themeBlue,
                marginLeft: 10,
                marginBottom: 5,
                 fontFamily:Fonts.PoppinsRegular
              }}>
              Order Summary (1 Item)
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>Total:</Text>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>LKR 451,000</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>Coupon code: (CX002)</Text>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>-25,000</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={{ fontFamily:Fonts.PoppinsRegular}}>Total</Text>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 426,000</Text>
            </View>
          </View>

          <View style={{marginLeft: 10, marginTop: 5}}>
            <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
              Upon clicking 'Place Order',I confirm I have read and
            </Text>
            <Text style={{fontFamily:Fonts.PoppinsRegular}}>
              <Text style={{color: 'gray'}}>acknowledge all</Text>
              <Text style={{color: Colors.themeBlue}}>
                {' '}
                terms and conditions.
              </Text>
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            height: 60,
            width: '100%',
            backgroundColor: Colors.themeGreen,
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
          }}>
          <View style={{alignSelf: 'center', marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>
            <Text style={{color: 'lightgray'}}>Total</Text>
            <Text style={{fontSize: 20, color: 'white'}}>LKR 426,000</Text>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User_PaymentMethod')}
            style={{
              height: 40,
              width: 150,
              borderRadius: 30,
              backgroundColor: Colors.themeBlue,
              alignSelf: 'center',
              position: 'absolute',
              right: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Checkout;
