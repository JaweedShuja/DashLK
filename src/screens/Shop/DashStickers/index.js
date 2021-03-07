import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import styles from './style'
import TopBar from '../../../components/TopBarSimple'
import BottomNavBar from '../../../components/BottomNavBar'
import MyStatusBar from '../../../components/StatusBar'
import Option from './option'
import { Colors } from '../../../utils/colors'
import DetailsRow from './detailsRow'
import Button from '../../../components/Button'

export default class DashStickers extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
                />
                <TopBar 
                    navigation={this.props.navigation}
                    title={'Dash stickers & more'}
                />
                <ScrollView
                contentContainerStyle={{paddingBottom:150}}
                >

                
                <Option 
                    title={'Dash Stickers (50 Pcs)'}
                    qty={'2'}
                />
                <Option 
                    title={'Dash wrapping paper'}
                    qty={'1'}
                />
                <Option 
                    title={'Dash Sellotape'}
                    qty={'4'}
                />

                <Option 
                    title={'Bubble wrap (20M)'}
                    qty={'1'}
                />

                <View style={styles.detailsContainer}>
                    <DetailsRow 
                        title={'Subtotal (4 items - Qty 8):'}
                        price={'LKR 0.00'}
                    />
                    <DetailsRow 
                        title={'Delivery'}
                        price={'FREE'}
                    />
                    <DetailsRow 
                        title={'Total'}
                        price={'LKR 0.00'}
                        color={Colors.themeBlue}
                        fontSize={16}
                    />
                </View>

                <Button 
                    onPress={() => this.props.navigation.navigate('Shop_Dashboard')}
                    marginTop={50}
                    title={'Get Free'}
                    width={230}


                    fontSize={18}
                />
                </ScrollView>
                <BottomNavBar 
                    navigation={this.props.navigation}
                    plusButton={true}
                    shop
                />
            </View>
        )
    }
}