import { StyleSheet } from "react-native";
import color from "../../styles/color";


export default StyleSheet.create({
    container:{
        position: 'absolute', // Tüm ekranı kaplaması için
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor:color.white,
        //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam arka plan
        justifyContent: "center",
        alignItems: "center",
        zIndex:10
    },
    lottie:{
        width: 200, // Animasyon boyutu
        height: 200
    }
})