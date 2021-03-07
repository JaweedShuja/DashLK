import React, { Component } from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import styles from './style' 
import BackIconComponent from '../../components/BackIcon'
import BellIconComponent from '../../components/BellIcon'

class TopBarWithBellIcon extends Component {
   render() {
       return (
           <View style={styles.container}>
               <BackIconComponent 
                onPress={() => {this.props.navigation.goBack()}}
               />
               <Text style={styles.title}>{this.props.title}</Text>
               <BellIconComponent 
                onPress={() => {this.props.navigation.navigate('User_Notification')}}
               />
           </View>
        )
    }
}

export default TopBarWithBellIcon