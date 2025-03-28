import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './LoginPage.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';  // Navigation hook'u

const initialFormValues = {
  usermail: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  usermail: Yup.string()
    .email("E-mail formatına uygun girilmeli!")
    .required("E-mail alanı boş bırakılamaz!"),
  password: Yup.string()
    .required("Şifre boş bırakılamaz!")
    .min(6, "Şifre en az 6 karakter olmalı!"),
});

function LoginPage() {
  const navigation = useNavigation();  // useNavigation hook'u

  const goToRegisterPage = () => {
    navigation.navigate('RegisterPage');  // Kayıt sayfasına yönlendirir
  };

  const goToMainPage = () => {
    navigation.navigate("AppStack", "MainPage");  // Ana sayfaya yönlendirir
  };

  const handleLogin = async (values) => {
    try {
      // Kullanıcıyı kontrol etme isteği
      const response = await fetch('http://10.0.2.2:5001/users');
      const data = await response.json();

      // Kullanıcılar içinde e-posta ve şifreyi kontrol etme
      const user = data.users.find(
        (user) => user.username === values.usermail && user.password === values.password
      );

      if (user) {
        goToMainPage();  // Giriş başarılıysa ana sayfaya yönlendir
      } else {
        alert('E-mail veya şifre yanlış!');  // Kullanıcı bulunamazsa hata mesajı
      }
    } catch (error) {
      console.error(error);
      alert('Giriş işlemi sırasında hata oluştu.');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleLogin(values)}  // Handle submit işlemi
      >
        {({ values, handleChange, handleBlur, touched, errors, handleSubmit }) => (
          <>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.logo_container}>
                <Image
                  style={styles.logo}
                  source={require('../../../assets/main_Logo.png')}
                  resizeMode='contain'
                />
              </View>

              <View style={styles.input_container}>
                <View style={styles.mail_input}>
                  <Text style={styles.input_text}>Mail Adresi</Text>
                  <Input
                    value={values.usermail}
                    placeholder="Lütfen Mailinizi Giriniz..."
                    onType={handleChange('usermail')}
                    onBlur={handleBlur('usermail')}
                    autoCapitalize="none"
                  />
                  {touched.usermail && errors.usermail && (
                    <Text style={styles.error}>{errors.usermail}</Text>
                  )}
                </View>
                <View style={styles.password_input}>
                  <Text style={styles.input_text}>Şifre</Text>
                  <Input
                    value={values.password}
                    placeholder="Lütfen Şifrenizi Giriniz..."
                    onType={handleChange('password')}
                    onBlur={handleBlur('password')}
                    isSecure={true}
                    autoCapitalize="none"
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>

                <TouchableOpacity style={styles.forgot_password_container}>
                  <Text style={styles.forgot_password}>Şifremi Unuttum</Text>
                </TouchableOpacity>
              </View>

              <Button text={'Giriş Yap'} theme='primary' onPress={handleSubmit} />  {/* onPress'e handleSubmit eklendi */}
              
              <View style={styles.bottom_container}>
                <Text style={styles.text}>Hesabın yok mu?</Text>
                <TouchableOpacity onPress={goToRegisterPage}>
                  <Text style={styles.text_2}> HESAP OLUŞTUR</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

export default LoginPage;
