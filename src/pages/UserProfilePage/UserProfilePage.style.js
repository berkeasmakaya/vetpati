import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:color.backgroundGray
    },
    header_container:{
        //backgroundColor:"red", 
        flex:0.15, 
        justifyContent:"center", 
        alignItems:"center"
    },
    header_text:{
        fontSize:26, 
        fontWeight:"700"
    },
    drawer_button:{
        backgroundColor:color.blue, 
        borderRadius:50, 
        width:45, 
        height:45, 
        justifyContent:"center", 
        alignItems:"center", 
        position:"absolute", 
        right:20,
        ...Platform.select({
            ios: {
              top: 60,
              
            },
            android: {
              top: 30,
            },
          }),
    },
    info_container:{
        //backgroundColor:"green", 
        flex:0.20, 
        justifyContent:"flex-start", 
        alignItems:"center", 
        paddingTop:10
    },
    inner_info_container:{
        //backgroundColor:"blue",
        
    },
    edit_btn:{
        backgroundColor:color.blue, 
        justifyContent:"center", 
        alignItems:"center", 
        position:"absolute", 
        right:65,
        top:15, 
        width:30, 
        height:30, 
        borderRadius:50
    },
    name_container:{
        //backgroundColor:"red"
    },
    name:{
        fontSize:24, 
        fontWeight:"500"
    },
    address_phone_container:{
        flexDirection:"row", 
        marginTop:5,
        marginBottom:20
    },
    phone_number_address:{
        fontSize:13,
        fontWeight:"400"
    },
    add_paw_btn:{
        backgroundColor:color.blue,
        paddingVertical:5,
        paddingHorizontal:30,
        borderRadius:10
    },
    btn_text:{
        fontSize:18,
        color:color.white,
        fontWeight:"bold"
    }
})