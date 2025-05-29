import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";
import styles from './Loading.style'

const Loading = () => {
    return(
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/loading-2.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
        </View>
    )
}

export default Loading;