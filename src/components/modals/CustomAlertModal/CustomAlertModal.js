import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Modal from 'react-native-modal'
import styles from './CustomAlertModal.style'

const CustomAlertModal = ({isVisible, onClose, onConfirm, title, message}) => {
    return(
        <Modal
            isVisible={isVisible}
            animationIn="fadeInLeft"
            animationOut="fadeOutRight"
            animationInTiming={300}
            animationOutTiming={300}
            backdropOpacity={0.5}
            onBackdropPress={onClose}
        >
            <View style={styles.container}>
                <View>
                    <Image 
                        source={require('../../../assets/main_Logo.png')}
                        style={{width:50, height:50}}
                    />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.message}>{message}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.cancelButton}>
                        <Text style={styles.cancelText}>İptal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={styles.confirmText}>Tamam</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default CustomAlertModal;