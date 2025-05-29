import { Platform, StyleSheet } from "react-native";
import color from "../../styles/color";

export default StyleSheet.create({
    container:{
        flex:1
    },
    drawer:{
        paddingTop:0
    },
    logo:{
        height:100, 
        width:100
    },
    drawer_close:{
        position:"absolute", 
        left:10,
        ...Platform.select({
            ios: {
              top: 60,
              
            },
            android: {
              top: 20,
            },
          }), 
        
    },
    vet_name:{
        textAlign:"center", 
        marginVertical:20, 
        fontSize:20, 
        fontWeight:"bold", 
        color:color.brown
    },
    logout_container:{
        marginBottom:20
    },
    logout_inner_container:{
        flexDirection:"row", 
        alignItems:"center",
        marginLeft:15
    },
    logout_text:{
        fontSize:20, 
        color:color.brown, 
        fontWeight:"bold"
    }
})