import { StyleSheet, Dimensions } from "react-native"
import color from "../../../styles/color";

const deviceSize = Dimensions.get("window");
const headerHeight = deviceSize.height * 0.2; 
const inputHeight = deviceSize.height * 0.6
const btnContainerHeight = deviceSize.height * 0.1
const bottomHeight = deviceSize.height * 0.1;

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    scrollContainer: {
      flexGrow: 1, 
    },
    pageContainer:{
        flex: 1,
        backgroundColor: color.backgroundGray,
        //backgroundColor:"red"
    },
    logo_container:{
        height:headerHeight,
        justifyContent:"flex-end",
        alignItems:"center",
        //backgroundColor:"red"
    },
    logo:{
        width:'60%',
        height:'60%',
        marginBottom:"3%"
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
        marginLeft: '5%',
        marginBottom:"-1%"
    },
    btn_container:{
        height:btnContainerHeight,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"orange"
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
        //backgroundColor:"yellow",
    },
    text:{
        color:'#000000'
    },
    text_2:{
        color:'#000000',
        fontWeight:"bold"
    }
})