import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './LoginPage.style';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

function LoginPage({ navigation }) {

  const goToRegisterPage = () => {
    navigation.navigate('RegisterPage');
  };

  const goToMainPage = () => {
    navigation.navigate("AppStack", "MainPage")
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}>
        {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
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

              <Button text={'Giriş Yap'} theme='primary' onPress={goToMainPage} />
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
