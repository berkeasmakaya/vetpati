import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";


const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    header_container:{
        flex:0.7,
        //backgroundColor:"red"
    },
    logo_container:{
        flex:0.9,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"red"
    },
    logo:{
        width:deviceSize.height/5,
        height:deviceSize.height/5
    },
    welcome_text:{
        textAlign:"center", 
        color:color.blue,
        fontSize:deviceSize.width/20,
        fontWeight:"bold"
    },
    button_container:{
        flex:1,
        paddingTop:20,
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
        marginTop:5
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