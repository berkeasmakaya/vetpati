import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import styles from './PawCard.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import EditPawModal from "../modals/EditPawModal/EditPawModal";
import { useSelector, useDispatch } from "react-redux";
import { openEditPawModal, closeEditPawModal } from "../../redux/modalSlice";
import CustomAlertModal from "../modals/CustomAlertModal/CustomAlertModal";
import { deletePet } from "../../services/petApi";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import Loading from "../Loading/Loading";


// const data = [
//     { id: 1, name: "Aşı Takvimi", color: "red" },
//     { id: 2, name: "Randevular", color: color.green },
//     { id: 3, name: "Raporlar", color: color.blue },
//     { id: 4, name: "Notlar", color: color.orange }
// ]


const PawCard = ({ pet, fetchPets }) => {
    //const [isEditPawModalVisible, setEditPawModalVisible] = useState(false);
    const dispatch = useDispatch();
    const { isEditPawModalVisible } = useSelector((state) => state.modals);
    const [isCustomAlertModalVisible, setIsCustomAlertModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleDeletePaw = async () => {
        setLoading(true)
        try {
            console.log(pet._id)
            await deletePet(pet._id)
            await fetchPets()
            setLoading(false)
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Başarılı",
                textBody: "Patiniz Başarıyla Silinid!"
            })
            setIsCustomAlertModalVisible(false)
        } catch (error) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: "Hata",
                textBody: "Bilgiler güncellenemedi.",
                autoClose: 800
            });
            setIsCustomAlertModalVisible(false)
        } finally{
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            {loading && <Loading />}

            <View style={styles.image_container}>
                <Image
                    source={pet.image ? { uri: pet.image } : require('../../assets/icon_dog.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.content_container}>

                <View style={styles.content_info_container}>
                    <View>
                        <Text style={styles.paw_name} >{pet.name}</Text>
                        <Text style={styles.paw_age}>Yaş: {pet.age}</Text>
                    </View>

                    <View style={styles.content_butons_container}>

                        <TouchableOpacity style={[styles.buttons, { backgroundColor: color.orange }]} onPress={() => dispatch(openEditPawModal())}>
                            <Text style={styles.buttons_text}>Düzenle</Text>
                            {/* <Icon name="pencil" color={color.white} size={20} /> */}
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.buttons, { backgroundColor: "red" }]} onPress={() => setIsCustomAlertModalVisible(true)}>
                            <Text style={styles.buttons_text}>Sil</Text>
                            {/* <Icon name="delete" color={color.white} size={20} /> */}
                            <CustomAlertModal
                                isVisible={isCustomAlertModalVisible}
                                title="Pati Sil"
                                message="Patinizi Gerçekten Silmek İsteediğinize Emin Misiniz ?"
                                onClose={() => setIsCustomAlertModalVisible(false)}
                                onConfirm={handleDeletePaw}
                            />
                        </TouchableOpacity>

                        <EditPawModal isVisible={isEditPawModalVisible} onClose={() => dispatch(closeEditPawModal())} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default PawCard