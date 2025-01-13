import { StyleSheet, Dimensions } from "react-native";
import color from "../../../styles/color"

const deviceSize = Dimensions.get("window");
const headerHeight = deviceSize.height * 0.35;
const bottomHeight = deviceSize.height * 0.07;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray,
    },
    scrollContainer:{
        flexGrow:1,
    },
    header_container:{
        height:headerHeight,
        backgroundColor:"red"
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
    error:{
        color:"#000000",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center"
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
        //backgroundColor:"red",
    },
    text:{
        color:'#000000'
    },
    text_2:{
        color:'#000000',
        fontWeight:"bold"
    }
})