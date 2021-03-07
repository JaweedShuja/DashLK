import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import ItemList from '../../../components/ItemsList';
import CheckIcon from '../../../images/orderPlaced.webp';
import BottomNavBar from '../../../components/BottomNavBar';
import {orderPlacedIcon} from '../../../utils/imagePath'
import MyStatusBar from '../../../components/StatusBar'

class CancelOrder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />
        
        {/* <StatusBar
          backgroundColor={Colors.themeBlue}
          barStyle={'light-content'}
        /> */}
        <View style={styles.topContainer}>
          <Text style={styles.topContainerText}>Order</Text>
        </View>
        <ScrollView contentContainerStyle={{paddingBottom:150}}>
        <Text style={styles.cancelMsg}>Order Placed</Text>
        <Text style={styles.orderDes}>Your order was successfully placed and is being prepared for delivery</Text>

        {/* <View style={styles.checkContainer}> */}
          <Image source={orderPlacedIcon} style={styles.CheckIcon} />
        {/* </View> */}



        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_OrderDetails')}>
          <Text style={[styles.orderDes, {fontSize:12}]}>View Order Details</Text>
        </TouchableOpacity>

        <ItemList />

        <ItemList />
        </ScrollView>
        <BottomNavBar navigation={this.props.navigation} plusButton={true}/>
        
      </View>
    );
  }
}

export default CancelOrder;
