import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import styles from './RegisterPage.style';
import Button from '../../../components/Button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from '../../../styles/color';
import {getAuth, createUserWithEmailAndPassword} from '@react-native-firebase/auth'

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
  const [showPassword, setShowPassword] = useState(false)
  const [showRepassword, setShowRepassword] = useState(false)

  const goToLoginPage = () => {
    navigation.navigate('LoginPage');
  };

  const handleRegister = async (values) => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, values.usermail, values.password)
      navigation.navigate("UserAppStack")

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Bu e-posta adresi zaten kullanımda.');
      } else if (error.code === 'auth/invalid-email') {
        alert('Geçersiz e-posta adresi.');
      } else {
        alert('Bir hata oluştu: ' + error.message);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleRegister}>
        {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
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
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ flex: 1 }}>
                      <Input
                        value={values.password}
                        placeholder="Lütfen Şifrenizi Giriniz..."
                        onType={handleChange('password')}
                        onBlur={handleBlur('password')}
                        isSecure={!showPassword}
                        autoCapitalize="none"
                      />
                    </View>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 20 }}>
                      <Icon name={showPassword ? "eye-off" : "eye"} size={30} color={color.brown} />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.password_input}>
                  <Text style={styles.input_text}>Şifre Onay</Text>
                  <View style={{ flexDirection: "row", alignItems: "center", }}>
                    <View style={{ flex: 1 }}>
                      <Input
                        value={values.repassword}
                        placeholder="Lütfen Şifrenizi Giriniz..."
                        onType={handleChange('repassword')}
                        onBlur={handleBlur('repassword')}
                        isSecure={!showRepassword}
                        autoCapitalize="none"
                      />
                    </View>
                    <TouchableOpacity onPress={() => setShowRepassword(!showRepassword)} style={{ position: "absolute", right: 20 }}>
                      <Icon name={showRepassword ? "eye-off" : "eye"} size={30} color={color.brown} />
                    </TouchableOpacity>
                  </View>
                  {touched.repassword && errors.repassword && (
                    <Text style={styles.error}>{errors.repassword}</Text>
                  )}
                </View>
              </View>

              <View style={styles.btn_container}>
                <Button text="Kayıt Ol" theme="secondary" onPress={handleSubmit} />
              </View>


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
