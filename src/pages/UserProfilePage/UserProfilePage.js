import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './UserProfilePage.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../../styles/color'
import PawCard from '../../components/PawCard/PawCard'
import EditUserModal from '../../components/modals/EditUserModal/EditUserModal'
import AddPawModal from '../../components/modals/AddPawModal/AddPawModal'
import { useSelector, useDispatch } from 'react-redux'
import { openEditUserModal, closeEditUserModal, openAddPawModal, closeAddPawModal } from '../../redux/modalSlice'
import { getAuth } from '@react-native-firebase/auth'
import { getUserData } from '../../services/userApi'
import { getPets } from '../../services/petApi'
import { setPets } from '../../redux/petSlice'



const UserProfilePage = ({ navigation }) => {

  //const [pets, setPets] = useState([]);
  const dispatch = useDispatch();
  const { isEditUserModalVisible, isAddPawModalVisible } = useSelector((state) => state.modals)
  const { firstName, lastName, address, phoneNumber } = useSelector((state => state.users))

  const pets = useSelector((state) => state.pets.list);

  const fetchPets = async () => {
      try {
        const auth = getAuth();
        const uid = auth.currentUser.uid;
        const userData = await getUserData(uid);
        const ownerId = userData._id
        const userPets = await getPets(ownerId)
        dispatch(setPets(userPets));
      } catch (error) {
        console.log("Error loading pets: ", error);
      }
    }

  useEffect(() => {
    fetchPets() 
  },[])

  const renderItem = ({ item }) => (
    <PawCard pet={item} fetchPets={fetchPets} />
  );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header_container}>
        <Image
          source={require('../../assets/main_Logo.png')}
          style={{ width: 80, height: 80 }}
        />
      </View>
      <TouchableOpacity style={styles.drawer_button} onPress={() => navigation.openDrawer()}>
        <Icon name='reorder-horizontal' color={color.white} size={35} />
      </TouchableOpacity>

      <View style={styles.info_container}>

        <View style={styles.inner_info_container}>
          <View style={styles.name_container} >
            <Text style={styles.name}>{firstName} {lastName}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.edit_btn} onPress={() => dispatch(openEditUserModal())}>
          <Icon name='pencil' color={color.white} size={25} />
        </TouchableOpacity>
        <EditUserModal isVisible={isEditUserModalVisible} onClose={() => dispatch(closeEditUserModal())} />

        <View style={styles.address_phone_container}>
          <Text style={styles.phone_number_address}>{phoneNumber} </Text>
          <Text style={styles.phone_number_address}> {address}</Text>
        </View>


        <TouchableOpacity style={styles.add_paw_btn} onPress={() => dispatch(openAddPawModal())}>
          <Text style={styles.btn_text}>Pati Ekle</Text>
        </TouchableOpacity>
        <AddPawModal isVisible={isAddPawModalVisible} onClose={()=>dispatch(closeAddPawModal())} onAddSuccess={fetchPets} />
      </View>

      <View style={{ flex: 0.75,  justifyContent:"center"}}>
        <View>
          <Text style={{marginLeft:"5%", marginBottom:"3%", fontSize:24, fontWeight:"900", fontStyle:"italic", color:color.blue}}>PATİLER</Text>
          <FlatList 
            data={pets}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
            style={{height:Dimensions.get("window").height/1.9,}}
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default UserProfilePage