import React from 'react'
import {
    View,
    Text,
    StatusBar,
    FlatList,
    Dimensions, 
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import styles from './style'
import { Colors } from '../../../utils/colors'
import {Fonts} from '../../../utils/fonts'
import TopBar from '../../../components/TopBarWithSearchBar'
import * as image from '../../../utils/imagePath'
import ListItem from './listItem'
import BottomNavBar from '../../../components/BottomNavBar'
import Modal from 'react-native-modal';
import ActionSheet from '../../../components/ActionSheet';
import MyStatusBar from '../../../components/StatusBar'

export default class DisapprovedItems extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[
                {
                    id:"1",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555'
                },
                {
                    id:"2",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555'
                },
                {
                    id:"3",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555'
                },
                {
                    id:"4",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555'
                },
            ],
            actionItems : [
                {
                  id: 1,
                  label: 'Edit',
                  onPress: () => {
                  }
                },
                {
                  id: 2,
                  label: 'Sell Similar',
                  onPress: () => {
                  }
                },
                {
                  id: 3,
                  label: 'End Listing',
                  onPress: () => {
                  }
                },
              ],
              actionSheet:false,
              selectedItemName:''
        }
        this.renderItem = this.renderItem.bind(this)
        this.closeActionSheet = this.closeActionSheet.bind(this)
    }
    renderItem({item}){
        return <ListItem 
            onMoreIconPress={() => {
                this.setState({
                    selectedItemName:item.name,
                    actionSheet:true
                })
            }}
            item={item} 
        />
    }
    closeActionSheet(){
        this.setState({
            actionSheet:false
        })
    }
    render(){
        return(
            <View style={styles.container}>
              {/* <StatusBar backgroundColor={Colors.themeBlue} barStyle={'light-content'}/> */}
                <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
                />
              <TopBar 
                navigation={this.props.navigation}
                placeholder={'Search by Order ID'}
              />
              <View style={styles.settlingContainer}>
                    <Text style={styles.sellingText}>
                        Selling
                    </Text>
              </View>
               <Text style={{fontFamily:Fonts.PoppinsRegular, marginLeft:20,marginVertical:10}}>
                    <Text style={{color:'gray'}}>Showing: </Text>
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>Disapproved Items</Text>
                </Text>
                <FlatList 
                    contentContainerStyle={{paddingBottom:200}}
                    data={this.state.data}
                    keyExtractor={(item) => item.id}
                    renderItem={this.renderItem}
                />
                <Modal
                    isVisible={this.state.actionSheet}
                    style={{
                        margin: 0,
                        justifyContent: 'flex-end'
                    }}
                    >
                    <ActionSheet
                        name={this.state.selectedItemName}
                        actionItems={this.state.actionItems}
                        onCancel={this.closeActionSheet}
                    />
                </Modal>
                <BottomNavBar 
                    plusButton={true}
                    shop
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}