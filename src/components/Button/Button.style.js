import { StyleSheet } from "react-native";
import color from '../../styles/color';

const base_style = StyleSheet.create({
    container:{
        borderRadius:20,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        //margin:15,
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
    }
})

export default{
    primary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:color.brown,
            borderColor:color.brown,
        },
        text:{
            ...base_style.text,
            color:color.white,
        }
    }),
    secondary:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:color.white,
            borderColor:color.brown,
        },
        text:{
            ...base_style.text,
            color:color.brown,
        }
    }),
    third:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:color.green,
            borderColor:color.green,
        },
        text:{
            ...base_style.text,
            color:color.white,
        }
    }),
    fourth:StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:color.blue,
            borderColor:color.blue,
        },
        text:{
            ...base_style.text,
            color:color.white,
        }
    })
}