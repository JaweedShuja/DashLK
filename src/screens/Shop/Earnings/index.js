import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from './style'
import MyStatusBar from '../../../components/StatusBar'
import { Colors } from '../../../utils/colors'
import {Fonts} from '../../../utils/fonts'
import TopBar from '../../../components/TopBarWithSearchBar'
import Tab from './tab'
import Button from '../../../components/Button'
import BottomNavBar from '../../../components/BottomNavBar'
import * as image from '../../../utils/imagePath'

export default class Earnings extends React.Component{
    
    render(){
        items = [];
    for (let i = 0; i < 7; i++) {
      items.push(
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            marginVertical: 5,
          }}>
          <Text style={{color: 'gray', fontFamily:Fonts.PoppinsLight}}>2020-11-03</Text>
          <Text style={{color: 'gray', fontFamily:Fonts.PoppinsLight}}>E 46 light</Text>
          <Text style={{color: 'gray', fontFamily:Fonts.PoppinsLight}}>LKR 5000</Text>
        </View>,
      );
    }
        return(
            <View style={styles.container}>
                <MyStatusBar 
                    backgroundColor={Colors.themeBlue}
                />
                <TopBar
                    navigation={this.props.navigation}
                    placeholder={'Search by Order ID'}
                />
                <View style={styles.topContainer}>
                    <Text style={styles.heading}>Earnings</Text>
                    <View style={styles.tabsContainer}>
                        <Tab
                            type={'income'}
                            title={'Income'}
                            amount={'LKR 123,000.00'}
                        />
                        <Tab
                            title={'Pending'}
                            amount={'LKR 50,000.00'}
                        />
                    </View>
                </View>

                <View style={styles.dateContainer}>
                    <Button 
                        onPress={() => {}}
                        title={'2020-10-05'}
                        backgroundColor={Colors.themeGreen}
                        width={200}
                    />

                    <TouchableOpacity style={styles.calenderIconContainer}>
                        <Image 
                            style={styles.calenderIcon}
                            source={image.calenderIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 20,
                        marginHorizontal: 30,
                        borderRadius: 10,
                        alignItems: 'center',
                        padding: 15,
                        backgroundColor:'whitesmoke',
                        flex:1,
                        marginBottom:100,
                    }}>
                    <View
                        style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between',
                        }}>
                        <Text style={{fontFamily:Fonts.PoppinsRegular}}>Clear Date</Text>
                        <Text style={{fontFamily:Fonts.PoppinsRegular}}>Item</Text>
                        <Text style={{fontFamily:Fonts.PoppinsRegular}}>Amount</Text>
                    </View>
                    {items}
                    </View>

                    <BottomNavBar 
                        shop
                        navigation={this.props.navigation}
                        plusButton={true}
                    />
            </View>
        )
    }
}