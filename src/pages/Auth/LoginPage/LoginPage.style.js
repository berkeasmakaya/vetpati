import { StyleSheet, Dimensions } from "react-native";
import color from "../../../styles/color"

const deviceSize = Dimensions.get("window");
const headerHeight = deviceSize.height * 0.35;
const bottomHeight = deviceSize.height * 0.09;

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
    input_container:{
        flex:1,
        justifyContent:"center",
        //backgroundColor:"blue",
    },
    mail_input:{
        //backgroundColor:"red",
        marginVertical:10
    },
    password_input:{
        //backgroundColor:"yellow",
        marginVertical:10,
    },
    input_text:{
        color:color.brown,
        marginLeft:'5%',
    },
    btn_container:{
        paddingHorizontal:10
    },
    error:{
        color:"#000000",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center"
    },
    forgot_password_container:{
        marginTop:20,
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