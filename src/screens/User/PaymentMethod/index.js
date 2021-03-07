import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import CardIcon from '../../../images/cardIcon.png';
import CashIcon from '../../../images/cashIcon.png';
import {cardIcon, codIcon} from '../../../utils/imagePath'
import AppBar from '../../../components/AppBar';
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import commonStyles from '../../../utils/commonStyles';

class PaymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMethod: 'card',
    };
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
        {/* <AppBar
          title={'Payment'}
          navigation={this.props.navigation}
        /> */}
        <TopBar 
            title={'Payment'}
            navigation={this.props.navigation}
        />
       

        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 30,
            color: 'gray',
            alignSelf: 'center',
            marginTop: 15,
            fontFamily:Fonts.PoppinsLight
          }}>
          Invoice ready to pay:
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 30,
            color: Colors.themeBlue,
            alignSelf: 'center',
            fontFamily:Fonts.PoppinsRegular
          }}>
          LKR 426,000
        </Text>

        <TouchableOpacity
          onPress={() => this.setState({selectedMethod: 'card'})}
          style={{
            height: 80,
            marginHorizontal: 20,
            borderRadius: 20,
            borderWidth: 1.5,
            borderColor: Colors.themeBlue,
            marginTop: 40,
            backgroundColor:
              this.state.selectedMethod == 'card' ? Colors.themeBlue : 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 25,
              width: 25,
              borderWidth: 1,
              borderRadius: 25,
              borderColor: Colors.themeGreen,
              backgroundColor:'white',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <View
              style={{
                height: 15,
                width: 15,
                borderRadius: 20,
                backgroundColor:
                  this.state.selectedMethod == 'card'
                    ? Colors.themeGreen
                    : 'white',
              }}></View>
          </View>
          <Image
            source={cardIcon}
            style={{
              height: 50,
              width: 50,
              tintColor: Colors.themeGreen,
              marginLeft: 20,
            }}
          />

          <Text
            style={{
              marginLeft: 20,
              fontSize: 22,
              color:
                this.state.selectedMethod == 'card'
                  ? 'white'
                  : Colors.themeBlue,
                  fontFamily:Fonts.PoppinsRegular
            }}>
            Add a card
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.setState({selectedMethod: 'cash'})}
          style={{
            height: 80,
            marginHorizontal: 20,
            borderRadius: 20,
            borderWidth: 1.5,
            borderColor: Colors.themeBlue,
            marginTop: 10,
            backgroundColor:
              this.state.selectedMethod == 'cash' ? Colors.themeBlue : 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 25,
              width: 25,
              borderWidth: 1,
              borderRadius: 25,
              borderColor: Colors.themeGreen,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 10,
              backgroundColor:'white',
            }}>
            <View
              style={{
                height: 15,
                width: 15,
                borderRadius: 20,
                backgroundColor:
                  this.state.selectedMethod == 'cash'
                    ? Colors.themeGreen
                    : 'white',
              }}></View>
          </View>
          <Image
            source={codIcon}
            style={{
              height: 45,
              width: 45,
              tintColor: Colors.themeGreen,
              marginLeft: 20,
            }}
          />
          <View>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                color:
                  this.state.selectedMethod == 'cash'
                    ? 'white'
                    : Colors.themeBlue,
                    fontFamily:Fonts.PoppinsRegular
              }}>
              COD (Cash on Delivery)
            </Text>
            <Text
              style={{
                marginLeft: 20,
                color: this.state.selectedMethod == 'card' ? 'gray' : 'white',
                fontFamily:Fonts.PoppinsLight
              }}>
              FREE OF CHARGE
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_PlaceOrder')}
          style={[{
            height: 45,
            width: 200,
            backgroundColor: Colors.themeBlue,
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 60,
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
          <Text style={{fontSize: 18, color: 'white',fontFamily:Fonts.PoppinsRegular}}>Place Order</Text>
        </TouchableOpacity>

        <BottomNavBar navigation={this.props.navigation} plusButton={true} />
      </View>
    );
  }
}

export default PaymentMethod;
