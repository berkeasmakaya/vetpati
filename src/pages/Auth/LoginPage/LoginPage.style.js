import { StyleSheet, Dimensions } from "react-native";
import color from "../../../styles/color"

const deviceSize = Dimensions.get("window");
const headerHeight = deviceSize.height * 0.4;
const bottomHeight = deviceSize.height * 0.05;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    scrollContainer:{
        flexGrow:1,
    },
    header_container:{
        height:headerHeight,
    },
    image_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"red"
    },
    image:{
        width:'100%',
        height:'100%'
    },
    logo_container:{
        flex:0.25,
        //backgroundColor:"yellow",
    },
    input_container:{
        flex:1,
        justifyContent:"center",
        //backgroundColor:"blue",
    },
    input_text:{
        color:color.brown,
        textAlign:"left",
        marginLeft:30,
    },
    forgot_password:{
        color:color.brown,
        textAlign:"right",
        marginRight:30,
        fontWeight:"bold"
    },
    button_container:{
        //backgroundColor:"green"
    },
    bottom_container:{
        height:bottomHeight,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        //backgroundColor:"red"
    },
    text:{
        color:'#000000'
    },
    text_2:{
        color:'#000000',
        fontWeight:"bold"
    }
})