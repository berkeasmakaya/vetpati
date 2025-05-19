import { StyleSheet, Dimensions } from "react-native"
import color from "../../../styles/color";

const deviceSize = Dimensions.get("window");
const headerHeight = deviceSize.height * 0.35; 
const bottomHeight = deviceSize.height * 0.09;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    scrollContainer: {
      flexGrow: 1, 
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
    },
    mail_input:{
        marginVertical:10,
    },
    password_input:{
        marginVertical:10,
    },
    respassword_input:{
        marginVertical:10,
    },
    input_text:{
        color:color.brown,
        marginLeft: '5%',
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
    forgot_password:{
        color:color.brown,
        textAlign:"right",
        marginRight:'7.5%',
        fontWeight:"bold"
    },
    bottom_container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        height: bottomHeight ,
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