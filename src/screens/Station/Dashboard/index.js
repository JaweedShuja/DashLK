import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import BottomNavBar from '../../../components/BottomNavBar';
import BackIcon from '../../../images/backIcon.png';
import ForwardIcon from '../../../images/forwardIcon.png';
import createNote from '../../../images/createNote.png';
import PointsIcon from '../../../images/pointsIcon.png';
import commonStyles from '../../../utils/commonStyles';
import { Fonts } from '../../../utils/fonts';
import {editIcon, pointsIconStation} from '../../../utils/imagePath'
import MyStatusBar from '../../../components/StatusBar'

class Dashboard extends Component {
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

        

        <View style={styles.topChildContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backIconContainer}>
            <Image style={[styles.BackIcon, commonStyles.backIconSize]} source={BackIcon} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={[styles.headerText, {fontSize: 18, fontFamily:Fonts.PoppinsRegular}]}>Dashboard</Text>
            <Text style={[styles.headerText, {fontSize: 12, fontFamily:Fonts.PoppinsRegular}]}>
              Automobile Service Station
            </Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Station_MyPoints')}
          style={styles.menuItem}>
            <View style={styles.menuCircle}>
              <Text style={styles.circleText}>70</Text>
            </View>
            <Text style={styles.circleBottomText}>Point</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Station_QuotationRequested')}
          style={styles.menuItem}>
            <View style={styles.menuCircle}>
              <Text style={styles.circleText}>06</Text>
            </View>
            <Text style={styles.circleBottomText}>Order Request</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Station_AllOrders')}
          style={styles.menuItem}>
            <View style={styles.menuCircle}>
              <Text style={styles.circleText}>50</Text>
            </View>
            <Text style={styles.circleBottomText}>Orders</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Station_CreateQuotation')}
        style={[styles.dashboardButton, {marginTop: 30}, commonStyles.shadow]}>
          <View style={styles.buttonLeftElement}>
            <Image source={editIcon} style={styles.buttonElementImage} />
          </View>
          <Text style={styles.buttonText}>Create new Quotation</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Station_MyPoints')}
        style={[styles.dashboardButton, commonStyles.shadow]}>
          <View style={styles.buttonLeftElement}>
            <Image
              source={pointsIconStation}
              style={{height: 22, width: 22, tintColor: 'white'}}
            />
          </View>
          <Text style={styles.buttonText}>Points</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Station_QuotationRequested')}
        style={[styles.dashboardButton, commonStyles.shadow]}>
          <View style={styles.buttonLeftElement}>
            <View style={styles.childLeftElement}>
              <Text style={styles.childElementText}>06</Text>
            </View>
          </View>
          <Text style={styles.buttonText}>Quotation requested</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Station_AllOrders')}
        style={[styles.dashboardButton, commonStyles.shadow]}>
          <View style={styles.buttonLeftElement}>
            <View style={styles.childLeftElement}>
              <Text style={styles.childElementText}>50</Text>
            </View>
          </View>
          <Text style={styles.buttonText}>All orders</Text>
          <Image source={ForwardIcon} style={styles.forwarIcon} />
        </TouchableOpacity>

        <BottomNavBar 
        station
        navigation={this.props.navigation} plusButton={true} />
      </View>
    );
  }
}

export default Dashboard;
