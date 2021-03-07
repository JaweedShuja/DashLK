import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import styles from './style'
import MyStatusBar from '../../../components/StatusBar'
import { Colors } from '../../../utils/colors'
import TopBarWithBellIcon from '../../../components/TopBarWithBellIcon'
import RowItem from './rowItem'
import Button from './button'
import BottomNavBar from '../../../components/BottomNavBar'
import Item from './item'

export default class ItemDetails extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
                />
                <TopBarWithBellIcon 
                    title={'Item'}
                    navigation={this.props.navigation}
                />
                <ScrollView contentContainerStyle={{paddingBottom:150}}>
                <Text style={styles.heading}>
                    It's time to dispatch the item
                </Text>
                <View style={styles.detailsContainer}>
                    <RowItem 
                        title={'Buyer:'}
                        description={'client005 (485)'}
                        descriptionColor={Colors.themeGreen}
                    />
                    <RowItem 
                        title={'Sale date:'}
                        description={'Tue, 29 Sep 2020, 3:20 PM'}
                    />
                    <RowItem 
                        title={'Payment received:'}
                        description={'Tue, 29 Sep 2020, 3:20 PM'}
                    />
                    <RowItem 
                        title={'Sent:'}
                        description={'Not dispatched'}
                    />
                    <RowItem 
                        title={'Delivery service:'}
                        description={'Fedex Express'}
                    />
                    <RowItem 
                        title={"Buyer's address"}
                        description={'Damith Hemachandra 80/3, Nisala uyana, ilukwaththa Pilimathalawa'}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={() => this.props.navigation.navigate('Shop_PaidDispatchNow')}
                    />
                </View>

                <Item 
                    // image
                    description={'BMW N63 is a twin-turbo v8 petrol engine'}
                    price={'450,000'}
                    date={'29 Sep 2020'}
                />

                
                </ScrollView>
                <BottomNavBar 
                    plusButton={true}
                    shop
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}