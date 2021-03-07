import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import {Colors} from '../../utils/colors'
import {backIcon} from '../../utils/imagePath'
import commonStyle from '../../utils/commonStyles'
import {Fonts} from '../../utils/fonts'

export default class AppBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={[styles.myContainerStyle,commonStyle.backIconContainer]}>
                    <Image source={backIcon} style={[styles.backIconStyle, commonStyle.backIconSize]} />
                </TouchableOpacity>

                <Text style={styles.headerTitle}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        backgroundColor: Colors.themeBlue,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    backIconStyle:{
        tintColor: 'white',
    },
    headerTitle: {
        fontSize: 18,
        color: 'white',
        fontFamily:Fonts.PoppinsRegular
    },
    myContainerStyle:{
        position:'absolute',
        left:0
    }
})