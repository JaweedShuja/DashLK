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
import TopBar from '../../../components/TopBarWithSearchBar'
import Button from '../../../components/Button'

import BottomNavBar from '../../../components/BottomNavBar';
import BackIcon from '../../../images/backIcon.png';
import MyStatusBar from '../../../components/StatusBar'

import HondaIcon from '../../../images/hondaIcon.png';
import NissanIcon from '../../../images/nissanIcon.png';
import BMWIcon from '../../../images/bmwIcon.png';

import DropDownIcon from '../../../images/dropDownIcon.png';
import * as image from '../../../utils/imagePath'


import {carIcon,bikeIcon, vanIcon, lightIcon2, binIcon, editIcon} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';

class CreateItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:'car'
    };
  }
  render() {
    return (
      <View style={styles.container}>
       
        <MyStatusBar 
          backgroundColor={Colors.themeBlue}
        />

        <TopBar 
          navigation={this.props.navigation}
          placeholder={'Search keyword, category, brand or part'}
          hideBellIconComponent
        />


        <View style={styles.topChildContainer}>
          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerText, {fontSize: 18, fontFamily:Fonts.PoppinsRegular}]}>
              Create new Item
            </Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          <View
            style={{
              backgroundColor: Colors.appBackgroundColor,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <View style={styles.vehicleContainer}>
              <TouchableOpacity 
              onPress={() => {
                this.setState({
                  selected:'car'
                })
              }}
              style={[styles.vehicleImageContainer, {backgroundColor:Colors.themeBlue, opacity: this.state.selected == 'car' ? 1 : 0.5}]}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*4), width: (20*4)}]}
                  source={carIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => {
                this.setState({
                  selected:'bike'
                })
              }}
              style={[styles.vehicleImageContainer, {backgroundColor:Colors.themeBlue, opacity: this.state.selected == 'bike' ? 1 : 0.5}]}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*4), width: (20*4)}]}
                  source={bikeIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => {
                this.setState({
                  selected:'van'
                })
              }}
              style={[styles.vehicleImageContainer, {backgroundColor:Colors.themeBlue, opacity: this.state.selected == 'van' ? 1 : 0.5}]}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*4), width: (20*4)}]}
                  source={vanIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.optionHeading}>Brand</Text>
            <View style={styles.brandContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
            >
              <View style={styles.imageContainer}>
                <Image style={styles.brandImage} source={BMWIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={{
                       height: 30,
                       width: 37,
                }} source={HondaIcon} />
              </View>
              <View style={[styles.imageContainer, {backgroundColor:Colors.themeGreen}]}>
                <Image style={styles.brandImage} source={NissanIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.brandImage} source={BMWIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.brandImage} source={NissanIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.brandImage} source={BMWIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={{
                       height: 30,
                       width: 37,
                }} source={HondaIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.brandImage} source={NissanIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.brandImage} source={BMWIcon} />
              </View>
              <View style={styles.imageContainer}>
                <Image style={styles.brandImage} source={NissanIcon} />
              </View>
              </ScrollView>
            </View>

                {/* ye alag */}
            <View
              style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginHorizontal:40,
                marginTop:20
              }}
            >
              <TouchableOpacity
                style={{
                  height:70,
                  width:70,
                  borderRadius:10,
                  borderWidth:0.7,
                  borderColor:'gray',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Image 
                  style={{
                    height:50,
                    width:50
                  }}
                  source={image.engine2}
                />

              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  height:70,
                  width:70,
                  borderRadius:10,
                  borderWidth:0.7,
                  borderColor:'gray',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Image 
                  style={{
                    height:50,
                    width:50
                  }}
                  source={image.engine2}
                />

              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height:70,
                  width:70,
                  borderRadius:10,
                  borderWidth:0.7,
                  borderColor:'gray',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >
                <Image 
                  style={{
                    height:50,
                    width:50
                  }}
                  source={image.engine2}
                />

              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height:70,
                  width:70,
                  borderRadius:10,
                  borderWidth:0.7,
                  borderColor:'gray',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              >

                <View 
                style={{
                  height:30,
                  width:30,
                  borderRadius:30,
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor:'lightgray'
                }}
                >
                  <Image 
                  style={{
                    height:20,
                    width:20,
                    tintColor:'gray'
                  }}
                  source={image.plusIcon}
                />

                </View>

              </TouchableOpacity>

            </View>

            <Text style={styles.optionHeading}>Model</Text>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Select</Text>
              <Image style={styles.optionButtonImage} source={DropDownIcon} />
            </TouchableOpacity>

            <Text style={styles.optionHeading}>Edition</Text>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Select</Text>
              <Image style={styles.optionButtonImage} source={DropDownIcon} />
            </TouchableOpacity>

            <Text style={styles.optionHeading}>Model year</Text>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Select</Text>
              <Image style={styles.optionButtonImage} source={DropDownIcon} />
            </TouchableOpacity>

            <Text style={styles.optionHeading}>Condition</Text>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Brand new</Text>
              <Image style={styles.optionButtonImage} source={DropDownIcon} />
            </TouchableOpacity>

            <Text style={styles.optionHeading}>Part Name</Text>
            <TextInput
              style={[
                styles.optionButton,
                {backgroundColor: 'white', 
                paddingHorizontal: 10, 
                paddingVertical:-5,
                textAlign:'center',
                fontFamily:Fonts.PoppinsRegular,
                fontSize:16,
                borderWidth:1,
                borderColor:Colors.themeGreen
              },
              ]}
              placeholder={'Enter'}
            />

            <Text style={styles.optionHeading}>OEM number</Text>
            <TextInput
              style={[
                styles.optionButton,
                {backgroundColor: 'white', 
                paddingHorizontal: 10, 
                paddingVertical:-5,
                textAlign:'center',
                fontFamily:Fonts.PoppinsRegular,
                fontSize:16,
                borderWidth:1,
                borderColor:Colors.themeGreen
              },
              ]}
              placeholder={'Enter'}
            />

              {/* yaha */}
              <Text style={styles.optionHeading}>Additional comment</Text>

              <TextInput 
                  multiline={true}
                  numberOfLines={3}
                  style={{
                    borderWidth:0.7,
                    borderColor:'gray',
                    height:150,
                    marginHorizontal:30,
                    borderRadius:20,
                    textAlignVertical:'top',
                    padding:10
                  }}
                  
              />




          <Text style={styles.optionHeading}>Item weight (KG)</Text>
            <TextInput
              style={[
                styles.optionButton,
                {backgroundColor: 'white', 
                paddingHorizontal: 10, 
                paddingVertical:-5,
                textAlign:'center',
                fontFamily:Fonts.PoppinsRegular,
                fontSize:16,
                borderWidth:1,
                borderColor:Colors.themeGreen
              },
              ]}
              placeholder={'Enter'}
            />

            <Text style={styles.optionHeading}>Price</Text>
            <TextInput
              style={[
                styles.optionButton,
                {backgroundColor: 'white', 
                paddingHorizontal: 10, 
                paddingVertical:-5,
                textAlign:'center',
                fontFamily:Fonts.PoppinsRegular,
                fontSize:16,
                borderWidth:1,
                borderColor:Colors.themeGreen
              },
              ]}
              placeholder={'Enter'}
            />

            

            

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}>
                <Text style={{
                  fontFamily:Fonts.PoppinsRegular,
                  color:'gray'
                }}>
                  Price you entered
                </Text>
                <Text style={{
                  fontFamily:Fonts.PoppinsRegular,
                  color:'gray'
                }}>
                  4400.00
                </Text>

              </View>

              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between'
              }}>
                <Text style={{
                  fontFamily:Fonts.PoppinsRegular,
                  color:'gray'
                }}>
                  Delivery charge
                </Text>
                <Text style={{
                  fontFamily:Fonts.PoppinsRegular,
                  color:'gray'
                }}>
                  -400.00
                </Text>

              </View>

              <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                marginTop:10,
              }}>
                <Text style={{
                  fontFamily:Fonts.PoppinsRegular,
                  color:Colors.themeBlue,
                  fontSize:16
                }}>
                  Amount you will earned
                </Text>
                <Text style={{
                  fontFamily:Fonts.PoppinsRegular,
                  color:Colors.themeBlue,
                  fontSize:16
                }}>
                  4000.00
                </Text>

              </View>

              



          </View>

          <Button 
            title={'List Item'}
            fontSize={18}
            marginTop={50}
            width={250}
          />
        </ScrollView>

      </View>
    );
  }
}

export default CreateItem;
