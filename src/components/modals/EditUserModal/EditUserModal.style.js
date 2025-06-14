import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    modal:{
        margin:0,
        justifyContent:"flex-end"
    },
    container:{
        flex:0.85, 
        borderRadius:10,
        backgroundColor:color.backgroundGray
    },
    header:{
        //backgroundColor:"red",
        flex:0.5, 
        flexDirection:"row", 
        justifyContent:"space-between",
        paddingVertical:10,
        paddingHorizontal:15
    },
    buttons:{
        paddingVertical:10, 
        paddingHorizontal:5, 
        borderRadius:10
    },
    button_text:{
        color:color.blue, 
        fontWeight:"bold", 
        fontSize:16
    },
    input_main_container:{
        //backgroundColor:"yellow",
        flex:2, 
        justifyContent:"center"
    },
    input_container:{
        marginVertical:10
    },
    input_text:{
        
        marginLeft:"4%", 
        color:color.brown, 
        fontWeight:"bold"
    },
    buton_container:{
        //backgroundColor:"blue",
        flex:1, 
        padding:20, 
        justifyContent:"flex-end"
    }
})