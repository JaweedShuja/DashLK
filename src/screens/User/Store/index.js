import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'
import { Fonts } from '../../../utils/fonts';
import {
  notificationIcon, 
  searchIcon, 
  backIcon, 
  engine1,
  engine2,
  vlorIcon,
  seetIcon,
  breakIcon,
  speakerIcon,
  lightIcon,
  tireIcon,
} from '../../../utils/imagePath'

export default class Store extends React.Component {
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
          navigation={this.props.navigation}
          title={'Store200001'}
        />
        {/* <View
          style={{
            height: 45,
            backgroundColor: Colors.themeBlue,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: 0,
            }}>
            <Image
              source={BackIcon}
              style={{
                height: 30,
                width: 30,
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 18, color: 'white'}}>Checkout</Text>
          <TouchableOpacity
            style={{
              height: 45,
              width: 45,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 0,
            }}>
            <Image
              source={NotificationIcon}
              style={{
                height: 20,
                width: 20,
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
        </View> */}
        <View
          style={{
            height: 130,
            backgroundColor: Colors.themeBlue,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>90%</Text>
            </View>
            <View>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular, width:100, textAlign:'center', fontSize:12, marginTop:5}}>On-time Delivery</Text>
            </View>
          </View>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>5.0</Text>
            </View>
            <View>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular, width:80, textAlign:'center', fontSize:12, marginTop:5}}>Positive Rating</Text>
            </View>
          </View>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View
              style={{
                height: 70,
                width: 70,
                borderRadius: 70,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>88</Text>
            </View>
            <View>
              <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular, marginTop:15,}}>Reviews</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          {/* <View
            style={{
              height: 50,
              backgroundColor: Colors.themeBlue,
              marginTop: 10,
            }}></View>
          <View style={{flex: 1, backgroundColor: Colors.themeGreen}}>
            <View
              style={{
                flex: 1,
                backgroundColor: Colors.themeGreen,
                marginHorizontal: 5,
                marginVertical: 10,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    height: 200,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}></View>
                <View
                  style={{
                    height: 250,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}></View>
                <View
                  style={{
                    height: 200,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}></View>
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    height: 250,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}></View>
                <View
                  style={{
                    height: 250,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}></View>
                <View
                  style={{
                    height: 150,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}></View>
              </View>
            </View>
          </View>
          <View
            style={{height: 100, backgroundColor: Colors.themeGreen}}></View> */}
            <View
            style={{
              backgroundColor: Colors.themeBlue,
              marginTop: 20,
              marginBottom: 100,
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
                  fontFamily:Fonts.PoppinsRegular,
                  color: 'white',
                }}>
                
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: Colors.themeGreen,
                marginHorizontal: 5,
                marginVertical: 10,
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    height: 200,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}>
                    <View style={{
                      flex:1,
                      alignItems:'center',
                      justifyContent:'center',
                    }}>
                   <Image
                      style={{
                        height:120,
                        width:120
                      }}
                      source={vlorIcon}
                    />
                   </View>
                    <View style={{
                      height:60,
                      paddingHorizontal:10,
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 12,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'OE replacement'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily:Fonts.PoppinsRegular,
                        marginVertical:-5,
                      }}>
                      {'LKR 135,000'}
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
                          fontSize: 12,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {'16 Sold'}
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
                <View
                  style={{
                    height: 250,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}>
                     <View style={{
                      flex:1,
                      alignItems:'center',
                      justifyContent:'center',
                    }}>
                   <Image
                      style={{
                        height:120,
                        width:120
                      }}
                      source={seetIcon}
                    />
                   </View>
                    <View style={{
                      height:60,
                      paddingHorizontal:10,
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 12,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'OE replacement'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily:Fonts.PoppinsRegular,
                        marginVertical:-5,
                      }}>
                      {'LKR 135,000'}
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
                          fontSize: 12,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {'16 Sold'}
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
                <View
                  style={{
                    height: 200,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}>
                     <View style={{
                      flex:1,
                      alignItems:'center',
                      justifyContent:'center',
                    }}>
                   <Image
                      style={{
                        height:120,
                        width:120
                      }}
                      source={breakIcon}
                    />
                   </View>
                    <View style={{
                      height:60,
                      paddingHorizontal:10,
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 12,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'OE replacement'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily:Fonts.PoppinsRegular,
                        marginVertical:-5,
                      }}>
                      {'LKR 135,000'}
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
                          fontSize: 12,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {'16 Sold'}
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
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    height: 250,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}>

                    <View style={{
                      flex:1,
                      alignItems:'center',
                      justifyContent:'center',
                    }}>
                   <Image
                      style={{
                        height:120,
                        width:120
                      }}
                      source={speakerIcon}
                    />
                   </View>
                    <View style={{
                      height:60,
                      paddingHorizontal:10,
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 12,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'OE replacement'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily:Fonts.PoppinsRegular,
                        marginVertical:-5,
                      }}>
                      {'LKR 135,000'}
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
                          fontSize: 12,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {'16 Sold'}
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
                <View
                  style={{
                    height: 250,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}>

                    <View style={{
                      flex:1,
                      alignItems:'center',
                      justifyContent:'center',
                    }}>
                   <Image
                      style={{
                        height:120,
                        width:120
                      }}
                      source={lightIcon}
                    />
                   </View>
                    <View style={{
                      height:60,
                      paddingHorizontal:10,
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 12,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'OE replacement'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily:Fonts.PoppinsRegular,
                        marginVertical:-5,
                      }}>
                      {'LKR 135,000'}
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
                          fontSize: 12,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {'16 Sold'}
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
                <View
                  style={{
                    height: 150,
                    margin: 10,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}>

                  <View style={{
                      flex:1,
                      alignItems:'center',
                      justifyContent:'center',
                    }}>
                   <Image
                      style={{
                        height:80,
                        width:80
                      }}
                      source={tireIcon}
                    />
                   </View>
                    <View style={{
                      height:60,
                      paddingHorizontal:10,
                      // alignSelf:'bottom'
                    }}>
                    <Text
                      style={{
                        color: 'gray',
                        fontSize: 12,
                        
                        fontFamily:Fonts.PoppinsRegular
                      }}>
                      {'OE replacement'}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily:Fonts.PoppinsRegular,
                        marginVertical:-5,
                      }}>
                      {'LKR 135,000'}
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
                          fontSize: 12,
                          fontFamily:Fonts.PoppinsRegular,
                          alignSelf: 'center',
                        }}>
                        {'16 Sold'}
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
              </View>
            </View>
          </View>
        </ScrollView>

        <BottomNavBar navigation={this.props.navigation}/>
      </View>
    );
  }
}
