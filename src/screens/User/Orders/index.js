import React, {Component} from 'react';
import {Colors} from '../../../utils/colors';
import {View, StatusBar, Text, ScrollView, Image} from 'react-native';
import styles from './style';
// import TopBar from '../../../components/TopBar';
import TopBar from '../../../components/TopBarWithSearchBar'
import Engine from '../../../images/engine.png';
import MoreIcon from '../../../images/moreIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import MyStatusBar from '../../../components/StatusBar'
import { Fonts } from '../../../utils/fonts';

let orders;

class Orders extends Component {
  render() {
    orders = [];
    for (let i = 0; i < 5; i++) {
      orders.push(
        <View style={styles.orderContainer}>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 10, color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
              Order Date 2020-10-10 03:20
            </Text>
            <Text style={{fontSize: 10, color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
              Order ID: #D020033555
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Image
              source={Engine}
              style={{
                height: 80,
                width: 90,
              }}
            />
            <View>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>BMW N63 is a twin-turbo</Text>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>V8 petrol engine</Text>
              <Text style={{fontSize: 12, color: 'lightgray', fontFamily:Fonts.PoppinsRegular}}>Qty: 134</Text>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
            </View>
            <Image
              source={MoreIcon}
              style={{
                height: 15,
                width: 15,
              }}
            />
          </View>
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
        <TopBar 
          navigation={this.props.navigation}
          placeholder={'Search keyword, category, brand or part'}
        />
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Orders</Text>
        </View>
        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          {orders}
        </ScrollView>
        <BottomNavBar navigation={this.props.navigation}  plusButton={true}/>
      </View>
    );
  }
}

export default Orders;
