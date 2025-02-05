import React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import styles from './Input.style';

const Input = ({placeholder, value, onType, isSecure, onBlur,autoCapitalize,keyboardType}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                value={value}
                onChangeText={onType}
                onBlur={onBlur}
                secureTextEntry={isSecure}
                keyboardType={keyboardType}
            />
        </View>
        
    )
}

export default Input;