import React, {Component} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import {Colors} from '../../../utils/colors';
import styles from './style';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';

import CarIcon from '../../../images/carIcon.png';
import BikeIcon from '../../../images/bikeIcon.png';
import VanIcon from '../../../images/vanIcon.png';

import BmwIcon from '../../../images/bmwIcon.png';
import NissanIcon from '../../../images/nissanIcon.png';
import HondaIcon from '../../../images/hondaIcon.png';
import {carIcon,bikeIcon, vanIcon, lightIcon2, binIcon, editIcon} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'
import commonStyles from '../../../utils/commonStyles';

class FindResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVehicle: 'car',
      selectedBrand: 'bmw',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={Colors.themeBlue} /> */}
        <MyStatusBar
            backgroundColor={Colors.themeBlue}
        />
        
        <TopBar 
          title={'Filter Your Result'}
          navigation={this.props.navigation}
        />

        <ScrollView>
          <View style={styles.vehicleContainer}>
           

              <View style={[styles.vehicleImageContainer, {backgroundColor:Colors.themeBlue, opacity:1}]}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*3), width: (20*3)}]}
                  source={carIcon}
                />
              </View>
              <View style={[styles.vehicleImageContainer, {backgroundColor:Colors.themeBlue, opacity:0.5}]}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*3), width: (20*3)}]}
                  source={bikeIcon}
                />
              </View>
              <View style={[styles.vehicleImageContainer, {backgroundColor:Colors.themeBlue, opacity:0.5}]}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*3), width: (20*3)}]}
                  source={vanIcon}
                />
              </View>
          </View>

          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 10,
              color: 'gray',
              fontSize: 16,
              fontFamily:Fonts.PoppinsRegular
            }}>
            Brand
          </Text>
          <View style={styles.brandContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >

            
            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'bmw'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:
                    this.state.selectedBrand == 'bmw'
                      ? Colors.themeGreen
                      : 'white',
                },
              ]}>
              <Image source={BmwIcon} style={styles.brandImage} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'nissan'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:
                    this.state.selectedBrand == 'nissan'
                      ? Colors.themeGreen
                      : 'white',
                },
              ]}>
              <Image source={NissanIcon} style={styles.brandImage} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'honda'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:
                    this.state.selectedBrand == 'honda'
                      ? Colors.themeGreen
                      : 'white',
                },
              ]}>
              <Image source={HondaIcon} style={{height:40, width:45}} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'bmw'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:'white',
                },
              ]}>
              <Image source={BmwIcon} style={styles.brandImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'honda'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:
                    this.state.selectedBrand == 'honda'
                      ? Colors.themeGreen
                      : 'white',
                },
              ]}>
              <Image source={HondaIcon} style={{height:40, width:45}} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'honda'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:
                    this.state.selectedBrand == 'honda'
                      ? Colors.themeGreen
                      : 'white',
                },
              ]}>
              <Image source={HondaIcon} style={{height:40, width:45}} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'bmw'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:'white',
                },
              ]}>
              <Image source={BmwIcon} style={styles.brandImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({selectedBrand: 'honda'})}
              style={[
                styles.brandButton,
                {
                  backgroundColor:
                    this.state.selectedBrand == 'honda'
                      ? Colors.themeGreen
                      : 'white',
                },
              ]}>
              <Image source={HondaIcon} style={{height:40, width:45}} />
            </TouchableOpacity>
            </ScrollView>
          </View>

          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>

          <View style={styles.singleButtonContainer}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,
                color: 'gray',
                fontSize: 16,
                fontFamily:Fonts.PoppinsRegular
              }}>
              Model
            </Text>

            <TouchableOpacity
              style={{
                height: 40,
                marginHorizontal: 30,
                borderRadius: 30,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontSize: 16,fontFamily:Fonts.PoppinsRegular}}>Select</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>

          <View style={styles.singleButtonContainer}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,
                color: 'gray',
                fontSize: 16,
                fontFamily:Fonts.PoppinsRegular
              }}>
              Edition
            </Text>

            <TouchableOpacity
              style={{
                height: 40,
                marginHorizontal: 30,
                borderRadius: 30,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontSize: 16,fontFamily:Fonts.PoppinsRegular}}>Select</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>

          <View style={styles.doubleButtonContainer}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,
                color: 'gray',
                fontSize: 16,
                fontFamily:Fonts.PoppinsRegular
              }}>
              Model Year
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  // marginHorizontal: 30,
                  width: '30%',
                  borderRadius: 30,
                  backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16,fontFamily:Fonts.PoppinsRegular}}>Min</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily:Fonts.PoppinsLight,
                  color:Colors.gray
                }}
              >To</Text>
              <TouchableOpacity
                style={{
                  height: 40,
                  // marginHorizontal: 30,
                  width: '30%',
                  borderRadius: 30,
                  backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16,fontFamily:Fonts.PoppinsRegular}}>Max</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>
          <View style={styles.singleButtonContainer}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,
                color: 'gray',
                fontSize: 16,
                fontFamily:Fonts.PoppinsRegular
              }}>
              Condition
            </Text>

            <TouchableOpacity
              style={{
                height: 40,
                marginHorizontal: 30,
                borderRadius: 30,
                backgroundColor: Colors.themeGreen,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontSize: 16,fontFamily:Fonts.PoppinsRegular}}>Brand New</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>
          <View style={styles.doubleButtonContainer}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,
                color: 'gray',
                fontSize: 16,
              }}>
              Price
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  // marginHorizontal: 30,
                  width: '30%',
                  borderRadius: 30,
                  backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Min</Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily:Fonts.PoppinsLight,
                  color:Colors.gray
                }}
              >To</Text>
              <TouchableOpacity
                style={{
                  height: 40,
                  // marginHorizontal: 30,
                  width: '30%',
                  borderRadius: 30,
                  backgroundColor: Colors.themeGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>Max</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>

          <View style={styles.inputContianer}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,
                color: 'gray',
                fontSize: 16,
              }}>
              Part Name
            </Text>
            <TextInput
              style={{
                marginHorizontal: 30,
                height: 40,
                borderWidth: 1,
                borderColor: Colors.themeGreen,
                borderRadius: 30,
                marginTop: 5,
                paddingHorizontal: 10,
                textAlign:'center',
                fontFamily:Fonts.PoppinsRegular,
              }}
              placeholder={'Enter'}
            />
          </View>
          <View
            style={{
              height: 0.7,
              width: '100%',
              backgroundColor: Colors.themeGreen,
              marginTop: 10,
              opacity:0.5
            }}></View>
          <View style={styles.inputContianer}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: 10,
                color: 'gray',
                fontSize: 16,
              }}>
              OEM Number
            </Text>
            <TextInput
              style={{
                marginHorizontal: 30,
                height: 40,
                borderWidth: 1,
                borderColor: Colors.themeGreen,
                borderRadius: 30,
                marginTop: 5,
                paddingHorizontal: 10,
                textAlign:'center',
                fontFamily:Fonts.PoppinsRegular,
              }}
              placeholder={'Enter'}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User_SearchResult')}
            style={[{
              height: 40,
              marginHorizontal: 50,
              borderRadius: 30,
              backgroundColor: Colors.themeBlue,
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 30,
            }, commonStyles.shadow]}>
            <Text style={{color: 'white', fontSize: 16}}>Apply filters</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default FindResult;
