import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import ClinicApptCard from '../../components/ClinicApptCard/ClinicApptCard'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../styles/color'
import styles from './ClinicApptPage.style'
import Modal from 'react-native-modal'

const ClinicApptPage = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }
  const modalData = [
    {id:1, text:"Tüm Randevularım", icon_name:"calendar-multiple-check", route:"UserApptPage"},
    {id:2, text:"Geçmiş Randevularım", icon_name:"history", route:"UserHistoryApptPage"},
    {id:2, text:"Onaylanan Randevularım", icon_name:"check-bold", route:"UserHistoryApptPage"},
    {id:3, text:"Onay Bekleyen Randevularım", icon_name:"clipboard-text-clock-outline", route:"UserHistoryApptPage"},
  ]

  const renderModalData = ({item}) => {
    const handlePageChange = () => {
      const currentRoute = navigation.getState().routes[navigation.getState().index].name //current root
      if (currentRoute === item.route) {
        toggleModal()
      } else {
        toggleModal()
        navigation.navigate(item.route)
      }
    }
    return(
      <TouchableOpacity style={styles.modal_content_container} onPress={handlePageChange}>
        <Icon name={item.icon_name} size={40} color={color.white}/>
        <Text style={styles.modal_text}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView>
      <View style={styles.header_container}>
        <Text style={styles.header_txt}>Tüm Randevularım</Text>
        <TouchableOpacity style={styles.btn} onPress={toggleModal}>
          <Icon  name='view-grid-outline' size={27} color={color.white} />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible} animationIn="zoomIn" animationOut="zoomOut" onBackdropPress={toggleModal}>
        <View style={{ backgroundColor:"white", flex:0.5, borderRadius:10}}>
          <FlatList 
            data={modalData}
            renderItem={renderModalData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{justifyContent:"space-around"}}
            contentContainerStyle={{ justifyContent:"center",marginVertical:40}}
          />
          <TouchableOpacity style={styles.close_btn} onPress={toggleModal}>
            <Icon name='window-close' size={30} color={color.white}/>
          </TouchableOpacity>
        </View>
      </Modal>
      <ClinicApptCard/>
    </SafeAreaView>
  )
}

export default ClinicApptPage