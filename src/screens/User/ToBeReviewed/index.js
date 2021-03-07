import React, {Component} from 'react';
import {Colors} from '../../../utils/colors';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
// import TopBar from '../../../components/TopBar';
import Engine from '../../../images/engine.png';
import MoreIcon from '../../../images/moreIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import MyStatusBar from '../../../components/StatusBar'
import { Fonts } from '../../../utils/fonts';
import TopBar from '../../../components/TopBarWithSearchBar'
import commonStyles from '../../../utils/commonStyles';
let orders;

class ToBeReviewed extends Component {
  render() {
    orders = [];
    for (let i = 0; i < 1; i++) {
      orders.push(
        <View style={styles.orderContainer}>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 10, color: 'gray',fontFamily:Fonts.PoppinsRegular}}>
              Order Date 2020-10-10 03:20
            </Text>
            <Text style={{fontSize: 10, color: 'gray',fontFamily:Fonts.PoppinsRegular}}>
              Order ID: #D020033555
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              //   justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Image
              source={Engine}
              style={{
                height: 80,
                width: 90,
              }}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>BMW N63 is a twin-turbo</Text>
              <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>V8 petrol engine</Text>
              <Text style={{fontSize: 12, color: 'lightgray',fontFamily:Fonts.PoppinsRegular}}>Qty: 134</Text>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
            </View>
            {/* <Image
              source={MoreIcon}
              style={{
                height: 15,
                width: 15,
              }}
            /> */}
          </View>

          <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('User_ConfirmDelivery')
          }}
            style={[{
              height: 30,
              width: 115,
              backgroundColor: Colors.themeBlue,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 10,
              bottom: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
            },commonStyles.shadow]}>
            <Text style={{color: 'white', fontSize:11,fontFamily:Fonts.PoppinsRegular}}>Confirm Delivery</Text>
          </TouchableOpacity>
        </View>,
      );
    }
    return (
      <View style={styles.container}>
        {/* <StatusBar
          backgroundColor={Colors.themeBlue}
          barStyle={'light-content'}
        /> */}
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />
        {/* <TopBar navigation={this.props.navigation} /> */}
        <TopBar 
          placeholder={'Search by Order ID'}
          navigation={this.props.navigation}
          hideBellIconComponent
        />
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>To Be Reviewed</Text>
        </View>
        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          {orders}
        </ScrollView>
        <BottomNavBar navigation={this.props.navigation}  plusButton={true} />
      </View>
    );
  }
}

export default ToBeReviewed;
