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
    image_container:{
        flex:5,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"red"
    },
    image:{
        width:'100%',
        height:'100%'
    },
    logo_container:{
        flex:1,
        backgroundColor:"yellow",
    },
    button_container:{
        flex:1,
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