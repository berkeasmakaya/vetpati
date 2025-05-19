import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import ApptHistoryCard from '../../components/ApptHistoryCard/ApptHistoryCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../styles/color'
import styles from './UserHistoryApptPage.style'
import Modal from 'react-native-modal'
//import { useNavigationContainerRef } from '@react-navigation/native'

const UserDatePage = ({navigation}) => {
    //const navigationRef = useNavigationContainerRef();
    const [isModalVisible, setIsModalVisible] = useState(false)
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }
    const modalData = [
        { id: 1, text: "Randevularım", icon_name: "clipboard-text-clock-outline", route:"UserApptPage" },
        { id: 2, text: "Geçmiş Randevularım", icon_name: "history", route:"UserHistoryApptPage" },
        // {id:3, text:"Geçmiş Randevularım", icon_name:"history"},
        // {id:4, text:"Geçmiş Randevularım", icon_name:"history"},
        // {id:5, text:"Geçmiş Randevularım", icon_name:"history"},
        // {id:6, text:"Geçmiş Randevularım", icon_name:"history"},
        // {id:7, text:"Geçmiş Randevularım", icon_name:"history"},
        // {id:8, text:"Geçmiş Randevularım", icon_name:"history"},
        // {id:9, text:"Geçmiş Randevularım", icon_name:"history"},
    ]

    const renderModalData = ({ item }) => {
        const handlePageChange = () => {
            const currentRoute = navigation.getState().routes[navigation.getState().index].name
            if (currentRoute === item.route) {
                toggleModal()
            } else {
                toggleModal()
                navigation.navigate(item.route)
            }
        }
        return (
            <TouchableOpacity style={styles.modal_content_container} onPress={handlePageChange}>
                <Icon name={item.icon_name} size={40} color={color.white} />
                <Text style={styles.modal_text}>{item.text}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.header_container}>
                <Text style={styles.header_txt}>Geçmiş Randevularım</Text>
                <TouchableOpacity style={styles.btn} onPress={toggleModal}>
                    <Icon name='view-grid-outline' size={27} color={color.white} />
                </TouchableOpacity>
            </View>
            <Modal isVisible={isModalVisible} animationIn="zoomIn" animationOut="zoomOut">
                <View style={{ backgroundColor: "white", flex: 0.5, borderRadius: 10 }}>
                    <FlatList
                        data={modalData}
                        renderItem={renderModalData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: "space-around" }}
                        contentContainerStyle={{ justifyContent: "center", marginVertical: 40 }}
                    />
                    <TouchableOpacity style={styles.close_btn} onPress={toggleModal}>
                        <Icon name='window-close' size={30} color={color.white} />
                    </TouchableOpacity>
                </View>
            </Modal>
            <ApptHistoryCard />
        </SafeAreaView>
    )
}

export default UserDatePage