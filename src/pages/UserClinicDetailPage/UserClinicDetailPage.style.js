import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const {width} = Dimensions.get("window")


export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray,
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
    back_btn:{
        backgroundColor: color.blue, 
        justifyContent: "center", 
        alignItems: "center", 
        height: 40, 
        width: 40, 
        borderRadius: 50, 
        position: "absolute", 
        left:20,
        ...Platform.select({
            ios: {
              top: 50,
              
            },
            android: {
              top: 20,
            },
          }),
    },
    info_container:{
        //backgroundColor:"red",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:30,
        paddingHorizontal:15,
    },
    clinic_title:{
        fontWeight:"bold",
        fontSize:24,
        marginBottom:5,
    },
    clinic_working_hours:{
        fontWeight:"300",
        marginBottom:5
    },
    clinic_info:{
        fontWeight:"400",
        fontStyle:"italic"
    },
    slider_container:{
        flex:1.25,
        //backgroundColor:"yellow",
        justifyContent:"center",
        alignItems:"center",
        shadowColor:"#000",
        shadowOffset:{
            width:5,
            height:5
        },
        shadowOpacity:0.5,
        shadowRadius:5,

        elevation:8
    },
    slider:{
        borderRadius:10,
        width:"80%",
        height:"80%",
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
    },
    get_location_button:{
        backgroundColor:color.blue,
        paddingVertical:5,
        paddingHorizontal:15,
        alignSelf:'center',
        borderRadius:8,
        shadowColor:"#000",
        shadowOffset:{
            width:5,
            height:5
        },
        shadowOpacity:0.5,
        shadowRadius:5,

        elevation:8
    }
})