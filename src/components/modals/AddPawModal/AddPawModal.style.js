import { StyleSheet } from "react-native";
import color from "../../../styles/color";

export default StyleSheet.create({
    modal: {
        margin: 0
    },
    container: {
        flex: 1,
        backgroundColor: color.backgroundGray
    },
    header: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 15,
        //backgroundColor:"yellow"
    },
    btn: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10
    },
    btn_text: {
        color: color.blue,
        fontWeight: "bold",
        fontSize: 16
    },
    input_main_container: {
        flex: 1.5,
        justifyContent: "center",

        //backgroundColor: "red"
    },
    input_container: {
        marginVertical: 10,
    },
    input_text: {
        marginLeft: "4%",
        color: color.brown,
        fontWeight: "bold"
    },
    age_pick_btn:{
        marginLeft:"4%", 
        marginTop:10, 
        backgroundColor:color.blue, 
        alignSelf:"flex-start",
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10
    },
    age_pick_btn_text:{
        color:color.white,
        fontWeight:"bold"
    },
    buton_container: {
        flex: 1,
        padding: 20,
        justifyContent: "flex-end"
    },
    add_img_paw_container:{
        flex:2,
        //backgroundColor:"blue",
        justifyContent:"center",
        alignItems:"center"
    },
    add_img_paw: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.green,
        borderRadius: 10,
        marginBottom: 20

    },
    error:{
        color:"#000000",
        fontWeight:"bold",
        fontSize:15,
        textAlign:"center"
    },
})