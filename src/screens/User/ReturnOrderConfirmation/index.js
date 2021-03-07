import React, {Component} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Colors} from '../../../utils/colors';
import ItemList from '../../../components/ItemsList';
import CheckIcon from '../../../images/checkIcon.webp';
import BottomNavBar from '../../../components/BottomNavBar';
import MyStatusBar from '../../../components/StatusBar'

class ReturnOrderConfirmation extends Component {
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
          <Text style={styles.topContainerText}>Return</Text>
        </View>
        <Text style={styles.cancelMsg}>Your return request has been sent</Text>
        <View style={styles.checkContainer}>
          <Image source={CheckIcon} style={styles.CheckIcon} />
        </View>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('User_Dashboard')}
        >
          <Text style={styles.returnHomeText}>Return home</Text>
        </TouchableOpacity>
        <ItemList />

        <ItemList />

        <BottomNavBar navigation={this.props.navigation}
          plusButton={'true'}
        />
      </View>
    );
  }
}

export default ReturnOrderConfirmation;
