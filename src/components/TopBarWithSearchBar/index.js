import React, { Component } from 'react'
import { 
    View,
} from 'react-native'
import styles from './style' 
import BackIconComponent from '../../components/BackIcon'
import BellIconComponent from '../../components/BellIcon'
import SearchBarComponent from '../../components/SearchBar'

class TopBarWithSearchBar extends Component {
   render() {
       return (
           <View style={styles.container}>
               <BackIconComponent 
                onPress={() => this.props.navigation.goBack()}
               />
               <SearchBarComponent 
                placeholder={this.props.placeholder}
               />
               {
                   this.props.hideBellIconComponent
                   ?
                   null
                   :
                   <BellIconComponent 
                   onPress={() => this.props.navigation.navigate('User_Notification')}
                  />
               }
           </View>
        )
    }
}

export default TopBarWithSearchBar