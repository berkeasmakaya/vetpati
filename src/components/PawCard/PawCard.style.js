import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const width = Dimensions.get("window").width

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        margin:10,
        borderRadius:10,
        padding:10,
        backgroundColor:color.white,
        shadowOffset:{
            width:5,
            height:5
        },
        shadowOpacity:0.6,
        shadowRadius:5,

        elevation:12,
    },
    image_container:{
        flex:0.35,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        flex:1,      
        width:"100%",
        height:"100%",
        borderRadius:10,
        borderColor:color.backgroundGray,
        //backgroundColor:color.backgroundGray
    },
    content_container:{
        flex:0.65,  
        paddingLeft:10,
    },
    content_info_container:{
        padding:10,
        justifyContent:"space-between"
    },
    paw_name:{
        fontSize:width/25, 
        fontWeight:"bold"
    },
    paw_age:{
        fontSize:13
    },
    content_butons_container:{
        marginVertical:10,
    },
    buttons:{
        flex:1,
        borderRadius:7, 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center",
        marginVertical:2.5, 
        paddingVertical:5
    },
    buttons_text:{
        color:color.white, 
        fontWeight:"bold"
    }
})