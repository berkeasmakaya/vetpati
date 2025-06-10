import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from 'react-native-modal';
import { Picker } from "@react-native-picker/picker";
import styles from './PawAgePickerModal.style'

const PawAgePickerModal = ({ isVisible, onClose, onSave }) => {
    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(1);

    const handleSave = () => {
        onSave(year, month);
        onClose()
    }
    return (
        <Modal 
            isVisible={isVisible}
            style={styles.modal}
        >
            <View style={{alignItems:"center"}}>
                <Image 
                    source={require('../../../assets/main_Logo.png')}
                    style={{width:75, height:75, top:30, zIndex:1}}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.inner_container}>
                    <View style={styles.picker_container}>
                        <Text style={styles.picker_text}>Yıl</Text>
                        <Picker
                            selectedValue={year}
                            onValueChange={(itemValue) => setYear(itemValue)}
                            style={styles.picker}
                        >
                            {Array.from({ length: 21 }, (_, i) => (
                                <Picker.Item key={i} label={`${i}`} value={i} />
                            ))}
                        </Picker>
                    </View>
                    <View style={styles.picker_container}>
                        <Text style={styles.picker_text}>Ay</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={month}
                            onValueChange={(itemValue) => setMonth(itemValue)}
                        >
                            {Array.from({ length: 11 }, (_, i) => (
                                <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity onPress={handleSave} style={styles.button_container}>
                    <Text style={styles.button_text}>Kaydet</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )

}

export default PawAgePickerModal;