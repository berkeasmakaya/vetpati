import { StyleSheet, Dimensions } from "react-native"
import color from "../../../styles/color";

const deviceSize = Dimensions.get("window");
const headerHeight = deviceSize.height * 0.35; // Ekran yüksekliğinin %40'ı
const bottomHeight = deviceSize.height * 0.07

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    scrollContainer: {
      flexGrow: 1, 
    },
    header_container:{
        height: headerHeight,
        //backgroundColor:"yellow",
        
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
    input_container:{
        flex:1,
        justifyContent:"center",
    },
   input_text:{
        color:color.brown,
        textAlign:"left",
        marginLeft: '7.5%',
    },
    forgot_password:{
        color:color.brown,
        textAlign:"right",
        marginRight:'7.5%',
        fontWeight:"bold"
    },
    button_container:{
        //backgroundColor:"green"
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