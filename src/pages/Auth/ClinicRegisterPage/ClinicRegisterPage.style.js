import { StyleSheet, Dimensions } from "react-native";
import color from "../../../styles/color";

const deviceSize = Dimensions.get("window");
const bottom_height = deviceSize.height * 0.05;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    logo_container:{
        flex:1.5,
        //backgroundColor:"red"
    },
    scrollContainer:{
        flexGrow:1,
    },
    input_container:{
        paddingVertical:15,
        flex:1,
        justifyContent:"space-around",
        //backgroundColor:"yellow"
    },
    input_text:{
        color:color.brown,
        marginBottom:-10,
        marginLeft:"7.5%",
    },
    button_container:{},
    bottom_container:{
        height:bottom_height,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        //backgroundColor:"blue"
    },
    text:{
        color:'#000000'
    },
    text_2:{
        color:'#000000',
        fontWeight:"bold"
    }
})