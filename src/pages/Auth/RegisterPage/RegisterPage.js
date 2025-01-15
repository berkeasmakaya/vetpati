import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import React from 'react';
import Input from '../../../components/Input';
import styles from './RegisterPage.style';
import Button from '../../../components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
}

const validationSchema = Yup.object().shape({
  usermail: Yup.string()
    .email("E-mail formatına uygun girilmeli!")
    .required("E-mail alanı boş bırakılamaz!"),
  password: Yup.string()
    .required("Şifre boş bırakılamaz!")
    .min(6, "Şifre en az 6 karakter olmalı!"),
  repassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Şifreler Aynı Olmalıdır!')
    .required('Şifre Onayı Zorunludur!'),
});

function RegisterPage({ navigation }) {
  const goToLoginPage = () => {
    navigation.navigate('LoginPage');
  };
  const goToMainPage = () => {
    navigation.navigate("AppStack", "MainPage")
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Formik initialValues={initialFormValues} validationSchema={validationSchema}>
        {({values, handleChange, handleBlur, handleSubmit, touched, errors}) => (
          <>
            <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
              <View style={styles.logo_container}>
                <Image
                  style={styles.logo}
                  source={require('../../../assets/main_Logo.png')}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.input_container}>

                <View style={styles.mail_input}>
                  <Text style={styles.input_text}>Mail Adresi</Text>
                  <Input 
                    value={values.usermail}
                    onType={handleChange('usermail')}
                    onBlur={handleBlur('usermail')}
                    placeholder="Lütfen Mailinizi Giriniz..." 
                  />
                  {touched.usermail && errors.usermail && (
                    <Text style={styles.error}>{errors.usermail}</Text>
                  )}
                </View>

                <View style={styles.password_input}>
                  <Text style={styles.input_text}>Şifre</Text>
                  <Input 
                    value={values.password}
                    onType={handleChange('password')}
                    onBlur={handleBlur('passord')}
                    placeholder="Lütfen Şifrenizi Giriniz..." 
                    isSecure={true} 
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.repassword_input}>
                  <Text style={styles.input_text}>Şifre Onay</Text>
                  <Input
                    value={values.repassword}
                    onType={handleChange('repassword')}
                    onBlur={handleBlur('repassword')}
                    placeholder="Lütfen Şifrenizi Tekrar Giriniz..."
                    isSecure={true}
                  />
                  {touched.repassword && errors.repassword && (
                    <Text style={styles.error}>{errors.repassword}</Text>
                  )}
                </View>

                <TouchableOpacity style={styles.forgot_password_container}>
                  <Text style={styles.forgot_password}>Şifremi Unuttum</Text>
                </TouchableOpacity>
              </View>

              <Button 
                text="Kayıt Ol" 
                theme="secondary"
                onPress={goToMainPage}
              />

              <View style={styles.bottom_container}>
                <Text style={styles.text}>Hesabın Var Mı?</Text>
                <TouchableOpacity onPress={goToLoginPage}>
                  <Text style={styles.text_2}> GİRİŞ YAP</Text>
                </TouchableOpacity>
              </View>

            </ScrollView>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

export default RegisterPage;
