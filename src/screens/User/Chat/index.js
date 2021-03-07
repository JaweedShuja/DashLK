import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BackIcon from '../../../images/backIcon.png';
import EmojiIcon from '../../../images/emojiIcon.png';
import CameraIcon from '../../../images/cameraIcon.webp';
import AttechmentIcon from '../../../images/attechment.png';
import AppBar from '../../../components/AppBar'
import {
  emojiIcon, 
  attechmentIcon, 
  cameraIcon, 
  bottomButton
} from '../../../utils/imagePath'
import { Fonts } from '../../../utils/fonts';
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarSimple'

class Chat extends Component {
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
        {/* <View style={styles.topContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backIconContainer}>
            <Image source={BackIcon} style={styles.backIcon} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Chat</Text>
        </View> */}
        {/* <AppBar
          title={'Chat'}
          navigation={this.props.navigation}
        /> */}
        <TopBar 
          title={'Chat'}
          navigation={this.props.navigation}
        />
        <View style={{
          height:60,
          borderBottomWidth:1,
          borderColor:'lightgray',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'row',
        }}>
         <View style={{
           height:45,
           width:45,
           borderRadius:45,
           backgroundColor:Colors.themeBlue,
           borderWidth:1,
           borderColor:'white',
           elevation:3,
           alignItems:'center',
           justifyContent:'center',
         }}>
           <Image 
            style={{
              height:30,
            width:30,
            tintColor:'white'
          }}
            source={bottomButton}
           />

         </View>
          <Text
            style={{
              fontSize:18, 
              fontFamily:Fonts.PoppinsRegular, 
              opacity:0.8,
              marginLeft:10,
              marginTop:5
            }}
          >Dash Support</Text>

        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Image style={styles.emjiIcon} source={emojiIcon} />
          </TouchableOpacity>

          <TextInput
            placeholder={'Type a message...'}
            style={styles.chatInput}
          />

          <TouchableOpacity>
            <Image
              style={{height: 28, width: 28, tintColor: 'gray', marginRight:10}}
              source={attechmentIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={[styles.emjiIcon, {tintColor: 'gray'}]}
              source={cameraIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Chat;
