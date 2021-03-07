import React from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './style'
import MyStatusBar from '../../../components/StatusBar'
import { Colors } from '../../../utils/colors'
import TopBar from '../../../components/TopBarSimple'
import BottomNavBar from '../../../components/BottomNavBar'
import Option from './option'
import * as image from '../../../utils/imagePath'

export default class Registeration extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
                />
                <TopBar
                    navigation={this.props.navigation}
                    title={'Register for Dash'}
                />
                <View style={styles.mainContainer}>
                    <Text style={styles.titleText}>
                        Which accoount type do you need to create ?
                    </Text>
                    <Option
                        source={image.userIconProfile}
                        title={'Create User'}
                        description={'Discover & buy Dash products'}
                    />
                    <Option
                        source={image.homeIconprofile}
                        title={'Create Store'}
                        description={'Sell products on Dash - FREE'}
                    />
                    <Option
                        source={image.garageIcon}
                        title={'Create Garage'}
                        description={'Request quotation for bulk orders'}
                    />
                    <Text style={styles.signinText}>
                        <Text style={{color:'gray'}}>{'Already have an account? '}</Text>
                        <Text style={{color:Colors.themeGreen}}>Sign In</Text>
                    </Text>
                </View>
                
                <BottomNavBar 
                    plusButton={true}
                    shop
                    navigation={this.props.navigation}
                />
                
            </View>
        )
    }
}