import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Modal from 'react-native-modal'
import styles from './CustomAlertModal.style'

const CustomAlertModal = ({isVisible, onClose, onConfirm, title, message}) => {
    return(
        <Modal
            isVisible={isVisible}
            animationIn="slideInLeft"
            animationOut="slideOutRight"
            animationInTiming={300}
            animationOutTiming={300}
            backdropOpacity={0.5}
            onBackdropPress={onClose}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.cancel_button} onPress={onClose}>
                        <Text style={styles.cancel_text}>İptal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirm_button} onPress={onConfirm}>
                        <Text style={styles.confirm_text}>Tamam</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomAlertModal;