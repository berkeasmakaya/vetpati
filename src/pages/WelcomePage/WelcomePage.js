import { View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import Button from '../../components/Button/Button';
import styles from './WelcomePage.style';


function WelcomePage({navigation}){
  const goToLoginPage = () => {
    navigation.navigate("LoginPage");
  }
  const goToRegisterPage = () => {
    navigation.navigate("RegisterPage");
  }
  const goToClinicRegisterPage = () => {
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
        
      </View>
      
      <View style={styles.button_container}>
        <Button text="Giriş Yap" theme='primary'onPress={goToLoginPage}/>
        <Button text="Kayıt Ol" theme='third' onPress={goToRegisterPage}/>
        <Button text="Kayıt Ol (Klinik)" theme='fourth' onPress={goToClinicRegisterPage}/>
      </View>

      <View style={styles.copy_right_container}>
        <Text style={styles.copy_right}>Copyright KFAU © 2024 Tüm Hakları Saklıdır.</Text>
      </View>
    </View>
   
  )
}

export default WelcomePage;