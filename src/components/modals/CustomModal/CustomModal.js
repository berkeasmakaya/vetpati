import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../../Button/Button";
import Modal from 'react-native-modal'
import styles from './CustomModal.style'

const CustomModal = ({isVisible, title, message, buttons = [], onClose}) => {
    return(
        <Modal 
            isVisible={isVisible}
            animationIn="fadeInDown"
            animationOut="fadeOutDown"
            animationInTiming={300}
            animationOutTiming={300}
            backdropOpacity={0.5}
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image 
                        source={require('../../../assets/main_Logo.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.header_container}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <View style={styles.buttons_container}>
                    {buttons.map((btn, index) => (
                        <View style={styles.button} key={index}>
                            <Button key={index} text={btn.text} onPress={btn.onPress} theme={btn.theme || "primary"}/>
                        </View>
                    ))}
                    
                </View>
            </View>
        </Modal>
    )
} 

export default CustomModal;