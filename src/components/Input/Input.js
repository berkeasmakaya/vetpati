import React, { useState } from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import styles from './Input.style';
import color from "../../styles/color";

const Input = ({placeholder, value, onType, isSecure, onBlur,autoCapitalize,keyboardType, multiline}) => {
    const [isFocused, setIsFocused] = useState(false)
    return(
        <View style={styles.container}>
            <TextInput 
                style={[styles.input, isFocused && {borderColor:color.brown, borderWidth:2}]}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                value={value}
                onChangeText={onType}
                onBlur={()=>{
                    setIsFocused(false),
                    onBlur
                }}
                secureTextEntry={isSecure}
                keyboardType={keyboardType}
                multiline={multiline}
                onFocus={()=>setIsFocused(true)}
            />
        </View>
        
    )
}

export default Input;