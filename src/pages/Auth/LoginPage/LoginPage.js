import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import Input from '../../../components/Input';
import styles from './LoginPage.style';
import Button from '../../../components/Button';


function LoginPage({navigation}){
  
  const goToRegisterPage = () => {
    navigation.navigate("RegisterPage")
  }

  return (
    <KeyboardAvoidingView  
      behavior={Platform.OS === 'padding'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header_container}>

        <View style={styles.image_container}>
          <Image
            style={styles.image} 
            source={require('../../../assets/vetpati-yeni.png')} 
            resizeMode='cover'
          />
        </View>

        {/* <View style={styles.logo_container}>
          <Text>abc</Text>
        </View> */}

      </View>
      
      <View style={styles.input_container}>
        <Text style={styles.input_text}>Mail Adresi</Text>
        <Input placeholder="Lütfen Mailinizi Giriniz..."/>
        <Text style={styles.input_text}>Şifre</Text>
        <Input 
          placeholder="Lütfen Şifrenizi Giriniz..."
          isSecure={true}
        />
        <TouchableOpacity>
          <Text style={styles.forgot_password}>Şifremi Unuttum</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_container}>
        <Button text="Giriş Yap" theme='primary'/>
      </View>
      </ScrollView>
      <View style={styles.bottom_container}>
        <Text style={styles.text}>Hesabın yok mu?</Text>
        <TouchableOpacity onPress={goToRegisterPage}>
          <Text style={styles.text_2}> HESAP OLUŞTUR</Text>
        </TouchableOpacity>
      </View>
      
    </KeyboardAvoidingView>
  )
}

export default LoginPage;