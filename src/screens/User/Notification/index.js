import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import styles from './style';
import BackIcon from '../../../images/backIcon.png';
import {Colors} from '../../../utils/colors';
import BottomNavBar from '../../../components/BottomNavBar';
import DustbinIcon from '../../../images/dustbinIcon.png';
import {
  binIcon
} from '../../../utils/imagePath'
import Engine from '../../../images/engine.png';
import AppBar from '../../../components/AppBar'
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import commonStyles from '../../../utils/commonStyles';

class Notification extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
        />
        
            <TopBar 
              navigation={this.props.navigation}
              title={'Notifications'}
            />
        <View
          style={[{
            height: 80,
            marginHorizontal: 10,
            borderRadius: 15,
            backgroundColor: 'white',
            flexDirection: 'row',
            marginTop: 10,
          }, commonStyles.shadow]}>
          <Image
            style={{height: 50, width: 60, alignSelf: 'center', marginLeft: 10}}
            source={Engine}
          />
          <View style={{alignSelf: 'center', marginLeft: 5}}>
            <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsRegular}}>Your item is on way!</Text>
            <Text style={{fontSize: 12, fontFamily:Fonts.PoppinsLight, color:'gray'}}>
              Est Tuesday, oct 15 - Friday, oct 18
            </Text>
          </View>
          <Text
            style={{
              fontSize: 11,
              alignSelf: 'center',
              marginLeft: 5,
              color: 'gray', fontFamily:Fonts.PoppinsRegular
            }}>
            01:24 PM
          </Text>

          <TouchableOpacity
            style={{
              height: 80,
              width: 50,
              backgroundColor: Colors.themeGreen,
              position: 'absolute',
              right: 0,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 30, width: 30, tintColor: 'white'}}
              source={binIcon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[{
            height: 80,
            marginHorizontal: 10,
            borderRadius: 15,
            backgroundColor: 'white',
            flexDirection: 'row',
            marginTop: 10,
          }, commonStyles.shadow]}>
          <Image
            style={{height: 50, width: 60, alignSelf: 'center', marginLeft: 10}}
            source={Engine}
          />
          <View style={{alignSelf: 'center', marginLeft: 5}}>
            <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsRegular}}>Your item is on way!</Text>
            <Text style={{fontSize: 12, fontFamily:Fonts.PoppinsLight, color:'gray'}}>
              Est Tuesday, oct 15 - Friday, oct 18
            </Text>
          </View>
          <Text
            style={{
              fontSize: 11,
              alignSelf: 'center',
              marginLeft: 5,
              color: 'gray', fontFamily:Fonts.PoppinsRegular
            }}>
            01:24 PM
          </Text>

          <TouchableOpacity
            style={{
              height: 80,
              width: 50,
              backgroundColor: Colors.themeGreen,
              position: 'absolute',
              right: 0,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 30, width: 30, tintColor: 'white'}}
              source={binIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
        }}>
          <View style={{height:1, width:100, backgroundColor:'gray'}}></View>
          <Text style={{fontFamily:Fonts.PoppinsRegular, fontSize:12, color:'gray', margin:5}}>Oct, 14, 10:17PM</Text>
          <View style={{height:1, width:100, backgroundColor:'gray'}}></View>

        </View>
        <View
          style={[{
            height: 80,
            marginHorizontal: 10,
            borderRadius: 15,
            backgroundColor: 'white',
            flexDirection: 'row',
            marginTop: 10,
          }, commonStyles.shadow]}>
          <Image
            style={{height: 50, width: 60, alignSelf: 'center', marginLeft: 10}}
            source={Engine}
          />
          <View style={{alignSelf: 'center', marginLeft: 5}}>
            <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsRegular}}>Your item is on way!</Text>
            <Text style={{fontSize: 12, fontFamily:Fonts.PoppinsLight, color:'gray'}}>
              Est Tuesday, oct 15 - Friday, oct 18
            </Text>
          </View>
          <Text
            style={{
              fontSize: 11,
              alignSelf: 'center',
              marginLeft: 5,
              color: 'gray', fontFamily:Fonts.PoppinsRegular
            }}>
            01:24 PM
          </Text>

          <TouchableOpacity
            style={{
              height: 80,
              width: 50,
              backgroundColor: Colors.themeGreen,
              position: 'absolute',
              right: 0,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 30, width: 30, tintColor: 'white'}}
              source={binIcon}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[{
            height: 80,
            marginHorizontal: 10,
            borderRadius: 15,
            backgroundColor: 'white',
            flexDirection: 'row',
            marginTop: 10,
          }, commonStyles.shadow]}>
          <Image
            style={{height: 50, width: 60, alignSelf: 'center', marginLeft: 10}}
            source={Engine}
          />
          <View style={{alignSelf: 'center', marginLeft: 5}}>
            <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsRegular}}>Your item is on way!</Text>
            <Text style={{fontSize: 12, fontFamily:Fonts.PoppinsLight, color:'gray'}}>
              Est Tuesday, oct 15 - Friday, oct 18
            </Text>
          </View>
          <Text
            style={{
              fontSize: 11,
              alignSelf: 'center',
              marginLeft: 5,
              color: 'gray', fontFamily:Fonts.PoppinsRegular
            }}>
            01:24 PM
          </Text>

          <TouchableOpacity
            style={{
              height: 80,
              width: 50,
              backgroundColor: Colors.themeGreen,
              position: 'absolute',
              right: 0,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 30, width: 30, tintColor: 'white'}}
              source={binIcon}
            />
          </TouchableOpacity>
        </View>
        <BottomNavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Notification;
