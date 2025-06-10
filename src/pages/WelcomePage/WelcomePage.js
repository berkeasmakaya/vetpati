import { View, Text, Image, KeyboardAvoidingView, Platform, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button/Button';
import styles from './WelcomePage.style';
import color from '../../styles/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomModal from '../../components/modals/CustomModal/CustomModal';

const deviceSize = Dimensions.get("window")

function WelcomePage({ navigation }) {
  const [isCustomModalVisible, setIsCustomModalVisible] = useState(false)
  const [isVetCustomModalVisible, setIsVetCustomModalVisible] = useState(false)

  const toggleUserModal = () => {
    setIsCustomModalVisible(!isCustomModalVisible)
  }
  const toggleVetModal = () => {
    setIsVetCustomModalVisible(!isVetCustomModalVisible)
  }

  const goToLoginPage = () => {
    setIsCustomModalVisible(false);
    setIsVetCustomModalVisible(false);
    navigation.navigate("LoginPage");
  }
  const goToRegisterPage = () => {
    toggleUserModal()
    navigation.navigate("RegisterPage");
  }
  const goToClinicRegisterPage = () => {
    toggleVetModal()
    navigation.navigate("ClinicRegisterPage");
  }
  return (

    <View style={styles.container}>

      <View style={styles.header_container}>

        <View style={styles.logo_container}>
          <Image
            style={styles.logo}
            source={require('../../assets/main_Logo.png')}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.welcome_text}>VetPati'ye Hoşgeldiniz</Text>

      </View>

      <View style={styles.button_container}>
        <TouchableOpacity style={[styles.button, { backgroundColor: color.blue }]} onPress={toggleUserModal}>
          <Icon name="account" size={40} color={color.white} />
          <Text style={styles.button_text}>Pati Sahibi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: color.green }]} onPress={toggleVetModal}>
          <Icon name="doctor" size={40} color={color.white} />
          <Text style={styles.button_text}>Veteriner Hekim</Text>
        </TouchableOpacity>
        <CustomModal
          isVisible={isCustomModalVisible}
          title="Hoşgeldiniz!"
          buttons={[
            { text: "Giriş Yap", onPress:goToLoginPage , theme: "fourth" },
            { text: "Kayıt Ol", onPress:goToRegisterPage, theme: "third" },
            { text: "İptal", onPress:toggleUserModal, theme: "primary" },
          ]}
        />
        <CustomModal
          isVisible={isVetCustomModalVisible}
          title="Hoşgeldiniz!"
          buttons={[
            { text: "Giriş Yap", onPress:goToLoginPage , theme: "fourth" },
            { text: "Kayıt Ol", onPress:goToClinicRegisterPage, theme: "third" },
            { text: "İptal", onPress:toggleVetModal, theme: "primary" },
          ]}
        />
      </View>

      <View style={styles.copy_right_container}>
        <Text style={styles.copy_right}>Copyright KFAU © 2024 Tüm Hakları Saklıdır.</Text>
      </View>
    </View>

  )
}

export default WelcomePage;