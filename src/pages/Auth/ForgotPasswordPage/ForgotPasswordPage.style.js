import { Dimensions, StyleSheet } from "react-native";
import color from "../../../styles/color";

const deviceSize = Dimensions.get("window")
const logoContainerHeight = deviceSize.height*0.3
const innerHeight = deviceSize.height*0.48
const headerHeight = deviceSize.height* 0.1
const btnHeight = deviceSize.height * 0.1

export default StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:color.backgroundGray
    },
    image_container:{
        //backgroundColor:"red", 
        height:logoContainerHeight,
        justifyContent:"flex-end", 
        alignItems:"center",
    },
    image:{
        height:"70%", 
        width:"70%",
        paddingBottom:"5%"
    },
    header_container:{
        height:headerHeight,
        //backgroundColor:"yellow",
        justifyContent:"center"
    },
    header:{
        textAlign:"center", 
        fontSize:deviceSize.width/20, 
        fontWeight:"bold", 
        color:color.brown,
        //marginVertical:"5%"
    },
    inner_container:{
        height:innerHeight, 
        paddingTop:"5%",
        //backgroundColor:"blue"
    },
    input_main_container:{

    },
    input_container:{ 
        marginBottom:"4%"
    },
    input_text:{
        marginLeft:"5%",
        color:color.brown,
        fontWeight:"bold"
    },
    buton_container:{
        height:btnHeight,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"red"
    },
    error:{
        color:"black",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center"
    }
})