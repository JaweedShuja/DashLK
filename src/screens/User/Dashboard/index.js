import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import {Fonts} from '../../../utils/fonts';
import BottomNavBar from '../../../components/BottomNavBar';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import Banner1 from '../../../images/Banner1.png';
import engine from '../../../images/engine.png';
import commonStyle from '../../../utils/commonStyles'
import MyStatusBar from '../../../components/StatusBar'
// import MoreIcon from '../../images/moreIcon.webp';
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

class Dashboard extends Component {
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
        {/* <StatusBar
          backgroundColor={Colors.themeBlue}
          barStyle={'light-content'}
        /> */}

        <MyStatusBar 
          
          backgroundColor={Colors.themeBlue}
        />
        <View style={styles.topContainer}>
          <View style={styles.topChildContainer}>
            <TouchableOpacity style={commonStyle.backIconContainer}>
              <Image style={[styles.BackIcon, commonStyle.backIconSize]} source={backIcon} />
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('User_FindResult')}
              style={styles.inputContainer}>
             
              <Image 
                style={styles.searchIcon}
                source={searchIcon}
              />
              <Text style={styles.searchText}>
                Search keyword, category, brand or part
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {this.props.navigation.navigate('User_Notification')}}
            style={styles.backIconContainer}>
              <Image
                style={styles.NotificationIcon}
                source={notificationIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.topContainerCard}>
            
            <View style={styles.whiteDotContainer}>
                <View style={styles.whiteDot}>

                </View>
                <View style={styles.whiteDot}>

                </View>
                <View style={styles.whiteDot}>

                </View>
                <View style={styles.whiteDot}>

                </View>
                <View style={styles.whiteDot}>

                </View>
                <View style={styles.whiteDot}>

                </View>

                </View>  
            <Image style={styles.Banner1} source={Banner1} />
          </View>
        </View>
        <View
          style={{
            height: 60,
          }}></View>
        <ScrollView contentContainerStyle={{paddingTop: 20}}>
          <View
            style={{
              height: 175,
              backgroundColor: Colors.themeBlue,
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
                Recently Viewed Items
              </Text>
              <Text
                style={{
                  color: 'whitesmoke',
                  fontFamily:Fonts.PoppinsRegular,
                }}>
                View more
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: Colors.themeGreen,
                marginHorizontal: 5,
                // marginVertical: 10,
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
              marginTop: 20,
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
                Top Selling Items
              </Text>
              <Text
                style={{
                  color: 'whitesmoke',
                  fontFamily:Fonts.PoppinsRegular,
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
          {/* third */}
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
                Dash Love
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

export default Dashboard;
