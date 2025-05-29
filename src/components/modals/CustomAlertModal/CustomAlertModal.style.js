import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    container:{
        backgroundColor:color.blue,
        borderRadius:10,
        alignItems:"center",
        paddingVertical:15
    },
    header:{
       backgroundColor:"yellow",
       justifyContent:"center",
       alignItems:"center"
    },
    title:{
        fontSize:20,
        color:color.white,
        fontWeight:"bold",
        marginBottom:15
    },
    message:{
        fontSize:16,
        textAlign:"center",
        color:color.white,
        marginBottom:20,
    },
    button_container:{
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '100%',
    },
    cancel_button:{
        flex:1,
        backgroundColor:color.white,
        padding:10,
        alignItems:"center",
        marginHorizontal:10,
        borderRadius:5
    },
    cancel_text:{
        color: color.blue,
        fontSize: 16,
        fontWeight:"bold"
    },
    confirm_button:{
        flex:1,
        backgroundColor:color.white,
        padding:10,
        alignItems:"center",
        marginHorizontal:10,
        borderRadius:5,
    },
    confirm_text:{
        color: color.blue,
        fontSize: 16,
        fontWeight:"bold"
    }

})