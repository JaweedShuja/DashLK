import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  TextInput,
} from 'react-native';
import styles from './style';
// import TopBar from '../../../components/TopBar';
import {Colors} from '../../../utils/colors';
import BottomNavBar from '../../../components/BottomNavBar';
import Engine from '../../../images/engine.png';
import HeartIcon from '../../../images/heartIcon.png';
import {heartIconWishlist} from '../../../utils/imagePath'
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import commonStyles from '../../../utils/commonStyles';
import {notificationIcon, engine1} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'

let list;

class WishList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  render() {
    list = [];
    for (let i = 0; i < 5; i++) {
      list.push(
        <TouchableOpacity
          key={i.toString()}
          style={{
            height: 100,
            marginHorizontal: 10,
            borderRadius: 10,
            borderWidth: 0.7,
            borderColor: 'gray',
            marginVertical: 5,
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderRightWidth: 1,
              borderColor: 'lightgray',
              marginHorizontal: 10,
            }}>
            <Image
              style={{height: 80, alignSelf: 'center', width: 90, margin: 5}}
              source={engine1}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{
              marginTop: 10, 
              flex: 1, 
              color: 'gray', 
              fontSize:12, 
              fontFamily:Fonts.PoppinsRegular
            }}>
              BMW is a twin-turbo v8 petrol engine
            </Text>
            <View
              style={{
                justifyContent: 'space-around',
                paddingRight: 10,
                marginVertical: 10,
              }}>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
              <Text style={{color: 'gray', alignSelf: 'flex-end', fontFamily:Fonts.PoppinsRegular, fontSize:12, marginVertical:-5}}>
                Store name
              </Text>
              <Text style={{color: 'gray', alignSelf: 'flex-end', fontFamily:Fonts.PoppinsRegular, fontSize:12}}>
                free delivery
              </Text>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  alignSelf: 'flex-end',
                }}
                source={heartIconWishlist}
              />
            </View>
          </View>
        </TouchableOpacity>,
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
        {/* <View style={styles.topChildContainer}>
          <TouchableOpacity 
          onPress={() => this.props.navigation.goBack()}
          style={commonStyles.backIconContainer}>
            <Image style={[styles.BackIcon, commonStyles.backIconSize]} source={BackIcon} />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 18, fontFamily:Fonts.PoppinsRegular}}>Wish List</Text>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('User_Notification')}
          style={styles.backIconContainer}>
            <Image style={styles.NotificationIcon} source={notificationIcon} />
          </TouchableOpacity>
        </View> */}
        <TopBar 
          title={'Wish List'}
          navigation={this.props.navigation}
        />
        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          {list}
        </ScrollView>

        <BottomNavBar navigation={this.props.navigation} plusButton={true}/>
      </View>
    );
  }
}

export default WishList;
