import React from "react";
import { View, Image, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import styles from './CustomDrawerContent.style';
import { useDispatch, useSelector } from "react-redux";
import { openEditPawModal, openAddPawModal, openEditUserModal, openLogOutModal, closeLogOutModal } from "../../redux/modalSlice";
import { getAuth, signOut } from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";
import CustomAlertModal from "../modals/CustomAlertModal/CustomAlertModal";

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();
    const { drawerType } = props;
    const dispatch = useDispatch();
    // const { isEditUserModalVisible, isAddPawModalVisible, isEditPawModalVisible } = useSelector((state) => state.modals)
    const { isLogOutModalVisible } = useSelector((state) => state.modals)

    const handleLogOut = async () => {
        console.log("handleLogout çalıştı")
        const auth = getAuth();
        try {
            await signOut(auth);
            dispatch(closeLogOutModal())
            navigation.navigate("AuthStack")
        } catch (error) {
            console.log("Çıkış Başarısız: ", error.message)
        }
    }

    const handleEditUser = () => {
        props.navigation.closeDrawer();
        dispatch(openEditUserModal());
    };

    const handleAddPaw = () => {
        props.navigation.closeDrawer();
        dispatch(openAddPawModal());
    };

    const handleEditPaw = () => {
        props.navigation.closeDrawer(),
            dispatch(openEditPawModal())
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <DrawerContentScrollView {...props} style={styles.drawer}>
                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={require('../../assets/main_Logo.png')}
                            style={styles.logo}
                        />
                    </View>
                    <TouchableOpacity style={styles.drawer_close} onPress={() => props.navigation.closeDrawer()}>
                        <Icon name="reorder-horizontal" size={30} color={color.blue} />
                    </TouchableOpacity>

                    <Text style={styles.vet_name}>Berke Asmakaya</Text>

                    <DrawerItemList {...props} />
                    {drawerType === "UserProfile" && (
                        <>
                            <View style={{ marginVertical: 10, }}>
                                <TouchableOpacity onPress={handleEditUser} style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
                                    <Icon name="account-edit" size={40} color={color.blue} />
                                    <Text style={{ fontWeight: "600", marginLeft: 12, color: color.blue, fontSize: 20 }}>Profili Düzenle</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 10, }}>
                                <TouchableOpacity onPress={handleAddPaw} style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
                                    <Icon name="paw" size={40} color={color.blue} />
                                    <Text style={{ fontWeight: "600", marginLeft: 12, color: color.blue, fontSize: 20 }}>Pati Ekle</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 10, }}>
                                <TouchableOpacity onPress={handleEditPaw} style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
                                    <Icon name="pencil-box" size={40} color={color.blue} />
                                    <Text style={{ fontWeight: "600", marginLeft: 12, color: color.blue, fontSize: 20 }}>Pati Düzenle</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}

                </DrawerContentScrollView>
                <View style={styles.logout_container}>
                    <TouchableOpacity style={styles.logout_inner_container} onPress={() => dispatch(openLogOutModal())}>
                        <Icon name="logout" size={40} color={color.brown} />
                        <Text style={styles.logout_text}>Çıkış Yap</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <CustomAlertModal 
                isVisible={isLogOutModalVisible}
                title="ÇIKIŞ YAP"
                message="Çıkış Yapmak İstediğinize Emin Misiniz ?"
                onClose={()=>dispatch(closeLogOutModal())}
                onConfirm={handleLogOut}
            />
        </>
    )
}
//log out sona at 
export default CustomDrawerContent;