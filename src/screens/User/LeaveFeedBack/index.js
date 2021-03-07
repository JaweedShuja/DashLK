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

class LeaveFeedBack extends Component {
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
          <Text style={{fontSize: 18, color: 'white'}}>Leave feedback</Text>
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
        <TopBar 
          navigation={this.props.navigation}
          title={'Leave feedback'}
        />

        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 30,
            color: Colors.themeBlue,
            alignSelf: 'center',
            marginTop: 10,
            fontFamily:Fonts.PoppinsRegular
          }}>
          Rate your product!
        </Text>

        <View
          style={{
            height: 120,
            borderRadius: 15,
            borderRadius: 15,
            backgroundColor: Colors.whitesmoke,
            marginTop: 20,
            marginHorizontal: 30,
            // flexDirection: 'row',
            justifyContent: 'space-between',
            padding:15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontFamily:Fonts.PoppinsLight}}>Item as described</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontFamily:Fonts.PoppinsLight}}>Value for money</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray', fontFamily:Fonts.PoppinsLight}}>Fast shipping</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
              <Image
                source={StarIcon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: Colors.themeGreen,
                  marginLeft: 5,
                }}
              />
            </View>
          </View>
        </View>

        <TextInput
          
          placeholder={'Additional comment'}
          style={{
            height: 120,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: 'lightgray',
            marginTop: 20,
            marginHorizontal: 30,
            paddingHorizontal: 10,
            textAlignVertical:'top',
            fontFamily:Fonts.PoppinsRegular,
            padding:10,
            textAlignVertical:'top'
          }}
        />

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('User_OrderRatedConfirmation')}
          style={[{
            height: 45,
            width: 220,
            backgroundColor: Colors.themeBlue,
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 30,
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
          <Text style={{fontSize: 18, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Leave feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_Dashboard')}
          style={{
            height: 45,
            width: 220,
            backgroundColor: Colors.themeGreen,
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Later</Text>
        </TouchableOpacity>

        <BottomNavBar navigation={this.props.navigation} plusButton={true}/>
      </View>
    );
  }
}

export default LeaveFeedBack;
