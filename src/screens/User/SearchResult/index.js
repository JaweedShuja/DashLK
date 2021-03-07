import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  Switch,
  FlatList,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import BottomNavBar from '../../../components/BottomNavBar';
import Engine from '../../../images/engine.png';
import TopBar from '../../../components/TopBarWithSearchBar'
import MyStatusBar from '../../../components/StatusBar'
import { Fonts } from '../../../utils/fonts';
class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
        {id: '6'},
        {id: '7'},
        {id: '8'},
        {id: '9'},
        {id: '10'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={Colors.themeBlue} /> */}
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
        />
        <View
          style={{
            height: 150,
            backgroundColor: Colors.themeBlue,
          }}>
          {/* <View style={styles.topChildContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={styles.backIconContainer}>
              <Image style={styles.BackIcon} source={BackIcon} />
            </TouchableOpacity>
            <TextInput
              placeholder={'Search keyword, category, brand or part'}
              style={styles.inputContainer}
            />
            <TouchableOpacity style={styles.backIconContainer}>
              <Image
                style={styles.NotificationIcon}
                source={NotificationIcon}
              />
            </TouchableOpacity>
          </View> */}
          <TopBar 
            placeholder={'Search keyword, category, brand or part'}
            navigation={this.props.navigation}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
              margin: 10,
            }}>
            <Text style={{fontSize: 20, color: 'white', fontFamily:Fonts.PoppinsRegular}}>Lights</Text>
            <Text style={{fontSize: 16, color: 'white', fontFamily:Fonts.PoppinsRegular}}>6/45</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 20,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular}}>Right Side</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular}}>Left Side</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: 30,
                width: 100,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontFamily:Fonts.PoppinsRegular}}>Fog Lamps</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>Best match</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: Colors.themeGreen, fontSize: 18, fontFamily:Fonts.PoppinsRegular}}>
              Dash prime
            </Text>
            <Switch
              trackColor={{false: '#767577', true: Colors.themeBlue}}
              thumbColor={true ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              //   onValueChange={toggleSwitch}
              value={true}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 2,
              }}>
              <View
                style={{height: 3, width: 10, backgroundColor: 'gray'}}></View>
              <View
                style={{
                  height: 3,
                  width: 7,
                  backgroundColor: 'gray',
                  marginTop: 1,
                }}></View>
              <View
                style={{
                  height: 3,
                  width: 5,
                  backgroundColor: 'gray',
                  marginTop: 1,
                }}></View>
            </View>

            <Text style={{color: 'gray', fontFamily:Fonts.PoppinsRegular}}>Filter</Text>
          </View>
        </View>

        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={this.state.dataSource}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('User_ProductDetails')
                }
                style={{
                  height: 150,
                  marginHorizontal: 10,
                  marginVertical: 5,
                  borderWidth: 0.7,
                  borderColor: 'gray',
                  borderRadius: 10,
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRightWidth: 1,
                    borderColor: 'lightgray',
                    marginVertical: 20,
                  }}>
                  <Image
                    style={{
                      height: 90,
                      width: 100,
                    }}
                    source={Engine}
                  />
                </View>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'space-around',
                    marginVertical: 5,
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',
                      marginRight: 20, fontFamily:Fonts.PoppinsRegular
                    }}>
                    BMW N63 is a twin-turbo v8 petrol engine
                  </Text>
                  <Text style={{fontSize: 20, color: Colors.themeBlue, fontFamily:Fonts.PoppinsRegular}}>
                    LKR 450,000
                  </Text>
                  <View
                    style={{
                      height: 25,
                      width: 100,
                      backgroundColor: 'lightgray',
                      borderRadius: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: 'white', fontSize: 12, fontFamily:Fonts.PoppinsRegular}}>
                      FREE delivery
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: Colors.themeGreen,
                      alignSelf: 'flex-end',
                      marginRight: 10, fontFamily:Fonts.PoppinsBold
                    }}>
                    Dash prime
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ fontFamily:Fonts.PoppinsRegular}}>
                      <Text style={{color: Colors.themeGreen}}>★</Text>
                      <Text style={{color: 'gray'}}> 5.0 | 64 Sold</Text>
                    </Text>

                    <View style={{flexDirection: 'row', marginRight: 10}}>
                      <View
                        style={{
                          height: 4,
                          width: 4,
                          backgroundColor: 'gray',
                          borderRadius: 6,
                        }}></View>
                      <View
                        style={{
                          height: 4,
                          width: 4,
                          backgroundColor: 'gray',
                          borderRadius: 6,
                          marginLeft: 2,
                        }}></View>
                      <View
                        style={{
                          height: 4,
                          width: 4,
                          backgroundColor: 'gray',
                          borderRadius: 6,
                          marginLeft: 2,
                        }}></View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <BottomNavBar navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default SearchResult;
