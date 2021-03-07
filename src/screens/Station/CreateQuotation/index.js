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
import BackIcon from '../../../images/backIcon.png';

import CarIcon from '../../../images/carIcon.png';
import BikeIcon from '../../../images/bikeIcon.png';
import VanIcon from '../../../images/vanIcon.png';

import HondaIcon from '../../../images/hondaIcon.png';
import NissanIcon from '../../../images/nissanIcon.png';
import BMWIcon from '../../../images/bmwIcon.png';

import DropDownIcon from '../../../images/dropDownIcon.png';
import BackLight from '../../../images/backlight.png';

import BinIcon from '../../../images/binIcon.png';
import NoteIcon from '../../../images/createNote.png';

import {carIcon,bikeIcon, vanIcon, lightIcon2, binIcon, editIcon, plusIcon, minusIcon} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'
import commonStyles from '../../../utils/commonStyles'
import Button from '../../../components/Button'
class CreateQuotation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
        />

       
        <TopBar 
          navigation={this.props.navigation}
          title={'Create Quotation'}
        />
        
        <ScrollView contentContainerStyle={{paddingBottom: 150}}>
          <View
            style={{
              backgroundColor: Colors.themeBlue,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}>
            <View style={styles.vehicleContainer}>
              <View style={styles.vehicleImageContainer}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*4), width: (20*4)}]}
                  source={carIcon}
                />
              </View>
              <View style={styles.vehicleImageContainer}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*4), width: (20*4)}]}
                  source={bikeIcon}
                />
              </View>
              <View style={styles.vehicleImageContainer}>
                <Image
                  style={[styles.vehicleImage, {height: (7.5*4), width: (20*4)}]}
                  source={vanIcon}
                />
              </View>
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
              <View style={styles.imageContainer}>
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

            <Text style={styles.optionHeading}>Edition</Text>
            <TextInput
              style={[
                styles.optionButton,
                {backgroundColor: 'white', 
                paddingHorizontal: 10, 
                paddingVertical:-5,
                textAlign:'center',
                fontFamily:Fonts.PoppinsRegular,
                fontSize:16
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
                fontSize:16
              },
              ]}
              placeholder={'Enter'}
            />

            <Text style={styles.optionHeading}>Quantity</Text>
            <View style={styles.plusMinusContainer}>
              <TouchableOpacity style={styles.counterButton}>
                <Image 
                  style={styles.plusMinusIcon}
                  source={plusIcon}
                />
              </TouchableOpacity>
              <View style={styles.counterDisplay}>
                <Text style={{fontSize: 16, color: 'gray'}}>1</Text>
              </View>
              <TouchableOpacity style={styles.counterButton}>
              <Image 
                  style={styles.plusMinusIcon}
                  source={minusIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal:10}}>
              <View
                style={[{
                  flex: 1,
                  
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 10,
                }, commonStyles.shadow]}>
                <Image
                  style={{height: (7.5*5), width: (15*5), alignSelf: 'center'}}
                  source={lightIcon2}
                />
               <Text style={{fontSize: 20, alignSelf: 'center', fontFamily:Fonts.PoppinsRegular}}>BMW E46</Text>
                <Text style={{fontSize: 10, alignSelf: 'center', fontFamily:Fonts.PoppinsRegular}}>
                  Front Light (QTY 01)
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 30,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: Colors.themeBlue,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Image
                    source={editIcon}
                    style={{height: 18, width: 18, tintColor: 'white'}}
                  />
                  <Image
                    source={binIcon}
                    style={{height: 20, width: 20, tintColor: 'white'}}
                  />
                </View>
              </View>

              <View
                style={[{
                  flex: 1,
                  
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 10,
                }, commonStyles.shadow]}>
                <Image
                  style={{height: (7.5*5), width: (15*5), alignSelf: 'center'}}
                  source={lightIcon2}
                />
                <Text style={{fontSize: 20, alignSelf: 'center', fontFamily:Fonts.PoppinsRegular}}>BMW E46</Text>
                <Text style={{fontSize: 10, alignSelf: 'center', fontFamily:Fonts.PoppinsRegular}}>
                  Front Light (QTY 01)
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 30,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: Colors.themeBlue,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Image
                    source={editIcon}
                    style={{height: 18, width: 18, tintColor: 'white'}}
                  />
                  <Image
                    source={binIcon}
                    style={{height: 20, width: 20, tintColor: 'white'}}
                  />
                </View>
              </View>

              <View
                style={[{
                  flex: 1,
                  
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 10,
                }, commonStyles.shadow]}>
                <Image
                  style={{height: (7.5*5), width: (15*5), alignSelf: 'center'}}
                  source={lightIcon2}
                />
                <Text style={{fontSize: 20, alignSelf: 'center', fontFamily:Fonts.PoppinsRegular}}>BMW E46</Text>
                <Text style={{fontSize: 10, alignSelf: 'center', fontFamily:Fonts.PoppinsRegular,}}>
                  Front Light (QTY 01)
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 30,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: Colors.themeBlue,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <Image
                    source={editIcon}
                    style={{height: 18, width: 18, tintColor: 'white'}}
                  />
                  <Image
                    source={binIcon}
                    style={{height: 20, width: 20, tintColor: 'white'}}
                  />
                </View>
              </View>
            </View>
          </View>
          
          <Button
            onPress={() => console.log('')}
            backgroundColor={Colors.themeGreen}
            width={250}
            title={'Send'}
            fontSize={16}
            marginTop={30}
          />

        </ScrollView>

      </View>
    );
  }
}

export default CreateQuotation;
