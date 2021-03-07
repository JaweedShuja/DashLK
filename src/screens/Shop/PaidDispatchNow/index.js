import React from 'react'
import {
    View,
    StatusBar,
    Text,
    FlatList
} from 'react-native'
import styles from './style'
import { Colors } from '../../../utils/colors'
import TopBarWithBellIcon from '../../../components/TopBarWithBellIcon'
import { Fonts } from '../../../utils/fonts'
import * as image from '../../../utils/imagePath'
import BottomNavBar from '../../../components/BottomNavBar'
import ListItem from './listItem'
import Button from './button'
import MyStatusBar from '../../../components/StatusBar'
export default class PaidDispatchNow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    id:"1",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    clientName:'Client Name',
                    date:'29 Sep 2020',
                    image:image.engine1
                },
            ]
        }
        this.renderItem = this.renderItem.bind(this)
    }
    renderItem({item}){
        return <ListItem item={item} />
    }
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
                />
                {/* <StatusBar backgroundColor={Colors.themeBlue} barStyle={'light-content'} /> */}
                <TopBarWithBellIcon 
                    navigation={this.props.navigation}
                    onBackIconPress={() => console.log('backIcon')}
                    onBellIconPress={() => console.log('bellIcon')}
                    title={'Selling'}
                />
                <Text style={{fontFamily:Fonts.PoppinsRegular, margin:20}}>
                    <Text style={{color:'gray'}}>Showing: </Text>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>Paid - dispatch now</Text>
                </Text>

                <FlatList 
                    contentContainerStyle={{paddingBottom:200}}
                    data={this.state.data}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderItem}
                />

                <Button
                    onPress={() => this.props.navigation.navigate('Shop_DashStickers')}
                />
                <BottomNavBar
                    shop
                    navigation={this.props.navigation}
                    plusButton={true}
                />

            </View>
        )
    }
}