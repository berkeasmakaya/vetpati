import { StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        backgroundColor:color.white,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#000000",
        margin:15,
        padding:10,
    },
    image_container:{
        aspectRatio: 568/320,
    },
    image:{
        width:'100%',
        height:'100%'
    },
    info_container:{
        marginVertical:15,
    },
    clinic_name:{
        fontSize:17,
        fontWeight:"bold",
        marginBottom:5,
    },
    clinic_address:{
        fontSize:15,
        fontStyle:"italic"
    },
    animal_container:{

    },
    logo:{
        marginHorizontal:5,
        width:50,
        height:50
    }
})