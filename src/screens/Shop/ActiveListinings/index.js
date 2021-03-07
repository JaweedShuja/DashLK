import React from 'react'
import {
    View,
    Text,
    StatusBar,
    FlatList
} from 'react-native'
import styles from './style'
import {Fonts} from '../../../utils/fonts'
import { Colors } from '../../../utils/colors'
import TopBar from '../../../components/TopBarWithBellIcon'
import ListItem from './listItem'
import * as image from '../../../utils/imagePath'
import BottomNavBar from '../../../components/BottomNavBar'
import MyStatusBar from '../../../components/StatusBar'

export default class ActiveListings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    id:"1",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1
                },
                {
                    id:"2",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1
                },
                {
                    id:"3",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1
                },
                {
                    id:"4",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1
                },
                {
                    id:"5",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1
                },
            ]
        }
        this.renderItem = this.renderItem.bind(this)
    }
    renderItem({item}){
        return <ListItem navigation={this.props.navigation} item={item} />
    }
    render(){
        return(
            <View style={styles.container}>
                {/* <StatusBar backgroundColor={Colors.themeBlue} barStyle={'light-content'} /> */}
                <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
                />
                <TopBar
                    navigation={this.props.navigation}
                    onBackIconPress={() => console.log('onBackIconPress')}
                    onBellIconPress={() => console.log('onBellIconPress')}
                    title={'Selling'}
                />
                <Text style={{fontFamily:Fonts.PoppinsRegular, margin:20}}>
                    <Text style={{color:'gray'}}>Showing: </Text>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>Active Listings</Text>
                </Text>
                <FlatList 
                    contentContainerStyle={{paddingBottom:150}}
                    data={this.state.data}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderItem}
                />

                <BottomNavBar
                    plusButton={true}
                    shop
                    navigation={this.props.navigation}
                />

            </View>
        )
    }
}