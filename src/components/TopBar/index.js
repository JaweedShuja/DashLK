import React, {Component} from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './style.js';
import {Colors} from '../../utils/colors';
import commonStyle from '../../utils/commonStyles'
import {
  notificationIcon, 
  searchIcon, 
  backIcon, 
} from '../../utils/imagePath'

class TopBar extends Component {
  render() {
    return (
      <View style={styles.topChildContainer}>
          <TouchableOpacity 
          onPress={() => this.props.navigation.goBack()}
          style={commonStyle.backIconContainer}>
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
      onPress={() => this.props.navigation.navigate('User_Notification')}
      style={styles.backIconContainer}>
        <Image
          style={styles.NotificationIcon}
          source={notificationIcon}
        />
      </TouchableOpacity>
      </View>
    );
  }
}

export default TopBar;
