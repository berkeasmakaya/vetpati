import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Input from '../../../components/Input';
import styles from './LoginPage.style';
import Button from '../../../components/Button';


function FirstPage({navigation}){
  
  return (
    <View style={styles.container}>
      
      <View style={styles.header_container}>

        <View style={styles.image_container}>
          <Image
            style={styles.image} 
            source={require('../../../assets/vetpati.png')} 
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
        <Input placeholder="Lütfen Şifrenizi Giriniz..."/>
        <TouchableOpacity>
          <Text style={styles.forgot_password}>Şifremi Unuttum</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button_container}>
        <Button text="Giriş Yap" theme='primary'/>
      </View>

      <View style={styles.bottom_container}>
        <Text style={styles.text}>Hesabın yok mu?</Text>
        <TouchableOpacity>
          <Text style={styles.text_2}> HESAP OLUŞTUR</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default FirstPage;