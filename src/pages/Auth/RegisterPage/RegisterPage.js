import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Input from '../../../components/Input';
import styles from './RegisterPage.style';
import Button from '../../../components/Button';

function RegisterPage({navigation}) {
  const goToLoginPage = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : null}
          style={styles.container}
          
        >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={[styles.header_container]}>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={require('../../../assets/vetpati.jpg')}
              resizeMode="cover"
            />
          </View>
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_text}>Mail Adresi</Text>
          <Input placeholder="Lütfen Mailinizi Giriniz..." />
          <Text style={styles.input_text}>Şifre</Text>
          <Input placeholder="Lütfen Şifrenizi Giriniz..." isSecure={true} />
          <Text style={styles.input_text}>Şifre Onay</Text>
          <Input
            placeholder="Lütfen Şifrenizi Tekrar Giriniz..."
            isSecure={true}
          />
          <TouchableOpacity>
            <Text style={styles.forgot_password}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>

        <Button text="Kayıt Ol" theme="secondary" />
        
        <View style={styles.bottom_container}>
        <Text style={styles.text}>Hesabın Var Mı?</Text>
        <TouchableOpacity onPress={goToLoginPage}>
          <Text style={styles.text_2}> Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      
    </KeyboardAvoidingView>
  );
}

export default RegisterPage;
