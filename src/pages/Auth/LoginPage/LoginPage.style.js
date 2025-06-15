import { StyleSheet, Dimensions } from "react-native";
import color from "../../../styles/color"

const deviceSize = Dimensions.get("window");
const headerHeight = deviceSize.height * 0.30;
const inputHeight = deviceSize.height * 0.5;
const btnContainerHeight = deviceSize.height * 0.1
const bottomHeight = deviceSize.height * 0.1;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray,
    },
    scrollContainer:{
        flexGrow:1,
    },
    logo_container:{
        height:headerHeight,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"red"
    },
    logo:{
        width:'50%',
        height:'50%'
    },
    input_main_container:{
        height:inputHeight,
        justifyContent:"center",
        //backgroundColor:"blue",
    },
     input_container:{
        marginBottom:"4%"
    },
    input_text:{
        color:color.brown,
        marginLeft:'5%',
    },
    btn_container:{
        height:btnContainerHeight,
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"yellow"
    },
    error:{
        color:"#000000",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center"
    },
    forgot_password_container:{
        marginTop:"5%"
    },
    forgot_password:{
        color:color.brown,
        textAlign:"right",
        marginRight:"5%",
        fontWeight:"bold"
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