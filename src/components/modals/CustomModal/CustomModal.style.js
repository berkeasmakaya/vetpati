import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    modal:{
        justifyContent:"flex-end",
        margin:0,
    },  
    container:{
        flex:0.65,
        backgroundColor:color.white,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    image_container:{
        //backgroundColor:"red",
        alignItems:"center",
    },
    image:{
        width:80,
        height:80,
        top:-35
    },
    header_container:{
        
        //backgroundColor:"blue",
        marginTop:-10,
        padding:10,
    },
    title:{
        textAlign:"center",
        fontSize:23,
        fontWeight:"bold",
        color:color.brown,
        marginBottom:10
    },
    message:{
        textAlign:"center",
        fontSize:16,
        color:color.brown,
        fontWeight:"500"
    },
    buttons_container:{
        //backgroundColor:"red",
        padding:20,
        flex:0.8,
        justifyContent:"center"
    },
    button:{
        //backgroundColor:"yellow",
        marginVertical:10
    }
})