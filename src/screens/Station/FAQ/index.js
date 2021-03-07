import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import BackIcon from '../../../images/backIcon.png';
import NotificationIcon from '../../../images/notificationIcon.png';
import {Colors} from '../../../utils/colors';
import styles from './style';
import BottomNavBar from '../../../components/BottomNavBar';
import NoteIcon from '../../../images/todoIcon.png';
import commonStyles from '../../../utils/commonStyles';
import { Fonts } from '../../../utils/fonts';
import * as image from '../../../utils/imagePath'
import MyStatusBar from '../../../components/StatusBar'
import TopBar from '../../../components/TopBarWithBellIcon'
class AllOrders extends Component {
  constructor(props){
    super(props)
    this.state = {
      showQ1:true,
      showQ2:true,
      showQ3:true,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        
        <MyStatusBar 
            backgroundColor={Colors.themeBlue}
        />
        
        <TopBar 
          navigation={this.props.navigation}
          title="FAQ"
        />
        <View
          style={{
            height: '75%',
            width: '90%',
            borderWidth: 0.7,
            borderColor: 'gray',
            borderRadius: 20,
            alignSelf: 'center',
            padding: 20,
            marginTop:20
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsBold}}>
              How to order an item?
            </Text>
            <TouchableOpacity 
            onPress={() => {
              this.setState({
                showQ1:!this.state.showQ1
              })
            }}
            style={{
              height:30,
              width:40,
              alignSelf:'flex-end',
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image
                style={{height:20, width:20}}
                source={this.state.showQ1 ? image.upTick : image.downTick} 
              
              />

            </TouchableOpacity>

            </View>
            {
              this.state.showQ1 ?
              <Text style={{fontSize: 14, color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
              Step 1: Search for a product using Google shopping. Step 2: Find
              an item you like using Google shopping. Step 3: Search via Google.
              Step 4: Searching for and buying a product from a website. Step 5:
              Adding a product to your basket. Step 6: Continue shopping or buy
              your product. Step 7: Checkout and pay.
            </Text>
              :
              null

            }
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsBold, marginTop: 20}}>
              How to use earning points?
            </Text>
            <TouchableOpacity 
            onPress={() => {
              this.setState({
                showQ2:!this.state.showQ2
              })
            }}
            style={{
              height:30,
              width:40,
              alignSelf:'flex-end',
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image
                style={{height:20, width:20}}
                source={this.state.showQ2 ? image.upTick : image.downTick} 
              
              />

            </TouchableOpacity>

            </View>
            {
              this.state.showQ2 ?
              <Text style={{fontSize: 14, color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
              Step 1: Search for a product using Google shopping. Step 2: Find
              an item you like using Google shopping. Step 3: Search via Google.
              Step 4: Searching for and buying a product from a website. Step 5:
              Adding a product to your basket. Step 6: Continue shopping or buy
              your product. Step 7: Checkout and pay.
            </Text>
              :
              null

            }
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{fontSize: 16, fontFamily:Fonts.PoppinsBold, marginTop: 20}}>
              How to use earning points?
            </Text>
            <TouchableOpacity 
            onPress={() => {
              this.setState({
                showQ3:!this.state.showQ3
              })
            }}
            style={{
              height:30,
              width:40,
              alignSelf:'flex-end',
              alignItems:'center',
              justifyContent:'center',
            }}>
              <Image
                style={{height:20, width:20}}
                source={this.state.showQ3 ? image.upTick : image.downTick} 
              
              />

            </TouchableOpacity>

            </View>
            {
              this.state.showQ3 ?
              <Text style={{fontSize: 14, color: 'gray', fontFamily:Fonts.PoppinsRegular}}>
              Step 1: Search for a product using Google shopping. Step 2: Find
              an item you like using Google shopping. Step 3: Search via Google.
              Step 4: Searching for and buying a product from a website. Step 5:
              Adding a product to your basket. Step 6: Continue shopping or buy
              your product. Step 7: Checkout and pay.
            </Text>
              :
              null

            }
          </ScrollView>
        </View>
        <BottomNavBar 
        station
            navigation={this.props.navigation}
          plusButton={true}
        />
      </View>
    );
  }
}

export default AllOrders;
