import { StyleSheet } from "react-native";
import color from "../../styles/color"
import { Dimensions } from "react-native";

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        width:deviceSize.height/12,
        height:deviceSize.height/12,
        backgroundColor:color.white,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    }
})