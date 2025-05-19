import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './UserProfilePage.style'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../styles/color'
import PawCard from '../../components/PawCard/PawCard'
import EditUserModal from '../../components/modals/EditUserModal/EditUserModal'
import AddPawModal from '../../components/modals/AddPawModal/AddPawModal'
import { useSelector, useDispatch } from 'react-redux'
import { openEditUserModal, closeEditUserModal, openAddPawModal, closeAddPawModal } from '../../redux/modalSlice'



const UserProfilePage = ({navigation}) => {
  // const [isEditUserModalVisible, setEditUserModalVisible] = useState(false);
  // const [isAddPawModalVisible, setAddPawModalVisible] = useState(false);
  
  const dispatch = useDispatch();
  const {isEditUserModalVisible, isAddPawModalVisible} = useSelector((state)=>state.modals)
  
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.header_container}>
        <Image 
          source={require('../../assets/main_Logo.png')}
          style={{width:80, height:80}}
        />
      </View>
      <TouchableOpacity style={styles.drawer_button} onPress={()=>navigation.openDrawer()}>
        <Icon name='reorder-horizontal' color={color.white} size={35} />
      </TouchableOpacity>

      <View style={styles.info_container}>

        <View style={styles.inner_info_container}>
          <View style={styles.name_container} >
            <Text style={styles.name}>Berke Asmakaya</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.edit_btn} onPress={()=> dispatch(openEditUserModal())}>
          <Icon name='pencil' color={color.white} size={25} />
        </TouchableOpacity>
        <EditUserModal isVisible={isEditUserModalVisible} onClose={()=>dispatch(closeEditUserModal())}/>

        <View style={styles.address_phone_container}>
          <Text style={styles.phone_number_address}>537 051 53 10 </Text>
          <Text style={styles.phone_number_address}>Meram/Konya</Text>
        </View>

     
        <TouchableOpacity style={styles.add_paw_btn} onPress={()=>dispatch(openAddPawModal())}>
          <Text style={styles.btn_text}>Pati Ekle</Text>
        </TouchableOpacity>
        <AddPawModal isVisible={isAddPawModalVisible} onClose={()=>dispatch(closeAddPawModal())}/>
      </View>

      <View style={{flex:0.75}}>
        <PawCard />
      </View>
      
    </SafeAreaView>
  )
}

export default UserProfilePage