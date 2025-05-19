import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    header_container:{
        marginTop:30, 
        marginBottom:20, 
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    header_txt:{
        fontWeight:"bold", 
        marginLeft:20, 
        fontSize:25,
    },
    btn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: color.blue,
        marginRight:20
    }, 
    modal_content_container:{
        backgroundColor:color.blue,
        borderRadius:10,
        alignItems:"center", 
        justifyContent:"center", 
        margin:10, 
        padding:5,
        width:"40%",
        aspectRatio:1.25,
    },
    modal_text:{
        marginTop:10, 
        fontSize:16, 
        textAlign:"center", 
        color:color.white, 
        fontWeight:"bold"
    },
    close_btn:{
        width:40,
        height:40,
        backgroundColor:color.blue,
        justifyContent:"center",
        alignItems:"center",
        position: "absolute",
        borderRadius: 100,
        right:-12,
        top:-14,
    }
})
