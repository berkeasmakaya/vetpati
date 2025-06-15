import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const deviceSize = Dimensions.get("window")
const headerHeight = deviceSize.height*0.4
const logoContainer = deviceSize.height*0.4
const bottomHeight = deviceSize.height * 0.1

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    header_container:{
        height:headerHeight,
        //backgroundColor:"red"
    },
    logo_container:{
        height:logoContainer,
        justifyContent:"space-around",
        alignItems:"center",
        //backgroundColor:"red",
    },
    logo:{
        width:deviceSize.height/6,
        height:deviceSize.height/6
    },
    welcome_text:{
        textAlign:"center", 
        color:color.blue,
        fontSize:deviceSize.width/20,
        fontWeight:"bold",
    },
    button_container:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        flexDirection:"row",
        //backgroundColor:"orange"
    },
    button:{
        justifyContent:"center", 
        alignItems:"center",
        width: deviceSize.width/2.5, 
        height:deviceSize.width/2.5, 
        borderRadius:10,
        margin:5
    },
    button_text:{
        fontSize:deviceSize.width/25,
        color:color.white,
        fontWeight:"bold",
        marginTop:"10%"
    },
    copy_right_container:{
        height:bottomHeight,
        justifyContent:"center",
        //backgroundColor:"yellow"
    },
    copy_right:{
        textAlign:"center"
    }
})