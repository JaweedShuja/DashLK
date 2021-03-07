import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Modal,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import PhoneIcon from '../../../images/phoneIcon.png';
import Engine from '../../../images/engine.png';
import MoreIcon from '../../../images/moreIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import CancelOrderModal from '../../../components/CancelOrderModal';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'
import { Fonts } from '../../../utils/fonts';

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }
  setModalVisible() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
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
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible()}>
          <CancelOrderModal
            setModalVisible={this.setModalVisible}
            navigation={this.props.navigation}
            confirm={() => {
              this.setModalVisible();
              this.props.navigation.navigate('User_CancelOrder');
            }}
          />
        </Modal>

        {/* <View style={styles.topChildContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backIconContainer}>
            <Image style={styles.BackIcon} source={BackIcon} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
            }}>
            Order Details
          </Text>
          <TouchableOpacity style={styles.backIconContainer}>
            <Image style={styles.NotificationIcon} source={NotificationIcon} />
          </TouchableOpacity>
        </View> */}
        <TopBar 
          title={'Order Details'}
          navigation={this.props.navigation}
        />
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <Text style={{margin: 10, fontFamily:Fonts.PoppinsRegular}}>
            <Text style={{color: 'gray'}}>Status: </Text>
            <Text style={{color: Colors.themeBlue}}>
              Dash team is processing your order
            </Text>
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{marginLeft: 10,fontFamily:Fonts.PoppinsRegular}}>
              <Text style={{color: 'gray'}}>Order Date: 2020-10-10 03:20</Text>
              <Text style={{color: 'gray'}}>Order ID: #D020033555</Text>
            </View>

            <View
              style={{
                height: 40,
                backgroundColor: Colors.themeGreen,
                width: 110,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: 'white',
                  borderRadius: 35,
                  marginLeft: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image style={{height: 20, width: 20}} source={PhoneIcon} />
              </View>
              <View style={{marginLeft: 5}}>
                <Text
                  style={{color: 'white', fontSize: 12, fontWeight: 'bold',fontFamily:Fonts.PoppinsRegular}}>
                  LIVE CHAT
                </Text>
                <Text style={{color: 'white', fontSize: 8,fontFamily:Fonts.PoppinsRegular}}>0112 333 455</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => this.setModalVisible()}
            style={{
              height: 50,
              width: 160,
              backgroundColor: Colors.themeBlue,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              alignSelf: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
              marginTop: 20,
            }}>
            <Text style={{color: 'white', fontSize: 18,fontFamily:Fonts.PoppinsRegular}}>Cancel order</Text>
          </TouchableOpacity>

          <View
            style={{
              height: 1,
              backgroundColor: 'lightgray',
              marginTop: 10,
            }}></View>

          <Text
            style={{
              fontSize: 18,
              color: 'gray',
              marginLeft: 10,
              marginTop: 10,
              fontFamily:Fonts.PoppinsRegular
            }}>
            Delivery Details:
          </Text>
          <View
            style={{
              // height: 200,
              paddingBottom: 10,
              marginHorizontal: 15,
              borderRadius: 15,
              backgroundColor: Colors.whitesmoke,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: Colors.themeBlue,
                  marginLeft: 10,
                  marginTop: 10,
                  fontFamily:Fonts.PoppinsRegular
                }}>
                Deliver to:
              </Text>
              <View
                style={{
                  marginHorizontal: 100,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'gray',
                    fontFamily:Fonts.PoppinsRegular
                  }}>
                  Damith Hemachandra 80/3, Nisala uyana, Ilukwaththa
                  Pilimathalawa. 0712003005
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: Colors.themeBlue,
                  marginLeft: 10,
                  marginTop: 10,
                  fontFamily:Fonts.PoppinsRegular
                }}>
                Paid with:
              </Text>
              <View
                style={{
                  marginHorizontal: 100,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'gray',
                    fontFamily:Fonts.PoppinsRegular
                  }}>
                  Paypal x-4335
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: 'lightgray',
              marginTop: 10,
            }}></View>

          <Text style={{margin: 10,fontFamily:Fonts.PoppinsRegular}}>
            <Text>Seller: </Text>
            <Text style={{color: Colors.themeGreen}}> Store00200</Text>
          </Text>

          <View
            style={{
              height: 150,
              marginHorizontal: 15,
              borderRadius: 10,
              borderWidth: 0.7,
              margin: 5,
            }}>
            <View style={{margin: 10}}>
              <Text style={{fontSize: 10, color: 'gray',fontFamily:Fonts.PoppinsRegular}}>
                Order Date 2020-10-10 03:20
              </Text>
              <Text style={{fontSize: 10, color: 'gray',fontFamily:Fonts.PoppinsRegular}}>
                Order ID: #D020033555
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Image
                source={Engine}
                style={{
                  height: 80,
                  width: 90,
                }}
              />
              <View>
                <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>BMW N63 is a twin-turbo</Text>
                <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>V8 petrol engine</Text>
                <Text style={{fontSize: 12, color: 'lightgray',fontFamily:Fonts.PoppinsRegular}}>Qty: 134</Text>
                <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
              </View>
              <Image
                source={MoreIcon}
                style={{
                  height: 15,
                  width: 15,
                }}
              />
            </View>
          </View>

          <View
            style={{
              height: 130,
              backgroundColor: Colors.whitesmoke,
              marginTop: 20,
              paddingBottom: 10,
            }}>
            <Text style={{margin: 10, fontSize: 16,fontFamily:Fonts.PoppinsRegular}}>
              Order Summary (1 item)
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>Total:</Text>
              <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>LKR 450,000</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginTop: 5,
              }}>
              <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>Coupon code:</Text>
              <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>CX002</Text>
              <Text style={{color: 'gray',fontFamily:Fonts.PoppinsRegular}}>LKR -25,000</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
              }}>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>Total:</Text>
              <Text style={{fontFamily:Fonts.PoppinsRegular}}>LKR 425,000</Text>
            </View>
          </View>
        </ScrollView>
        <BottomNavBar navigation={this.props.navigation} plusButton={true}/>
      </View>
    );
  }
}

export default OrderDetails;
