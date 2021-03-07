import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native'
import styles from './style'
import MyStatusBar from '../../../components/StatusBar/index'
import BackIcon from './backIcon'
import { Colors } from '../../../utils/colors'
import * as image from '../../../utils/imagePath'
import Input from './input'
import Button from '../../../components/Button'
import BottomText from './bottomText'

export default class StoreRegisteration extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MyStatusBar 
                    backgroundColor={'white'}
                    barStyle={'dark-content'}
                />
                <BackIcon 
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                    tintColor={Colors.themeGreen}
                />
                <ScrollView>
                    <Image 
                        source={image.Dashlk}
                        style={styles.DashLK}
                    />
                    <Text style={styles.heading}>
                        {'Store Register'}
                    </Text>
                    <Input 
                        placeholder={'Store Name    (Like Ali express)'}
                    />
                    <Input 
                        placeholder={'Address'}
                    />
                    <Input 
                        placeholder={'Phone'}
                    />
                    <Input 
                        placeholder={'Email'}
                    />
                    <Input 
                        placeholder={'Password'}
                        secureTextEntry
                        hasImage={true}
                        source={image.passIcon}
                    />

                    <Text style={styles.documentText}>
                        {'* Please attach following documents'}
                    </Text>

                    <Button
                        marginTop={10}
                        backgroundColor={Colors.appBackgroundColor}
                        borderWidth={2}
                        width={250}
                        borderColor={Colors.themeGreen}
                        color={Colors.themeGreen}
                        fontSize={18}
                        title={'BR document'}
                    />
                    <Button
                        marginTop={10}
                        backgroundColor={Colors.appBackgroundColor}
                        borderWidth={2}
                        width={250}
                        borderColor={Colors.themeGreen}
                        color={Colors.themeGreen}
                        fontSize={18}
                        title={'ID front'}
                    />
                    <Button
                        marginTop={10}
                        backgroundColor={Colors.appBackgroundColor}
                        borderWidth={2}
                        width={250}
                        borderColor={Colors.themeGreen}
                        color={Colors.themeGreen}
                        fontSize={18}
                        title={'ID back'}
                    />
                    <Button
                        marginTop={10}
                        backgroundColor={Colors.appBackgroundColor}
                        borderWidth={2}
                        width={250}
                        borderColor={Colors.themeGreen}
                        color={Colors.themeGreen}
                        fontSize={18}
                        title={'Bank book'}
                    />

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('Shop_Dashboard')
                        }}
                        marginTop={30}
                        width={250}
                        fontSize={18}
                        title={'Agree & Create Store'}
                    />

                    <BottomText/>

                </ScrollView>
                
            </View>
        )
    }
}