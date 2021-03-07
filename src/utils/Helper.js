import {Dimensions } from "react-native";
export default class Helper {
    static screenWidth = Math.round(Dimensions.get('window').width);
    static screenHeight = Math.round(Dimensions.get('window').height);
}

