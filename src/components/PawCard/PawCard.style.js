import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const width = Dimensions.get("window").width

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        //borderWidth:1,
        margin:20,
        borderRadius:10,
        padding:10,
        backgroundColor:color.backgroundGray,
        shadowOffset:{
            width:5,
            height:5
        },
        shadowOpacity:0.6,
        shadowRadius:5,

        elevation:12,
    },
    image_container:{
        //backgroundColor:"red",
        borderRadius:10,
        flex:0.25,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    image:{
        borderWidth:5,
        borderRadius:50,
        width:100,
        height:100,
        borderColor:color.white
    },
    content_container:{
        flex:0.75,  
        paddingLeft:10,
    },
    content_info_container:{
        flexDirection:"row",
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
    content_edit_btn_container:{
        //backgroundColor:"red"
    },
    buttons_container:{
        //backgroundColor:"yellow",
    },
    butons:{
        flex:1, 
        margin: 5, 
        paddingHorizontal: 10, 
        paddingVertical: 5,  
        borderRadius:6,
    },
    butons_text:{
        textAlign: "center", 
        color:color.white, 
        fontWeight:"bold",
        fontSize:width/30
    }
})