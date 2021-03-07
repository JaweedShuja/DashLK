import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, StatusBar} from 'react-native';
import {Colors} from '../../../utils/colors';
import styles from './style';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import PinLocator from '../../../images/pinLocator.png';
import {pinIcon} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import commonStyles from '../../../utils/commonStyles';
import MyStatusBar from '../../../components/StatusBar'

class DeliveryDetails extends Component {
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
        <View style={styles.topChildContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={commonStyles.backIconContainer}>
            <Image style={[commonStyles.backIconSize, {tintColor:'white'}]} source={BackIcon} />
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Delivery Details</Text>
          <TouchableOpacity style={styles.backIconContainer}>
            <Text style={{color: 'white', fontSize: 16, fontFamily:Fonts.PoppinsRegular, marginTop:10}}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            // height: 200,
            paddingBottom: 10,
            marginHorizontal: 15,
            borderRadius: 15,
            backgroundColor: Colors.whitesmoke,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 40,
                width: 40,
                alignSelf: 'center',
                marginLeft: 30,
                marginRight: 30,
              }}
              source={pinIcon}
            />
            <View
              style={{
                marginRight: 100,
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'gray',
                  fontFamily:Fonts.PoppinsRegular
                }}>
                Damith Hemachandra 80/3, Nisala uyana, Ilukwaththa
                Pilimathalawa. 0712003005
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('User_AddDeliveryDetails')
          }
          style={[{
            height: 45,
            width: 200,
            backgroundColor: Colors.themeBlue,
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }, commonStyles.shadow]}>
          <Text style={{fontSize: 18, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Add new address</Text>
        </TouchableOpacity>

        <BottomNavBar navigation={this.props.navigation} plusButton={true} />
      </View>
    );
  }
}

export default DeliveryDetails;
