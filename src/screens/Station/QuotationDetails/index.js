import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import {Colors} from '../../../utils/colors';
import styles from './style';
import BottomNavBar from '../../../components/BottomNavBar';
import BackLight from '../../../images/backlight.png';
import * as image from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import commonStyles from '../../../utils/commonStyles';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'


let items;
class QuotationDetails extends Component {
  render() {
    items = [];
    for (let i = 0; i < 4; i++) {
      items.push(
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              height:100,
              backgroundColor: 'white',
              borderRadius: 15,
              evaluation: 3,
              marginVertical: 5,
            }}>
            <Image
              style={{
                height: (7.5*5), 
                width: (15*5), 
                marginTop:15,
                alignSelf: 'center'}}
              source={image.lightIcon2}
            />
            <View
              style={{
                height: 30,
                position:'absolute',
                bottom:0,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
                width:'100%',
              }}>
              <Text style={{fontSize: 16, color: 'white', fontFamily:Fonts.PoppinsRegular}}>QTY 01</Text>
            </View>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              marginLeft: 20,
              // borderBottomWidth: 1,
              borderStyle:'dashed',
              borderRadius: 1,
              // borderColor: 'gray',
            }}>
            <Text style={{fontSize: 20, fontFamily:Fonts.PoppinsRegular}}>BMW E46</Text>
            <Text style={{ fontFamily:Fonts.PoppinsRegular, marginVertical:-5}}>Front Bumber Blue Color</Text>
            <Text style={{fontFamily:Fonts.PoppinsRegular, marginVertical:-5}}>Recondition</Text>
            <Text style={{fontFamily:Fonts.PoppinsBold}}>QTY 05 Price 20,000 LKR</Text>
            <Text ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - -
            </Text>
          </View>
        </View>,
      );
    }
    return (
      <View style={styles.container}>
      
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
        />
        
        <TopBar 
          navigation={this.props.navigation}
          title={'Quotations Details'}
        />
        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          <View
            style={{
              padding: 20,
              width: '90%',
              borderRadius: 20,
              borderWidth: 0.7,
              borderColor: 'gray',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            {items}
          </View>
          <View
            style={{
              height: 110,
              backgroundColor: Colors.whitesmoke,
              marginTop: 30,
              padding: 10,
            }}>
            <Text style={{ fontFamily:Fonts.PoppinsRegular}}>Order Summery (4 Items)</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'gray', fontFamily:Fonts.PoppinsRegular
                  
                }}>
                Total:
              </Text>

              <Text
                style={{
                  color: 'gray', fontFamily:Fonts.PoppinsRegular
                }}>
                LKR 450,000
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'gray',
                   fontFamily:Fonts.PoppinsBold
                }}>
                Points (1200 available)
              </Text>

              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingTop:2,
                  borderRadius: 5,
                  fontSize:13,
                  backgroundColor: 'white', 
                  fontFamily:Fonts.PoppinsRegular,
                  borderWidth:1,
                  borderColor:'lightgray',
                  textAlign:'center',
                  color:Colors.themeBlue
                }}>
                200
              </Text>

              <Text
                style={{
                  color: 'gray',
                   fontFamily:Fonts.PoppinsBold
                }}>
                -200
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'gray',
                 fontFamily:Fonts.PoppinsBold
                }}>
                Total:
              </Text>

              <Text
                style={{
                  color: 'gray',
                   fontFamily:Fonts.PoppinsBold
                }}>
                LKR 449,800
              </Text>
            </View>
          </View>
        </ScrollView>

        <BottomNavBar 
        station
        navigation={this.props.navigation}
          plusButton={true}
        />
      </View>
    );
  }
}

export default QuotationDetails;
