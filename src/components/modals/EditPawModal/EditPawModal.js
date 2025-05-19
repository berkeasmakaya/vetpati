import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View, Text, Alert, Image } from "react-native";
import Modal from 'react-native-modal'
import Input from "../../Input/Input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './EditPawModal.style'
import Button from "../../Button/Button";
import color from "../../../styles/color";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomModal from "../CustomModal/CustomModal";
import PawAgePickerModal from "../PawAgePickerModal/PawAgePickerModal.js";

const AddPawModal = ({ isVisible, onClose }) => {
    const [pawImage, setPawImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false)
    
    const [pawAgeVisible, setPawAgeVisible] = useState(false)
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)

    const handleAgeSave = (year, month) => {
        setSelectedMonth(month);
        setSelectedYear(year);
    }
    const renderAgeText = () => {
        if (selectedYear === null && selectedMonth === null) return "Yaş Seç";
        let text = "";
        if (selectedYear > 0) text += `${selectedYear} yıl `;
        if (selectedMonth > 0) text += `${selectedMonth} ay`;
        return text.trim();
    };
    
    const handleOpenCamera = () => {
        launchCamera({ mediaType: 'photo' }, (response) => {
            if (response.assets?.[0]?.uri) {
                setPawImage({ uri: response.assets[0].uri });
            }
        });
    };

    const handleOpenGallery = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (!response.didCancel && !response.errorCode) {
                if (response.assets && response.assets.length > 0) {
                    setPawImage({ uri: response.assets[0].uri });
                }
            }
            setModalVisible(false)
        });
    }
    return (
        <Modal isVisible={isVisible} style={styles.modal}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btn} onPress={onClose}>
                        <Text style={styles.btn_text} >İptal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={onClose}>
                        <Text style={styles.btn_text}>Kaydet</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.input_main_container}>
                    <View style={styles.input_container}>
                        <Text style={styles.input_text}>Pati İsmi</Text>
                        <Input placeholder="Pati İsmi Giriniz..." />
                    </View>
                    <View style={styles.input_container}>
                        <Text style={styles.input_text}>Pati Yaşı</Text>
                        <TouchableOpacity style={styles.age_pick_btn} onPress={()=>setPawAgeVisible(true)}>
                            <Text style={styles.age_pick_btn_text}>{renderAgeText()}</Text>
                        </TouchableOpacity>
                        <PawAgePickerModal isVisible={pawAgeVisible} onClose={()=>setPawAgeVisible(false)} onSave={handleAgeSave} />
                    </View>
                </View>

                <View style={styles.add_img_paw_container}>
                    {!pawImage ? (<TouchableOpacity style={styles.add_img_paw} onPress={() => setModalVisible(true)}>
                        <Icon name="plus" size={40} color={color.white} />
                    </TouchableOpacity>) : (
                        <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                            <Image
                                source={{ uri: pawImage.uri }}
                                style={{ width: 200, height: 200, }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>)}

                    <CustomModal
                        isVisible={modalVisible}
                        title={"Fotoğraf Yükle"}
                        message={"Bir Seçenek Belirleyin"}
                        onClose={() => setModalVisible(false)}
                        buttons={[
                            { text: "Galeriden Seç", onPress: handleOpenGallery, theme: "fourth" },
                            { text: "Fotoğraf Seç", onPress: handleOpenCamera, theme: "third" },
                            { text: "İptal", onPress: () => setModalVisible(false), theme: "primary" },
                        ]}
                    />

                </View>

                <View style={styles.buton_container}>
                    <Button text="Kaydet" theme='fourth' />
                </View>

            </SafeAreaView>
        </Modal>
    )
}

export default AddPawModal;