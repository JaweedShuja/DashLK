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
import StarIcon from '../../../images/starIcon.png';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import { Fonts } from '../../../utils/fonts';
import commonStyles from '../../../utils/commonStyles';

class CreatePassword extends Component {
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
        <TopBar 
            title={'Forgot password'}
            navigation={this.props.navigation}
        />
        {/* <View
          style={{
            height: 50,
            marginBottom: 5,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.themeBlue,
            padding: 5,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              height: 45,
              width: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                tintColor: 'white',
              }}
              source={BackIcon}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white'}}>Forgot password</Text>
          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}></Text>
          </TouchableOpacity>
        </View> */}

        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 30,
            color: Colors.themeBlue,
            marginLeft: 30,
            marginTop: 30,
          }}>
          Create a new password
        </Text>

        <TextInput
          placeholder={'New password'}
          style={{
            marginHorizontal: 30,
            borderBottomWidth: 0.7,
            borderColor: Colors.gray,
            marginTop: 30,
            marginHorizontal: 30,
            paddingVertical: 5,
            fontSize:16,
            fontFamily:Fonts.PoppinsLight
          }}
        />

        <TextInput
          placeholder={'Confirm password'}
          style={{
            marginHorizontal: 30,
            borderBottomWidth: 0.7,
            borderColor: Colors.gray,
            marginTop: 30,
            marginHorizontal: 30,
            paddingVertical: 5,
            fontSize:16,
            fontFamily:Fonts.PoppinsLight
          }}
        />

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_Dashboard')}
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
          <Text style={{fontSize: 18, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Create</Text>
        </TouchableOpacity>

        {/* <BottomNavBar plusButton={'true'} /> */}
      </View>
    );
  }
}

export default CreatePassword;
