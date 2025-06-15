import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const device_Size = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    img_container:{
        flex:1.5,
        borderBottomWidth:5,
        borderBottomColor:color.orange
    },
    img:{
        width:"100%",
        height:"100%"
    },
    info_container:{
        //flex:1,
        //justifyContent:"center",
        alignItems:"center",
        paddingVertical:10,
        //paddingHorizontal:15,
        //backgroundColor:"orange"
    },
    clinic_title:{
        fontWeight:"bold",
        fontSize:24,
        marginBottom:5,
        //backgroundColor:"blue"
    },
    clinic_working_hours:{
        fontWeight:"300",
        marginBottom:10
    },
    clinic_info:{
        fontWeight:"500",
        fontStyle:"italic"
    },
    slider_container:{
        flex:1.25,
        justifyContent:"center",
        alignItems:"center",
    },
    slider:{
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{
            width:5,
            height:5
        },
        shadowOpacity:0.6,
        shadowRadius:5,

        elevation:12,
    },
    slider_img:{
        width:"100%",
        height:"100%",
        borderRadius:10
    },
    float_buttons_container:{
        //backgroundColor:"blue",
        flex:0.7,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
        
    },
    buton_container:{
        flex:0.6,
        paddingHorizontal:10,
        justifyContent:"center",
        //backgroundColor:"red",
        paddingBottom:10,
    },

    edit_btn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        borderRadius: 100,
        backgroundColor: color.white,
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
})