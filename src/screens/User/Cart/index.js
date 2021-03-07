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
import BinIcon from '../../../images/binIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
// import TopBar from '../../../components/TopBar';
import CheckIcon from '../../../images/checkIcon.webp';
import Engine from '../../../images/engine.png';
import { Fonts } from '../../../utils/fonts';
import {binIcon2, engine2} from '../../../utils/imagePath'
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithSearchBar'
import * as image from '../../../utils/imagePath'
import commonStyles from '../../../utils/commonStyles';

class Cart extends Component {
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

        {/* <TopBar navigation={this.props.navigation} /> */}
        <TopBar 
            placeholder={'Search keyword, category, brand or part'}
            navigation={this.props.navigation}
        />
        <View
          style={{
            height: 60,
            backgroundColor: Colors.themeBlue,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            marginTop: -5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{
            fontSize: 16, 
            color: 'white',
            fontFamily:Fonts.PoppinsRegular
            }}>Cart (2 items)</Text>
          <Image
            style={{
              position: 'absolute',
              right: 15,
              height: 25,
              width: 25,
              tintColor: 'white',
            }}
            source={binIcon2}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            height: 35,
            backgroundColor: '#E8E8E8',
            borderBottomWidth: 1,
            borderColor: Colors.themeGreen,
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 25,
              backgroundColor: Colors.themeGreen,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            <Image
              style={{
                height: 10,
                width: 10,
                tintColor: 'white',
              }}
              source={CheckIcon}
            />
          </View>

          <Text
            style={{
              fontSize: 16,
              marginLeft: 20,
              color: Colors.themeGreen,
              alignSelf: 'center',
              fontFamily:Fonts.PoppinsLight
            }}>
            Store00200
          </Text>
        </View>
        <View
          style={{
            height: 130,
            backgroundColor: '#E8E8E8',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 25,
              backgroundColor: Colors.themeGreen,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            <Image
              style={{
                height: 10,
                width: 10,
                tintColor: 'white',
              }}
              source={CheckIcon}
            />
          </View>
          <View
            style={{
              marginLeft: 10,
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 90,
                width: 100,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 80,
                  width: 90,
                }}
                source={engine2}
              />
            </View>

            <Text style={{
              fontSize: 12, 
              color: 'gray',
              fontFamily:Fonts.PoppinsLight,
              marginTop:5,
              }}>
              Free delivery
            </Text>
          </View>

          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                marginTop:15,
                fontFamily:Fonts.PoppinsLight
              }}>
              Short Ram Intake Sys...
            </Text>
            <Text
              style={{
                color: Colors.themeBlue,
                fontSize: 16,
                fontFamily:Fonts.PoppinsBold
              }}>
              LKR 25,000
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: 30,
              width: 100,
              position: 'absolute',
              right: 10,
              bottom: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image 
                style={{
                  height:15,
                  width:15,
                }}
                source={image.minusIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontFamily:Fonts.PoppinsLight
              }}>
              1
            </Text>

            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image 
                style={{
                  height:15,
                  width:15,
                  tintColor:'gray'
                }}
                source={image.plusIcon}
              />
            </TouchableOpacity>
          </View>
        </View>


        <View
          style={{
            height: 35,
            backgroundColor: '#E8E8E8',
            borderBottomWidth: 1,
            borderColor: Colors.themeGreen,
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 25,
              borderWidth:1,
              borderColor:'gray',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            
          </View>

          <Text
            style={{
              fontSize: 16,
              marginLeft: 20,
              color: Colors.themeGreen,
              alignSelf: 'center',
              fontFamily:Fonts.PoppinsLight
            }}>
            Store00200
          </Text>
        </View>
        <View
          style={{
            height: 130,
            backgroundColor: '#E8E8E8',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 25,
              borderWidth:1,
              borderColor:'gray',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            
          </View>
          <View
            style={{
              marginLeft: 10,
              alignSelf: 'center',
            }}>
            <View
              style={{
                height: 90,
                width: 100,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 80,
                  width: 90,
                }}
                source={engine2}
              />
            </View>

            <Text style={{
              fontSize: 12, 
              color: 'gray',
              fontFamily:Fonts.PoppinsLight,
              marginTop:5,
              }}>
              Free delivery
            </Text>
          </View>

          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                marginTop:15,
                fontFamily:Fonts.PoppinsLight
              }}>
              Short Ram Intake Sys...
            </Text>
            <Text
              style={{
                color: Colors.themeBlue,
                fontSize: 16,
                fontFamily:Fonts.PoppinsBold
              }}>
              LKR 25,000
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: 30,
              width: 100,
              position: 'absolute',
              right: 10,
              bottom: 10,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* <Text
                style={{
                  fontSize: 20,
                  marginTop:5,
                  color:'gray',
                  fontFamily:Fonts.PoppinsLight
                }}>
                -
              </Text> */}
              <Image 
                style={{
                  height:15,
                  width:15,
                }}
                source={image.minusIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontFamily:Fonts.PoppinsLight
              }}>
              1
            </Text>

            <TouchableOpacity
              style={{
                height: 20,
                width: 20,
                borderRadius: 20,
                backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* <Text
                style={{
                  fontSize: 20,
                  marginTop:5,
                  color:'gray',
                  fontFamily:Fonts.PoppinsLight
                }}>
                +
              </Text> */}
              <Image 
                style={{
                  height:15,
                  width:15,
                  tintColor:Colors.gray
                }}
                source={image.plusIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            height: 50,
            borderTopWidth: 1,
            width: '100%',
            borderColor: Colors.themeGreen,
            position: 'absolute',
            bottom: 100,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingTop: 15,
          }}>
          <Text style={{
            fontSize: 20, 
            color: Colors.themeGreen, 
            fontFamily:Fonts.PoppinsBold,
            
            }}>
            LKR 25,000
          </Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User_PaymentMethod')}
            style={[{
              height: 40,
              width: 180,
              backgroundColor: Colors.themeBlue,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
            },commonStyles.shadow]}>
            <Text style={{
              fontSize: 17,
              marginTop:3, 
              color: 'white', 
              fontFamily:Fonts.PoppinsLight,

              }}>Check out (1)</Text>
          </TouchableOpacity>
        </View>

        <BottomNavBar navigation={this.props.navigation} plusButton={true}/>
      </View>
    );
  }
}

export default Cart;
