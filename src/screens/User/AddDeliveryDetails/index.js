import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import AppBar from '../../../components/AppBar'
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import commonStyles from '../../../utils/commonStyles';

class AddDeliveryDetails extends Component {
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
        {/* <AppBar 
          title={'Delivery Details'}
          navigation={this.props.navigation}
        /> */}
        <TopBar 
            title={'Delivery Details'}
            navigation={this.props.navigation}
        />
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <View
            style={{
              marginLeft: 50,
              marginRight: 10,
              borderRadius: 20,
              marginTop:10,
              backgroundColor: '#E8E8E8',
              paddingVertical: 10,
            }}>
            <TextInput
              placeholder={'Contact Name'}
              style={{
                borderBottomWidth: 1,
                fontFamily:Fonts.PoppinsLight,
                borderBottomColor: '#D0D0D0',
                marginHorizontal: 20,
                height:40,
                paddingVertical:5,
                fontSize: 16,
              }}
            />
            <TextInput
              placeholder={'Mobile Number'}
              style={{
                borderBottomWidth: 1,
                fontFamily:Fonts.PoppinsLight,
                borderBottomColor: '#D0D0D0',
                marginHorizontal: 20,
                height:40,
                paddingVertical:5,
                fontSize: 16,
                marginTop:5,
              }}
            />
          </View>

          <View
            style={{
              borderRadius: 20,
              marginLeft: 50,
              marginRight: 10,
              marginTop: 10,
              backgroundColor: '#E8E8E8',
              paddingVertical: 10,
            }}>
            <TextInput
              placeholder={'Address line 1'}
              style={{
                borderBottomWidth: 1,
                fontFamily:Fonts.PoppinsLight,
                borderBottomColor: '#D0D0D0',
                marginHorizontal: 20,
                height:40,
                paddingVertical:5,
                fontSize: 16,
              }}
            />
            <TextInput
              placeholder={'Address line 2'}
              style={{
                borderBottomWidth: 1,
                fontFamily:Fonts.PoppinsLight,
                borderBottomColor: '#D0D0D0',
                marginHorizontal: 20,
                height:40,
                paddingVertical:5,
                fontSize: 16,
                marginTop:5,
              }}
            />
            <TextInput
              placeholder={'Province'}
              style={{
                borderBottomWidth: 1,
                fontFamily:Fonts.PoppinsLight,
                borderBottomColor: '#D0D0D0',
                marginHorizontal: 20,
                height:40,
                paddingVertical:5,
                fontSize: 16,
                marginTop:5,
              }}
            />
            <TextInput
              placeholder={'City'}
              style={{
                borderBottomWidth: 1,
                fontFamily:Fonts.PoppinsLight,
                borderBottomColor: '#D0D0D0',
                marginHorizontal: 20,
                height:40,
                paddingVertical:5,
                fontSize: 16,
                marginTop:5,
              }}
            />
            <TextInput
              placeholder={'Zip Code'}
              style={{
                borderBottomWidth: 1,
                fontFamily:Fonts.PoppinsLight,
                borderBottomColor: '#D0D0D0',
                marginHorizontal: 20,
                height:40,
                paddingVertical:5,
                fontSize: 16,
                marginTop:5,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={[{
              height: 45,
              width: 200,
              backgroundColor: Colors.themeBlue,
              borderRadius: 30,
              alignSelf: 'center',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }, commonStyles.shadow]}>
            <Text style={{fontSize: 18, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Save</Text>
          </TouchableOpacity>

          <View
            style={{
              position: 'absolute',
              left: 10,
              top: 30,
              height: 250,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                height: 22,
                width: 22,
                borderRadius: 22,
                borderWidth: 1,
                borderColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 13,
                  width: 13,
                  backgroundColor: Colors.themeGreen,
                  borderRadius: 20,
                }}></View>
            </View>
            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>
            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>

            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>

            <View
              style={{
                height: 7,
                width: 7,
                backgroundColor: 'gray',
                borderRadius: 10,
              }}></View>

            <View
              style={{
                height: 22,
                width: 22,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 22,
              }}></View>
          </View>
        </ScrollView>
        <BottomNavBar navigation={this.props.navigation} plusButton={true} />
      </View>
    );
  }
}

export default AddDeliveryDetails;
