import React from "react";
import { View, Image, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import styles from './CustomDrawerContent.style';
import { useDispatch, useSelector } from "react-redux";
import { openEditPawModal, openAddPawModal, openEditUserModal } from "../../redux/modalSlice";

const CustomDrawerContent = (props) => {
    const { drawerType } = props;
    const dispatch = useDispatch();
    const { isEditUserModalVisible, isAddPawModalVisible, isEditPawModalVisible } = useSelector((state) => state.modals)

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
                    <View style={{marginVertical:10,}}>
                        <TouchableOpacity onPress={handleEditUser} style={{flexDirection:"row", alignItems:"center", marginLeft:15}}>
                            <Icon name="account-edit" size={40} color={color.green} />
                            <Text style={{fontWeight:"600", marginLeft:12, color:color.green, fontSize:20}}>Profili Düzenle</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:10,}}>
                        <TouchableOpacity onPress={handleEditUser} style={{flexDirection:"row", alignItems:"center", marginLeft:15}}>
                            <Icon name="paw" size={40} color={color.green} />
                            <Text style={{fontWeight:"600", marginLeft:12, color:color.green, fontSize:20}}>Pati Ekle</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginVertical:10,}}>
                        <TouchableOpacity onPress={handleEditUser} style={{flexDirection:"row", alignItems:"center", marginLeft:15}}>
                            <Icon name="pencil-box" size={40} color={color.green} />
                            <Text style={{fontWeight:"600", marginLeft:12, color:color.green, fontSize:20}}>Pati Düzenle</Text>
                        </TouchableOpacity>
                    </View>
                    </>
                )}

            </DrawerContentScrollView>
            <View style={styles.logout_container}>
                <TouchableOpacity style={styles.logout_inner_container}>
                    <Icon name="logout" size={40} color={color.blue} />
                    <Text style={styles.logout_text}>Çıkış Yap</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
//log out sona at 
export default CustomDrawerContent;