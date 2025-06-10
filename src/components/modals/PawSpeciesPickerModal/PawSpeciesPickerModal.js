import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from 'react-native-modal';
import { Picker } from "@react-native-picker/picker";
import styles from './PawSpeciesPickerModal.style'

const PawSpeciesPickerModal = ({ isVisible, onClose, onSave }) => {
    const [species, setSpecies] = useState("Kedi");

    const handleSave = () => {
        onSave(species);
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
                        <Text style={styles.picker_text}>Tür</Text>
                        <Picker
                            selectedValue={species}
                            onValueChange={(itemValue) => setSpecies(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Kedi" value="Kedi" />
                            <Picker.Item label="Köpek" value="Köpek" />
                            <Picker.Item label="Tavşan" value="Tavşan" />
                            <Picker.Item label="Kuş" value="Kuş" />
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

export default PawSpeciesPickerModal;