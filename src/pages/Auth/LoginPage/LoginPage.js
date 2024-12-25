import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from 'axios';
import styles from './LoginPage.style';

function LoginPage({ navigation }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  const goToRegisterPage = () => {
    navigation.navigate('RegisterPage');
  };

  const goToMainPage = () => {
    navigation.navigate("AppStack", "MainPage")
  }

  // const handleLogin = async () => {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Please enter both email and password.');
  //     return;
  //   }

    // setIsLoading(true);

  //   try {
  //     const response = await axios.post('http://localhost:3000/login', { email, sifre: password });

  //     if (response.status === 200) {
  //       Alert.alert('Success', response.data.message);
  //       // Navigate to the next screen (e.g., dashboard, home, etc.)
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       Alert.alert('Login Failed', error.response.data.error || 'An error occurred.');
  //     } else {
  //       Alert.alert('Error', 'Unable to connect to the server.');
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding': "padding"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header_container}>
          <View style={styles.image_container}>
            <Image style={styles.image} source={require('../../../assets/vetpati-yeni.png')} resizeMode='cover' />
          </View>
        </View>

        <View style={styles.input_container}>
          <Text style={styles.input_text}>Mail Adresi</Text>
          <Input
            placeholder="Lütfen Mailinizi Giriniz..."
            // value={email}
            // onType={setEmail}
          />
          <Text style={styles.input_text}>Şifre</Text>
          <Input
            placeholder="Lütfen Şifrenizi Giriniz..."
            // value={password}
            // onType={setPassword}
            isSecure={true}
          />
          <TouchableOpacity>
            <Text style={styles.forgot_password}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button_container}>
          <Button text={'Giriş Yap'} theme='primary' onPress={goToMainPage}/>
        </View>
      </ScrollView>
      <View style={styles.bottom_container}>
        <Text style={styles.text}>Hesabın yok mu?</Text>
        <TouchableOpacity onPress={goToRegisterPage}>
          <Text style={styles.text_2}> HESAP OLUŞTUR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginPage;
