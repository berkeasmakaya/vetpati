import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const {width} = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray,
        justifyContent:'space-evenly'
    },
    img_container:{
        flex:0.7,
        borderBottomWidth:5,
        borderBottomColor:color.orange,
        position: 'relative',
    },
    img:{
        width:"100%",
        height:"100%",
    },
    edit_container:{
        width:'100%',
        margin:10,
        alignItems:'center'
    },
    edit_text:{
        fontWeight:'bold',
        marginRight:10
    },
    clinic_title:{
        fontWeight:"bold",
        fontSize:24,
        marginBottom:5,
    },
    exp_input:{
        width: '70%',
        padding: 12,
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Android gölge için
        alignSelf:'center'
    },
    add_pati_button:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:8,
        paddingHorizontal:15,
        alignSelf:'center',
        backgroundColor:color.blue,
        borderRadius:7,


    },
    check_card:{
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Android gölge için
        alignSelf:'center',
        margin:5,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
        
    },
    select_paw_card:{
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Android gölge için
        alignSelf:'center',
        margin:5,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
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
})