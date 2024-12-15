import React from "react";
import { TextInput, View } from "react-native";
import styles from './Input.style';

const Input = ({placeholder, value, onType, isSecure, onBlur}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                placeholder={placeholder}
                value={value}
                onChangeText={onType}
                onBlur={onBlur}
                secureTextEntry={isSecure}
            />
        </View>
        
    )
}

export default Input;