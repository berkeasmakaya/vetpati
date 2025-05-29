import { StyleSheet, Dimensions } from "react-native";
import color from "../../styles/color";

const {width} = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.backgroundGray
    },
    img_container:{
        flex:0.5,
        borderBottomWidth:5,
        borderBottomColor:color.orange,
        position: 'relative',
    },
    img:{
        width:"100%",
        height:"100%"
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
    }
})