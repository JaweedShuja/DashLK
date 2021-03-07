import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './style';
import BottomNavBar from '../../../components/BottomNavBar';
import SettingsIcon from '../../../images/settingsIcon.png';
import BackIcon from '../../../images/backIcon.png';
import {Colors} from '../../../utils/colors';
import engine from '../../../images/engine.png';
import {
  engine1,
  engine2,
  settingsIcon,
  homeIconprofile,
  userIconProfile,
  garageIcon,
  pendingIcon,
  deliveredIcon,
  reviewedIcon,
  detailsIcon,
  couponIcon,
  wishlistIocn,
} from '../../../utils/imagePath'
import {Fonts} from '../../../utils/fonts'
import commonStyles from '../../../utils/commonStyles'

import shopIcon from '../../../images/shopIcon.png';
import UserIcon from '../../../images/userIcon.png';
// import garageIcon from '../../../images/garageIcon.png';

import FactoryIcon from '../../../images/factoryIcon.png';
import DeliveryIcon from '../../../images/deliveryIcon.png';
import ReviewIcon from '../../../images/reviewIcon.png';

import DeliveryBoxIcon from '../../../images/deliveryBoxIcon.png';
import CouponIcon from '../../../images/couponIcon.png';
import HeartIcon from '../../../images/heartIcon.png';
import MyStatusBar from '../../../components/StatusBar'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engines: [
        {id: '1', name: 'OE replacement', price: '450,000', sold: '14'},
        {id: '2', name: 'OE replacement', price: '450,000', sold: '14'},
        {id: '3', name: 'OE replacement', price: '450,000', sold: '14'},
        {id: '4', name: 'OE replacement', price: '450,000', sold: '14'},
        {id: '5', name: 'OE replacement', price: '450,000', sold: '14'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={Colors.themeBlue} />
         */}
         <MyStatusBar 
            backgroundColor={Colors.themeBlue}
         />
        <View
          style={{
            height: 100,
            backgroundColor: Colors.themeBlue,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <View style={styles.topChildContainer}>
            <TouchableOpacity
            //yaha
              onPress={() => this.props.navigation.goBack()}
              style={commonStyles.backIconContainer}>
              <Image style={[commonStyles.backIconSize, {tintColor:'white'}]} source={BackIcon} />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily:Fonts.PoppinsRegular,
                color: 'white',
                fontSize: 20,
              }}>
              Profile
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('User_Settings')}
              style={styles.backIconContainer}>
              <Image style={styles.NotificationIcon} source={settingsIcon} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginHorizontal: 20,
              // marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                evaluation: 2,
              }}
              onPress={() => {
                this.props.navigation.navigate('Shop_StoreRegisteration')
              }}
              >
              <Image style={styles.topOptionIcon} source={homeIconprofile} />
            </TouchableOpacity>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
                evaluation: 2,
              }}>
              <Image
                style={{height: 50, width: 50, tintColor: 'white'}}
                source={userIconProfile}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily:Fonts.PoppinsRegular
                }}>
                Damith
              </Text>
            </View>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Station_SignUp')}
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: 'gray',
                alignItems: 'center',
                justifyContent: 'center',
                evaluation: 2,
              }}>
              <Image style={styles.topOptionIcon} source={garageIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 50,
          }}></View>
        <ScrollView
          contentContainerStyle={{marginTop:20}}
        >
          <View
            style={{
              height: 130,
              marginHorizontal: 20,
              borderRadius: 10,
              backgroundColor: 'whitesmoke',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                marginHorizontal: 10,
              }}>
              <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsRegular}}>Order</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('User_Orders')}
              >
                <Text style={{fontFamily:Fonts.PoppinsRegular}}>View all</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 15,
              }}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('User_ToBeDelivered')
                }
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={reviewedIcon} style={styles.orderSectionIcons} />
                <Text style={{
                  color: '#646464', 
                fontSize: 12,
                fontFamily:Fonts.PoppinsRegular
                }}>
                  To be delivered
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('User_Delivered')}
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={deliveredIcon} style={styles.orderSectionIcons} />
                <Text style={{color: '#646464', fontSize: 12,fontFamily:Fonts.PoppinsRegular}}>Delivered</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('User_ToBeReviewed')
                }
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={pendingIcon} style={styles.orderSectionIcons} />
                <Text style={{color: '#646464', fontSize: 12,fontFamily:Fonts.PoppinsRegular}}>
                  To be reviewed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 130,
              marginHorizontal: 20,
              borderRadius: 10,
              borderWidth: 0.7,
              borderColor: 'gray',
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('User_DeliveryDetails')
                }
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                  // backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image style={styles.optionIcon} source={couponIcon} />
              </TouchableOpacity>
              <Text style={{fontFamily:Fonts.PoppinsRegular, fontSize:12}}>My delivery details</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('User_CouponsAvailable')
                }
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                  // backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image style={styles.optionIcon} source={detailsIcon} />
              </TouchableOpacity>
              <Text style={{fontFamily:Fonts.PoppinsRegular, fontSize:12}}>My coupons</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('User_WishList')}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 100,
                  // backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image style={styles.optionIcon} source={wishlistIocn} />
              </TouchableOpacity>
              <Text style={{fontFamily:Fonts.PoppinsRegular, fontSize:12}}>Wish list</Text>
            </View>
          </View>

          <View
            style={{
              height: 175,
              backgroundColor: Colors.themeBlue,
              marginTop: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily:Fonts.PoppinsRegular
                }}>
                Recently Viewed Items
              </Text>
              <Text
                style={{
                  color: 'whitesmoke',
                  fontFamily:Fonts.PoppinsRegular
                }}>
                View more
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: Colors.themeGreen,
                marginHorizontal: 5,
                marginBottom:10,
                borderRadius: 10,
                paddingHorizontal:5,
              }}>
              <FlatList
                horizontal
                data={this.state.engines}
                keyExtracter={item => item.id.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      height: '90%',
                      width: 100,
                      backgroundColor: 'white',
                      borderRadius: 5,
                      margin: 5,
                    }}>
                   <View >
                   <Image
                      style={{
                        height: 60,
                        width: 80,
                        alignSelf: 'center',
                        marginTop: 5,
                      }}
                      source={engine1}
                    />
                   </View>
                    <View style={{
                      paddingHorizontal:5,
                      marginTop:10
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 10,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        marginVertical:-5,
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'LKR ' + item.price}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          color: 'gray',
                          fontSize: 10,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {item.sold + ' Sold'}
                      </Text>

                      <TouchableOpacity style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            height: 5,
                            width: 5,
                            backgroundColor: 'gray',
                            borderRadius: 5,
                          }}></View>
                        <View
                          style={{
                            height: 5,
                            width: 5,
                            backgroundColor: 'gray',
                            borderRadius: 5,
                            marginLeft: 2,
                          }}></View>
                        <View
                          style={{
                            height: 5,
                            width: 5,
                            backgroundColor: 'gray',
                            borderRadius: 5,
                            marginLeft: 2,
                          }}></View>
                      </TouchableOpacity>
                    </View>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>

          <View
            style={{
              height: 175,
              backgroundColor: Colors.themeBlue,
              marginTop: 30,
              marginBottom: 100,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
                marginHorizontal: 10,
              }}>
              {/* <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Top Selling Items
              </Text>
              <Text
                style={{
                  color: 'white',
                }}>
                View more
              </Text> */}
              <Text
                style={{
                  color: 'white',
                  fontFamily:Fonts.PoppinsRegular
                }}>
                Top Selling Items
              </Text>
              <Text
                style={{
                  color: 'whitesmoke',
                  fontFamily:Fonts.PoppinsRegular
                }}>
                View more
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: Colors.themeGreen,
                marginHorizontal: 5,
                marginBottom:10,
                borderRadius: 10,
                paddingHorizontal:5,
              }}>
              <FlatList
                horizontal
                data={this.state.engines}
                keyExtracter={item => item.id.toString()}
                renderItem={({item}) => (
                  <View
                  style={{
                    height: '90%',
                    width: 100,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    margin: 5,
                  }}>
                 <View >
                 <Image
                    style={{
                      height: 60,
                      width: 80,
                      alignSelf: 'center',
                      marginTop: 5,
                    }}
                    source={engine2}
                  />
                 </View>
                  <View style={{
                    paddingHorizontal:5,
                    marginTop:10
                    // alignSelf:'bottom'
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 10,
                      
                      fontFamily:Fonts.PoppinsRegular
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      marginVertical:-5,
                      fontFamily:Fonts.PoppinsRegular
                    }}>
                    {'LKR ' + item.price}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 10,
                        fontFamily:Fonts.PoppinsRegular,
                        alignSelf: 'center',
                      }}>
                      {item.sold + ' Sold'}
                    </Text>

                    <TouchableOpacity style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          height: 5,
                          width: 5,
                          backgroundColor: 'gray',
                          borderRadius: 5,
                        }}></View>
                      <View
                        style={{
                          height: 5,
                          width: 5,
                          backgroundColor: 'gray',
                          borderRadius: 5,
                          marginLeft: 2,
                        }}></View>
                      <View
                        style={{
                          height: 5,
                          width: 5,
                          backgroundColor: 'gray',
                          borderRadius: 5,
                          marginLeft: 2,
                        }}></View>
                    </TouchableOpacity>
                  </View>
                  </View>
                </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
        <BottomNavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Profile;
