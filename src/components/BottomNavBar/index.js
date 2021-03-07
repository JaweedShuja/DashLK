import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './style';
import {Colors} from '../../utils/colors';
import DashLK from '../../images/Dash.lk.png';
import HomeIcon from '../../images/homeIcon.webp';
import ChatIcon from '../../images/chatIcon.png';
import ProfileIcon from '../../images/profileIcon.png';
import CartIcon from '../../images/cartIcon.png';
import Helper from '../../utils/Helper'

import {
  userIcon,
  homeIcon,
  chatIcon,
  cartIcon,
  bottomBar,
  bottomButton,
  bottomPlusIcon
} from '../../utils/imagePath'
class BottomNavBar extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity 
        onPress={() => {
          this.props.shopcreate
          ?
          this.props.navigation.navigate('Shop_CreateItem')
          :
          {}
        }}
        style={{
          height:55,
          width:55,
          borderRadius:55,
          backgroundColor:Colors.themeBlue,
          position:'absolute',
          zIndex:1,
          alignSelf:'center',
          bottom:40,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <View style={{
            height:45,
            width:45,
            borderRadius:50,
            borderWidth:1,
            borderColor:'white',
            alignItems:'center',
            justifyContent:'center',
          }}>

            <Image 
              source={
                this.props.plusButton ?
                bottomPlusIcon
                :
                bottomButton}
              style={{height:30, width:30}}
            />

          </View>


        </TouchableOpacity>

        <Image 
          style={{width:Helper.screenWidth}}
          source={bottomBar}
        />

        <View style={[styles.bottomTabSide,{
          left:0,
          paddingLeft:20,
          paddingRight:35
        }]}>
          <TouchableOpacity 
           onPress={() => {
            this.props.station
            ?
               this.props.navigation.navigate('Station_Dashboard')
            :
               this.props.shop
               ?
                  this.props.navigation.navigate('Shop_Dashboard')
               : 
                  this.props.navigation.navigate('User_Dashboard')
          }}
          style={styles.bottomTabButton}>
            <Image style={styles.bottomTabImage} source={homeIcon} />
            <Text style={styles.tabText}>
                Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
           onPress={() => {
            this.props.navigation.navigate('User_Chat')
          }}
          style={styles.bottomTabButton}>
            <Image style={styles.bottomTabImage} source={chatIcon} />
            <Text style={styles.tabText}>
                Chat
            </Text>
          </TouchableOpacity>

        </View>
        <View style={[styles.bottomTabSide,{
          right:0,
          paddingLeft:35,
          paddingRight:20
        }]}>

          <TouchableOpacity 
           onPress={() => {
             this.props.station
             ?
                this.props.navigation.navigate('Station_Profile')
             :
                this.props.shop
                ?
                this.props.navigation.navigate('Shop_Profile')
                :
                this.props.navigation.navigate('User_Profile')
          }}
          style={styles.bottomTabButton}>
              <Image style={styles.bottomTabImage} source={userIcon} />
              <Text style={styles.tabText}>
                Profile
              </Text>
          </TouchableOpacity>

          <TouchableOpacity 
           onPress={() => {
            this.props.navigation.navigate('User_Cart')
          }}
          style={styles.bottomTabButton}>
              <Image style={styles.bottomTabImage} source={cartIcon} />
              <Text style={styles.tabText}>
                Cart
              </Text>
          </TouchableOpacity>

        </View>
        
      </View>
    );
  }
}

export default BottomNavBar;
