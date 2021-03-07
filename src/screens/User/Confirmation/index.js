import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import styles from './style';
import BackIcon from '../../../images/backIcon.png';
import {Colors} from '../../../utils/colors';
import BottomNavBar from '../../../components/BottomNavBar';
import DustbinIcon from '../../../images/dustbinIcon.png';
import Engine from '../../../images/engine.png';
import AppBar from '../../../components/AppBar';
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import commonStyles from '../../../utils/commonStyles';
import Button from '../../../components/Button';

class Confirmation extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={Colors.themeBlue} /> */}
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
        />
        {/* <AppBar 
            title={'Confirmation'}
            navigation={this.props.navigation}
        /> */}
        <TopBar 
          title={'Confirmation'}
          navigation={this.props.navigation}
        />
       

        <Text style={{fontSize: 18, marginLeft: 20, marginTop: 20, fontFamily:Fonts.PoppinsRegular}}>
          Hello There,
        </Text>
        <Text style={{fontSize: 18, marginLeft: 20, fontFamily:Fonts.PoppinsRegular}}>
          We have sent you a verification code
        </Text>

        <View
          style={{
            height: 200,
            marginHorizontal: 10,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: '#E8E8E8',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              color: 'gray',
              marginTop: 20, fontFamily:Fonts.PoppinsRegular
            }}>
            Check your registered email address
          </Text>
          <Text style={{alignSelf: 'center', fontSize: 16, color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
            and enter the 5 digit code
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginHorizontal: 50,
            }}>
            <View
              style={[{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                
                borderRadius:5,
              }, commonStyles.shadow]}></View>
            <View
              style={[{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                
                borderRadius:5,
              }, commonStyles.shadow]}></View>
            <View
              style={[{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                
                borderRadius:5,
              }, commonStyles.shadow]}></View>
            <View
              style={[{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                
                borderRadius:5,
              }, commonStyles.shadow]}></View>
            <View
              style={[{
                height: 40,
                width: 40,
                backgroundColor: 'white',
                borderRadius:5,
              }, commonStyles.shadow]}></View>
          </View>

              
            <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}}>
              <Text style={{fontSize: 16, color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular}}>
                Resend Code
              </Text>
            </TouchableOpacity>

            


        </View>

            <Button 
              marginTop={50}
              fontSize={16}
              title={'Confirm'}
              onPress={() => {
                this.props.navigation.navigate('User_CreatePassword')
              }}
            />

{/* 
        <BottomNavBar 
          plusButton={true}
        /> */}
      </View>
    );
  }
}

export default Confirmation;
