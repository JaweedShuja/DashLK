import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BottomNavBar from '../../../components/BottomNavBar';
let grayCicle;
import BackIcon from '../../../images/backIcon.png';
import commonStyles from '../../../utils/commonStyles';
import { Fonts } from '../../../utils/fonts';
import * as image from '../../../utils/imagePath'
import MyStatusBar from '../../../components/StatusBar'
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ASSName: '',
      RegisterationNO: '',
      Address1: '',
      Address2: '',
      City: '',
      PhoneNumber: '',
      NICCopy: '',
      EMail: '',
    };
  }
  render() {
    grayCicle = [];
    for (let index = 0; index < 6; index++) {
      grayCicle.push(
        <View key={index.toString()} style={styles.grayDot}></View>,
      );
    }
    return (
      <View style={styles.container}>
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />

        <View style={styles.topChildContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backIconContainer}>
            <Image style={[styles.BackIcon, commonStyles.backIconSize]} source={BackIcon} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerText, {fontSize: 18, fontFamily:Fonts.PoppinsRegular}]}>Sign Up</Text>
            <Text style={[styles.headerText, {fontSize: 12, fontFamily:Fonts.PoppinsRegular}]}>
              Automobile Service Station
            </Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          <View style={{flexDirection: 'row'}}>
            {/* left */}
            <View style={{padding: 10}}>
              <View style={styles.greenBlueCircle}>
                <Image source={image.signUpGarageIcon} style={styles.circleImage} />
              </View>
              <View style={{alignSelf: 'center'}}>{grayCicle}</View>
              <View style={styles.greenBlueCircle}>
                <Image source={image.pinSignUpIcon} style={styles.circleImage} />
              </View>
              <View style={{alignSelf: 'center'}}>{grayCicle}</View>
              <View style={styles.greenBlueCircle}>
                <Image source={image.userSignUpStation} style={styles.circleImage} />
              </View>
            </View>
            {/* right */}
            <View style={{flex: 1}}>
              <TextInput
                placeholder={'A S S Name (Automobile Service Station)'}
                style={[styles.inputContainer, commonStyles.shadow]}
                placeholderTextColor={'black'}
              />
              <TextInput
                placeholder={'Register No'}
                style={[styles.inputContainer, commonStyles.shadow]}
                placeholderTextColor={'black'}
              />
              <TextInput
                placeholder={'Address-1'}
                style={[styles.inputContainer, {marginTop: 30}, commonStyles.shadow]}
                placeholderTextColor={'black'}
              />
              <TextInput
                placeholder={'Address-2'}
                style={[styles.inputContainer, commonStyles.shadow]}
                placeholderTextColor={'black'}
              />
              <TextInput placeholder={'City'} style={[styles.inputContainer, commonStyles.shadow]}
              placeholderTextColor={'black'} />
              <TextInput
                placeholder={'Phone Number'}
                style={[styles.inputContainer, {marginTop: 30}, commonStyles.shadow]}
                placeholderTextColor={'black'}
              />
              {/* <TextInput
                placeholder={'NIC Copy'}
                style={styles.inputContainer}
                placeholderTextColor={'black'}
                
              /> */}
              <View

              style={{
                height: 40,
                marginVertical:5,
                marginLeft:5,
                marginRight:20,
                flexDirection:'row',
                justifyContent:'space-between'
              }}
              >
                <TouchableOpacity
                  style={[{
                    height:40,
                    width:230,
                    borderRadius:30,
                    justifyContent:'center',
                    backgroundColor:'white',
                    paddingHorizontal:20,
                  }, commonStyles.shadow]}
                >
                  <Text
                    style={{
                      fontFamily:Fonts.PoppinsRegular
                    }}
                  >NIC Copy</Text>

                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    height:40,
                    width:40,
                    backgroundColor:Colors.themeGreen,
                    borderRadius:40,
                    alignItems:'center',
                    justifyContent:'center'
                  }}
                >
                  <Image 
                    style={{height:(6*3), width:(7.5*3)}}
                    source={image.uploadIcon}
                  />

                </TouchableOpacity>

              </View>
              <TextInput
                placeholder={"Email ( Can't Edit)"}
                style={[styles.inputContainer, commonStyles.shadow]}
                placeholderTextColor={'black'}
              />
            </View>
          </View>

          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Station_Dashboard')}
          style={[styles.applyButton, commonStyles.shadow]}>
            <Text style={{color: 'white', fontSize: 16, fontFamily:Fonts.PoppinsRegular}}>Apply</Text>
          </TouchableOpacity>
        </ScrollView>

        <BottomNavBar navigation={this.props.navigation} />
      </View>
    );
  }
}

export default SignUp;
