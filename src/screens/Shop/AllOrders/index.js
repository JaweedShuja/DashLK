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
import ListItem1 from './listItem1'
import ListItem2 from './listItem2'
import BottomNavBar from '../../../components/BottomNavBar'
import Modal from 'react-native-modal';
import ActionSheet from '../../../components/ActionSheet';
import MyStatusBar from '../../../components/StatusBar'

export default class AwaitingDelivery extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data2:[
                {
                    id:"5",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    clientName:'Client Name',
                    date:'29 Sep 2020',
                    image:image.engine1,
                    type:'paid'
                },
                {
                    id:"6",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    clientName:'Client Name',
                    date:'29 Sep 2020',
                    image:image.engine1,
                    type:'paid'
                },
                {
                    id:"1",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555',
                    type:'awaiting',
                },
                {
                    id:"2",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555',
                    type:'awaiting',
                },
                {
                    id:"3",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555',
                    type:'awaiting',
                },
                {
                    id:"4",
                    name:'BMW N63 is a twin-turbo V8 petrol engine',
                    price:'450,000',
                    qty:'12',
                    image:image.engine1,
                    orderDate:'2020-10-01 03:20',
                    orderID:'#D020033555',
                    type:'awaiting',
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
        this.closeActionSheet = this.closeActionSheet.bind(this)
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
                    <Text style={{color:'rgba(0,0,0,0.9)'}}>All Orders</Text>
                </Text>
                <FlatList 
                    contentContainerStyle={{paddingBottom:150}}
                    data={this.state.data2}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        if(item.type == 'paid'){
                            return <ListItem1 
                                item={item}
                                navigation={this.props.navigation}
                            />
                        }
                        else{
                            return <ListItem2 
                            onMoreIconPress={() => {
                                this.setState({
                                    selectedItemName:item.name,
                                    actionSheet:true
                                })
                            }}
                            item={item} 
                            navigation={this.props.navigation}
                            />    
                        }
                    }}
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