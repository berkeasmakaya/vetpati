import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    modal:{

    },
    container:{
        backgroundColor:color.white,
        padding:10,
        flex:0.4,
        justifyContent:"center",
        borderRadius:10,
    },
    inner_container:{
        flexDirection: "row", 
        //backgroundColor:"yellow"
    },
    picker_container:{
        flex:1,
        alignItems: "center",
        paddingVertical:10,
        //backgroundColor:"blue"
    },
    picker_text:{
        fontSize: 14, 
        marginBottom: 4,
        color:color.blue,
        fontWeight:"bold"
    },
    picker:{
        width: "100%", 
        height: 120 
    },
    button_container:{
        marginTop: 50, 
        backgroundColor: color.blue, 
        padding: 10, 
        borderRadius: 8
    },
    button_text:{
        color: color.white, 
        textAlign: 'center',
        fontWeight:"bold"
    }
})