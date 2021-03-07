import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import TopBar from '../../../components/TopBar';
import PhoneIcon from '../../../images/phoneIcon.png';
import Engine from '../../../images/engine.png';
import ShopIcon from '../../../images/shopIcon.png';
import HeartIcon from '../../../images/heartIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import ItemsList from '../../../components/ItemsList';
import MyStatusBar from '../../../components/StatusBar'
import { Fonts } from '../../../utils/fonts';

export default class ProductDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyStatusBar backgroundColor={Colors.themeBlue}/>
          <View style={{
              backgroundColor: Colors.themeBlue,
              height: 70,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <TopBar navigation={this.props.navigation} />
          </View>
        <ScrollView contentContainerStyle={{paddingBottom:50}}>
          
          

          <Text style={{color: Colors.themeGreen, margin: 10, fontFamily:Fonts.PoppinsRegular}}>Store00200</Text>
          <Text style={{fontSize: 18, marginHorizontal: 10, fontFamily:Fonts.PoppinsRegular}}>
            BMW 2018 N63 twin-turbo V8 petrol engine
          </Text>

          <Text style={{marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>
            <Text style={{color: Colors.themeGreen, fontSize: 20}}>★★★★</Text>
            <Text style={{color: 'gray', fontSize: 20}}>★</Text>
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: Colors.themeBlue,
                width: 100,
                marginLeft: 10,
                marginTop: 10,
                padding: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize:12, fontFamily:Fonts.PoppinsLight}}>
                <Text style={{color: 'white'}}>Dash's</Text>
                <Text style={{color: Colors.themeGreen}}> Choice</Text>
              </Text>
            </View>

            <View
              style={{
                height: 40,
                width: 120,
                backgroundColor: Colors.themeGreen,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 33,
                  width: 33,
                  borderRadius: 35,
                  backgroundColor: 'white',
                  marginLeft: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={PhoneIcon} style={{height: 15, width: 15}} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text style={{color: 'white', fontSize: 12, fontFamily:Fonts.PoppinsRegular}}>LIVE CHAT</Text>
                <Text style={{color: 'white', fontSize: 10, fontFamily:Fonts.PoppinsRegular}}>
                  011 2 333 455
                </Text>
              </View>
            </View>
          </View>

          <Image
            source={Engine}
            style={{
              height: 200,
              width: 230,
              alignSelf: 'center',
              marginTop: 20,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Text style={{fontSize: 20, fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={ShopIcon}
                style={{height: 25, width: 25, tintColor: Colors.themeGreen}}
              />
              <Image
                source={HeartIcon}
                style={{
                  height: 25,
                  width: 25,
                  marginLeft: 10,
                  tintColor: Colors.themeGreen,
                }}
              />
            </View>
          </View>

          <View
            style={{
              height: 50,
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: 'whitesmoke',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'gray', marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>Part</Text>
            <Text style={{fontSize: 16, marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>Engine</Text>
          </View>

          <View
            style={{
              height: 50,
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: 'whitesmoke',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'gray', marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>Brand</Text>
            <Text style={{fontSize: 16, marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>BMW</Text>
          </View>

          <View
            style={{
              height: 50,
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: 'whitesmoke',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'gray', marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>Model</Text>
            <Text style={{fontSize: 16, marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>6 Series</Text>
          </View>

          <View
            style={{
              height: 50,
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: 'whitesmoke',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'gray', marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>Edition</Text>
            <Text style={{fontSize: 16, marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>E02</Text>
          </View>

          <View style={{height: 20}}></View>
          <ItemsList />

          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              color: Colors.themeGreen,
              marginTop: 10,
              fontFamily:Fonts.PoppinsBold
            }}>
            Customer reviews
          </Text>
          <View
            style={{
              height: 150,
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: Colors.themeGreen,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 30,
                  marginTop: 10,
                  color: 'white',
                   fontFamily:Fonts.PoppinsBold
                }}>
                4.9
              </Text>
              <View
                style={{
                  padding: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  alignSelf: 'center',
                  backgroundColor: 'white',
                }}>
                <Text style={{marginLeft: 5, fontFamily:Fonts.PoppinsRegular}}>
                  <Text style={{color: Colors.themeGreen, fontSize: 16}}>
                    ★★★★
                  </Text>
                  <Text style={{color: 'gray', fontSize: 16}}>★</Text>
                </Text>
              </View>

              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 16,
                  marginTop: 10,
                  color: 'white',
                  fontFamily:Fonts.PoppinsRegular
                }}>
                88 Ratings
              </Text>
            </View>
            <View
              style={{
                flex: 2,
                margin: 5,
                backgroundColor: 'white',
                borderRadius: 10,
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular, fontSize:12}}>
                  Item as described
                </Text>

                <Text style={{marginLeft: 5, fontFamily:Fonts.PoppinsRegular, fontSize:12}}>
                  <Text style={{color: Colors.themeGreen,}}>
                    ★★★★
                  </Text>
                  <Text style={{color: 'gray',}}>★</Text>
                </Text>

                <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular, marginLeft:5, fontSize:12}}>4.9</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular, fontSize:12}}>Value for money</Text>

                <Text style={{marginLeft: 5, fontFamily:Fonts.PoppinsRegular, fontSize:12}}>
                  <Text style={{color: Colors.themeGreen}}>
                    ★★★★
                  </Text>
                  <Text style={{color: 'gray'}}>★</Text>
                </Text>

                <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular, fontSize:12, marginLeft:10}}>4.9</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: 10,
                }}>
                <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular,fontSize:12}}>Fast shipping</Text>

                <Text style={{marginLeft: 5, fontFamily:Fonts.PoppinsRegular, fontSize:12}}>
                  <Text style={{color: Colors.themeGreen}}>
                    ★★★★
                  </Text>
                  <Text style={{color: 'gray'}}>★</Text>
                </Text>

                <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular, fontSize:12, marginLeft:10}}>4.9</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              // height: 50,
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: 'whitesmoke',
              justifyContent: 'center',
              padding:10
            }}>
            <View
              style={{
                marginHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: Colors.themeGreen, fontFamily:Fonts.PoppinsRegular}}>David</Text>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>Sep 30</Text>
            </View>
            <Text style={{marginLeft: 10, fontFamily:Fonts.PoppinsRegular}}>
              <Text style={{color: Colors.themeGreen, fontSize: 20}}>★★★★</Text>
              <Text style={{color: 'gray', fontSize: 20}}>★</Text>
            </Text>
            <Text style={{margin: 10, color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>

          <View style={{height: 20}}></View>

          <ItemsList />

          <View style={{height: 100}}></View>
        </ScrollView>
        <TouchableOpacity
            style={{
              height: 45,
              width: 120,
              backgroundColor: Colors.themeBlue,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
              position:'absolute',
              bottom:80
            }}>
            <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular, }}>Add To Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User_Checkout')}
            style={{
              height: 45,
              width: 120,
              backgroundColor: Colors.themeGreen,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              position:'absolute',
              bottom:80,
              right:0
            }}>
            <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular, }}>Buy Now</Text>
          </TouchableOpacity>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 80,
            paddingTop: 10,
          }}>
          <TouchableOpacity
            style={{
              height: 45,
              width: 100,
              backgroundColor: Colors.themeBlue,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular, fontSize:12}}>Add To Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User_Checkout')}
            style={{
              height: 45,
              width: 100,
              backgroundColor: Colors.themeGreen,
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
            }}>
            <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular, fontSize:12}}>Buy Now</Text>
          </TouchableOpacity>
        </View> */}
        <BottomNavBar navigation={this.props.navigation}/>
      </View>
    );
  }
}
