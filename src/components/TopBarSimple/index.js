import React, { Component } from 'react'
import { View,Text } from 'react-native'
import styles from './style' 
import BackIconComponent from '../../components/BackIcon'

class TopBarWithBellIcon extends Component {
   render() {
       return (
           <View style={styles.container}>
               <BackIconComponent 
                onPress={() => this.props.navigation.goBack()}
               />
               <Text style={styles.title}>{this.props.title}</Text>
           </View>
        )
    }
}

export default TopBarWithBellIcon