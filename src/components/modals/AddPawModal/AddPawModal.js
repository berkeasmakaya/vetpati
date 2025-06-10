import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View, Text, Alert, Image } from "react-native";
import Modal from 'react-native-modal'
import Input from "../../Input/Input";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './AddPawModal.style'
import Button from "../../Button/Button";
import color from "../../../styles/color";
import { Formik } from "formik";
import * as Yup from 'yup'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomModal from "../CustomModal/CustomModal";
import PawAgePickerModal from "../PawAgePickerModal/PawAgePickerModal.js";
import { createPet } from "../../../services/petApi.js";
import { getUserData } from "../../../services/userApi.js";
import Loading from "../../Loading/Loading.js";
import { getAuth } from "@react-native-firebase/auth";
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import PawSpeciesPickerModal from "../PawSpeciesPickerModal/PawSpeciesPickerModal.js";
import { uploadPetImage } from "../../../services/petApi.js";
import defaultDogImage from "../../../assets/icon_dog.png";
import defaultCatImage from "../../../assets/icon_cat.png";
import defaultBirdImage from "../../../assets/icon_bird.png";
import defaultRabbitImage from "../../../assets/icon_rabbit.png";

const initialFormValues = {
    pawName: '',
};

const validationSchema = Yup.object().shape({
    pawName: Yup.string()
        .required("Pati ismi boş bırakılamaz!")
});

const getDefaultImageForSpecies = (species) => {
    console.log(species)
  switch (species) {
    case "Köpek":
      return Image.resolveAssetSource(defaultDogImage).uri;
    case "Kedi":
      return Image.resolveAssetSource(defaultCatImage).uri;
    case "Kuş":
      return Image.resolveAssetSource(defaultBirdImage).uri;
    case "Tavşan":
      return Image.resolveAssetSource(defaultRabbitImage).uri;
  }
};

const AddPawModal = ({ isVisible, onClose, onAddSuccess }) => {

    const [pawImage, setPawImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false)

    const [ageText, setAgeText] = useState("Yaş Seç");
    const [speciesText, setSpeciesText] = useState("Tür Seç");

    const [pawAgeVisible, setPawAgeVisible] = useState(false)
    const [selectedYear, setSelectedYear] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)

    const [pawSpeciesVisible, setPawSpeciesVisible] = useState(false);
    //const [selectedSpecies, setSelectedSpecies] = useState(null);

    const [loading, setLoading] = useState(false)

    const handleAgeSave = (year, month) => {
        setSelectedYear(year);
        setSelectedMonth(month);

        let text = "";
        if (year > 0) text += `${year} yıl `;
        if (month > 0) text += `${month} ay`;
        const finalText = text.trim() || "0 ay";

        setAgeText(finalText);
    };

    const handleSpeciesSave = (species) => {
        //setSelectedSpecies(species);
        setSpeciesText(species);
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

    const handleAddPaw = async (values) => {
        if (selectedYear === null && selectedMonth === null) {
            console.log("Lütfen pati yaşını seçin"); //alert ekle
            return;
        }

        setLoading(true)
        const auth = getAuth();

        try {
            const uid = auth.currentUser.uid
            const userData = await getUserData(uid);
            const ownerId = userData._id;

            let imageUrl;

            if (pawImage) {
                imageUrl = await uploadPetImage(pawImage.uri);
            } else {
                imageUrl = getDefaultImageForSpecies(speciesText);
            }

            const petData = {
                name: values.pawName,
                age: ageText,
                image: imageUrl,
                species: speciesText,
            }
            await createPet(ownerId, petData);
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Başarılı",
                textBody: "Patiniz Başarıyla Oluşturuldu!",
                autoClose: 800
            })
            setPawImage(null)
            setSelectedMonth(null)
            setSelectedYear(null)
            setLoading(false)
            onClose()

            if (onAddSuccess) {
                await onAddSuccess(); // pet'leri güncelle
            }

        } catch (error) {
            console.log(error)
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: "Hata",
                textBody: "Bilgiler güncellenemedi.",
                autoClose: 800
            });
        } finally {
            setLoading(false)
        }
    }

    return (
        <Modal isVisible={isVisible} style={styles.modal}>
            {loading && <Loading />}
            <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleAddPaw}>
                {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                    <>
                        <SafeAreaView style={styles.container}>
                            <View style={styles.header}>
                                <TouchableOpacity style={styles.btn} onPress={onClose}>
                                    <Text style={styles.btn_text} >İptal</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                                    <Text style={styles.btn_text}>Kaydet</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.input_main_container}>
                                <View style={styles.input_container}>
                                    <Text style={styles.input_text}>Pati İsmi</Text>
                                    <Input
                                        value={values.pawName}
                                        placeholder="Pati İsmi Giriniz..."
                                        onBlur={handleBlur('pawName')}
                                        onType={handleChange('pawName')}
                                    />
                                    {touched.pawName && errors.pawName && (
                                        <Text style={styles.error}>{errors.pawName}</Text>
                                    )}
                                </View>
                                <View style={styles.input_container}>
                                    <Text style={styles.input_text}>Pati Yaşı</Text>
                                    <TouchableOpacity style={styles.age_pick_btn} onPress={() => setPawAgeVisible(true)}>
                                        <Text style={styles.age_pick_btn_text}>{ageText}</Text>
                                    </TouchableOpacity>
                                    <PawAgePickerModal isVisible={pawAgeVisible} onClose={() => setPawAgeVisible(false)} onSave={handleAgeSave} />
                                </View>
                                <View style={styles.input_container}>
                                    <Text style={styles.input_text}>Pati Türü</Text>
                                    <TouchableOpacity style={styles.age_pick_btn} onPress={() => setPawSpeciesVisible(true)}>
                                        <Text style={styles.age_pick_btn_text}>{speciesText}</Text>
                                    </TouchableOpacity>
                                    <PawSpeciesPickerModal isVisible={pawSpeciesVisible} onClose={() => setPawSpeciesVisible(false)} onSave={handleSpeciesSave} />
                                </View>
                            </View>

                            <View style={styles.add_img_paw_container}>
                                {!pawImage ? (<TouchableOpacity style={styles.add_img_paw} onPress={() => setModalVisible(true)}>
                                    <Icon name="plus" size={40} color={color.white} />
                                </TouchableOpacity>) : (
                                    <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                                        <Image
                                            source={{ uri: pawImage.uri }}
                                            style={{ width: 200, height: 200, }}
                                            resizeMode="cover"
                                        />
                                    </TouchableOpacity>)}

                                <CustomModal
                                    isVisible={modalVisible}
                                    title={"Fotoğraf Yükle"}
                                    message={"Bir Seçenek Belirleyin"}
                                    onClose={() => setModalVisible(false)}
                                    buttons={[
                                        { text: "Galeriden Seç", onPress: handleOpenGallery, theme: "fourth" },
                                        { text: "Fotoğraf Çek", onPress: handleOpenCamera, theme: "third" },
                                        { text: "İptal", onPress: () => setModalVisible(false), theme: "primary" },
                                    ]}
                                />

                            </View>

                            <View style={styles.buton_container}>
                                <Button text="Kaydet" theme='fourth' onPress={handleSubmit} />
                            </View>

                        </SafeAreaView>
                    </>
                )}
            </Formik>

        </Modal>
    )
}

export default AddPawModal;