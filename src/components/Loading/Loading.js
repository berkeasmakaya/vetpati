import React from "react";
import LottieView from "lottie-react-native";
import { Text, View } from "react-native";
import styles from './Loading.style'
import color from "../../styles/color";

const Loading = () => {
    return(
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/loading-2.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
            <Text style={{textAlign:"center", color:color.brown, fontWeight:"bold", fontSize:25, fontStyle:"italic"}}>YÜKLENİYOR...</Text>
        </View>
    )
}

export default Loading;