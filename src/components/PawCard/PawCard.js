import React, {useState} from "react";
import { Image, TouchableOpacity, View, Text, FlatList } from "react-native";
import styles from './PawCard.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import EditPawModal from "../modals/EditPawModal/EditPawModal";
import { useSelector, useDispatch } from "react-redux";
import { openEditPawModal, closeEditPawModal } from "../../redux/modalSlice";


const data = [
    { id: 1, name: "Aşı Takvimi", color: "red" },
    { id: 2, name: "Randevular", color: color.green },
    { id: 3, name: "Raporlar", color: color.blue },
    { id: 4, name: "Notlar", color: color.orange }
]


const PawCard = () => {
    //const [isEditPawModalVisible, setEditPawModalVisible] = useState(false);
    const dispatch = useDispatch();
    const {isEditPawModalVisible} = useSelector((state)=>state.modals);
    const renderButtons = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.butons, {backgroundColor:item.color}]}>
                <Text style={styles.butons_text}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>

            <View style={styles.image_container}>
                <Image 
                    source={require('../../assets/kedi.jpg.webp')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.content_container}>

                <View style={styles.content_info_container}>
                    <View>
                        <Text style={styles.paw_name} >Mırnav - Tatlı Bir Kedi</Text>
                        <Text style={styles.paw_age}>Yaş: 2 Yıl 4 Ay</Text>
                    </View>
                    <View style={styles.content_edit_btn_container}>
                        <TouchableOpacity style={{backgroundColor:color.orange, padding:7, borderRadius:50,}} onPress={()=>dispatch(openEditPawModal())}>
                            <Icon name="pencil" color={color.white} size={25} />
                        </TouchableOpacity>
                        <EditPawModal isVisible={isEditPawModalVisible} onClose={()=>dispatch(closeEditPawModal())} />
                    </View>
                </View>

                <View style={styles.buttons_container}>
                    <FlatList
                        data={data}
                        renderItem={renderButtons}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                    />
                </View>

            </View>
        </View>
    )
}

export default PawCard