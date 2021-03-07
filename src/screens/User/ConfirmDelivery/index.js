import React, {Component} from 'react';
import {View, Text, StatusBar, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import CheckIcon from '../../../images/checkIcon.webp';
import Engine from '../../../images/engine.png';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import { Fonts } from '../../../utils/fonts';
import commonStyles from '../../../utils/commonStyles';



class ConfirmDelivery extends Component {
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
        {/* <View
          style={{
            height: 50,
            marginBottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.themeBlue,
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: 'white',
              }}
              source={BackIcon}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white'}}>Confirm Delivery</Text>
          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}></Text>
          </TouchableOpacity>
        </View> */}
        <TopBar 
          navigation={this.props.navigation}
          title={'Confirm Delivery'}
        />

        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 30,
            color: Colors.themeBlue,
            alignSelf: 'center',
            marginTop: 10,
            fontFamily:Fonts.PoppinsLight
          }}>
          Are you sure you want to confirm that you received your order?
        </Text>

        <Text
          style={{
            marginHorizontal: 30,
            color: 'lightgray',
            alignSelf: 'center',
            marginTop: 20,
            fontFamily:Fonts.PoppinsLight
          }}>
          By clicking 'Confirm', you are confirming that you have received your
          full order in good condition.
        </Text>

        <View
          style={{
            height: 150,
            borderRadius: 15,
            borderRadius: 15,
            backgroundColor: Colors.whitesmoke,
            marginTop: 20,
            marginHorizontal: 30,
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: 25,
              backgroundColor: Colors.themeGreen,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            <Image
              style={{
                height: 15,
                width: 15,
                tintColor: 'white',
              }}
              source={CheckIcon}
            />
          </View>
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: 'white',
              marginLeft: 10,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 80,
                width: 90,
              }}
              source={Engine}
            />
          </View>
          <View style={{alignSelf: 'center', marginLeft: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
              }}>
              Short Ram Intake Sys...
            </Text>
            <Text
              style={{
                color: Colors.themeBlue,
                fontSize: 16,
                marginTop: 10,
              }}>
              LKR 25,000
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_LeaveFeedback')}
          style={[{
            height: 45,
            width: 200,
            backgroundColor: Colors.themeBlue,
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
          }, commonStyles.shadow]}>
          <Text style={{fontSize: 18, color: 'white'}}>Confirm</Text>
        </TouchableOpacity>

        <BottomNavBar navigation={this.props.navigation} plusButton={true}/>
      </View>
    );
  }
}

export default ConfirmDelivery;
