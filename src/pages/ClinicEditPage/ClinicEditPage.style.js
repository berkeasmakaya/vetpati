import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const {width} = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    img_container:{
        flex:1,
        borderBottomWidth:5,
        borderBottomColor:color.orange,
        position: 'relative',
    },
    img:{
        width:"100%",
        height:"100%"
    },
    info_container:{
        flex:1,
        paddingHorizontal:15,
    },
    clinic_title:{
        fontWeight:"bold",
        fontSize:24,
        marginBottom:5,
    },
    edit_container:{
        flexDirection:'row',
        width:'100%',
        margin:10,
    },
    edit_text:{
        fontWeight:'bold',
        marginRight:10
    },
    clinic_working_hours:{
        fontWeight:"300",
        marginBottom:5
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
    overlay: {
        ...StyleSheet.absoluteFillObject, // bu tüm container'ı kaplar
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // saydam siyah
        justifyContent: 'center',
        alignItems: 'center', 
      },
      edit_main_photo:{
        width: 50,
        height: 50,
      },
      cancel_save_container:{
         alignSelf:'flex-start', justifyContent:'space-between', flexDirection:'row',  width:'100%',position:'absolute', top:10
        
      },
      cancel_save_button:{
        padding:10,
      },
      cancel_save_text:{
        color:'#fff',
        fontWeight:'bold',
        
      },
    //   edit_image_card:{
    //     width:width/4,
    //     height:width/4,
    //     borderRadius:10,

    //   },
    //   add_image_card:{
    //     width:width/4,
    //     height:width/4,
    //     borderRadius:10,
    //     backgroundColor:'blue'

    //   },
     
    //   edit_image_container:{
    //     position:'relative',
    //     width:width/4,
    //     height:width/4,
    //     margin:10,
    //     flexDirection:'row'

      
    //   },
    //   edit_overlay: {
    //     ...StyleSheet.absoluteFillObject, // bu tüm container'ı kaplar
    //     backgroundColor: 'rgba(0, 0, 0, 0.6)', // saydam siyah
    //     justifyContent: 'center',
    //     alignItems: 'center', 
    //     borderRadius:10

    //   },
    //   edit_icon:{
    //     width: 40,
    //     height: 40,
    //   },

    edit_image_card: {
        width: width / 4,
        height: width / 4,
        borderRadius: 10,
      },
      add_image_card: {
        width: width / 4,
        height: width / 4,
        borderRadius: 10,
        backgroundColor: 'blue',
      },
      edit_image_container: {
        position: 'relative',
        width: width / 4,
        height: width / 4,
        margin: 10,
      },
      edit_overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      paw_overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 150, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
      },
      edit_icon_card: {
        width: width / 6,
        height: width / 6,
      },
      edit_icon_container: {
        position: 'relative',
        width: width / 6,
        height: width / 6,
        margin: 10,
      },
      edit_icon: {
        width: 40,
        height: 40,
      },
      
})