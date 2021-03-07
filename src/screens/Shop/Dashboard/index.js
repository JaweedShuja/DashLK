import React, { Component } from 'react'
import { 
    View,
    StatusBar,
    ScrollView,
    Text,
    TouchableOpacity
 } from 'react-native'
import styles from './style' 
import { Colors } from '../../../utils/colors'
import TopBarWithBellIcon from '../../../components/TopBarWithBellIcon'
import CircleComponent from './circleComponent'
import OptionComponent from './optionComponent'
import BottomNavBar from '../../../components/BottomNavBar'
import EarningComponent from './earningComponent'
import MyStatusBar from '../../../components/StatusBar'

class Dashboard extends Component {
   render() {
       return (
           <View style={styles.container}>
               <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
               />
               <TopBarWithBellIcon 
                onBackIconPress={() => console.log('backIcon')}
                onBellIconPress={() => console.log('bellIcon')}
                title={'Automobile Store - Seller'}
                navigation={this.props.navigation}
               />
               <ScrollView
                contentContainerStyle={{paddingBottom:150}} 
                style={{flex:1,}} 
                showsVerticalScrollIndicator={false}
                >
               <View style={styles.circlesContainer}>
                    <CircleComponent
                        circleBackgroundColor={Colors.themeGreen}
                        text={'90%'}
                        description={'On-time Delivery'}
                    />
                    <CircleComponent
                        circleBackgroundColor={Colors.themeGreen}
                        text={'5.0'}
                        description={'Positive Rating'}
                    />
                    <CircleComponent
                        circleBackgroundColor={Colors.themeGreen}
                        text={'5'}
                        description={'Active Orders'}
                    />
                    <CircleComponent
                        circleBackgroundColor={Colors.themeBlue}
                        text={'355'}
                        description={'All Orders'}
                    />
               </View>

               <View style={styles.horizontalLine}/>

               <OptionComponent
                onPress={() => {
                    this.props.navigation.navigate('Shop_PaidDispatchNow')
                }}
                qty={2}
                qtyColor={Colors.red}
                title={'Paid - dispatch now'}
               />
               <OptionComponent
                onPress={() => {
                    this.props.navigation.navigate('Shop_ActiveListings')
                }}
                qty={134}
                qtyColor={Colors.themeGreen}
                title={'Active Listings'}
               />
               <OptionComponent
                onPress={() => this.props.navigation.navigate('Shop_AwaitingDelivery')}
                qty={7}
                qtyColor={Colors.themeGreen}
                title={'Awaiting delivery'}
               />
               <OptionComponent
                onPress={() => {
                    this.props.navigation.navigate('Shop_AllOrders')
                }}
                qty={355}
                qtyColor={Colors.themeGreen}
                title={'All Orders'}
               />
               <OptionComponent
                onPress={() => {
                    this.props.navigation.navigate('Shop_DisapprovedItems')
                }}
                qty={4}
                qtyColor={Colors.themeGreen}
                title={'Disapproved items'}
               />
                  <View style={styles.viewMoreContainer}>
                    <Text style={styles.earningText}>Earnings</Text>

                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Shop_Earning')}
                    >
                        <Text style={styles.viewMoreText}>View more</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.earningDetailsContainer}>
                    <View style={styles.earningContainerRow}>
                        <EarningComponent
                            type={'Personal Balance'}
                            amount={'LKR 345,000'}
                            color={Colors.themeGreen}
                        />
                        <EarningComponent
                            type={'Earnings in October'}
                            amount={'LKR 345,000'}
                            
                        />
                    </View>
                    <View style={styles.earningContainerRow}>
                        <EarningComponent
                            type={'Active Orders'}
                            amount={'LKR 54,000'}
                            qty={'5'}
                        />
                        <EarningComponent
                            type={'Cancelled Orders'}
                            amount={'LKR 12,000'}
                            qty={'2'}
                        />
                    </View>
                    <View style={styles.earningContainerRow}>
                    <EarningComponent
                            type={'Pending Clearence'}
                            amount={'LKR 221,000'}
                        />
                        <View style={{flex:1,}}/>
                    </View>
                </View>
                </ScrollView>


             
               <BottomNavBar
                    shopcreate
                    shop
                    navigation={this.props.navigation}
                    plusButton={true}
               />
             
           </View>
        )
    }
}

export default Dashboard