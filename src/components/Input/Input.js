import React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import styles from './Input.style';

const Input = ({placeholder, value, onType, isSecure, onBlur}) => {
    return(
        <SafeAreaView style={styles.container}>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                placeholder={placeholder}
                value={value}
                onChangeText={onType}
                onBlur={onBlur}
                secureTextEntry={isSecure}
            />
        </SafeAreaView>
        
    )
}

export default Input;