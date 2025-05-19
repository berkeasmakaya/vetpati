import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";


const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    header_container:{
        flex:1,
    },
    logo_container:{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"red"
    },
    logo:{
        width:'50%',
        height:'50%'
    },
    button_container:{
        flex:1,
        paddingHorizontal:10,
        justifyContent:"space-evenly",
        
    },
    copy_right_container:{
        flex:0.15,
        justifyContent:"center",
        //backgroundColor:"orange"
    },
    copy_right:{
        textAlign:"center"
    }
})