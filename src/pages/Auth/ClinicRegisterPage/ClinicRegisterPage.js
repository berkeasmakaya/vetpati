import React from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import Input from '../../../components/Input';
import styles from './ClinicRegisterPage.style';
import Button from '../../../components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';

const initialFormValues = {
  usermail: '',
  clinic_name: '',
  clinic_address: '',
  phone_num: '',
  password: '',
  repassword: '',
}

const validationSchema = Yup.object().shape({
  usermail: Yup.string()
    .email("E-mail formatına uygun girilmeli!")
    .required("E-mail alanı boş bırakılamaz!"),
  clinic_name: Yup.string()
    .required("Klinik adı boş olamaz!"),
  clinic_address: Yup.string()
    .required("Klinik adresi boş olamaz!"),
  phone_num: Yup.number()
    .required("Telefon numarası boş olamaz!"),
  password: Yup.string()
    .required("Şifre boş bırakılamaz!")
    .min(6, "Şifre en az 6 karakter olmalı!"),
  repassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Şifreler Aynı Olmalıdır!')
    .required('Şifre Onayı Zorunludur!'),
})

function ClinicRegisterPage({ navigation }) {
  const goToLoginPage = () => {
    navigation.navigate('FirstPage');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : "height"} style={styles.container}>
      <Formik initialValues={initialFormValues} validationSchema={validationSchema}>
        {({values, handleChange, handleBlur, handleSubmit, touched, errors}) => (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.logo_container}>
              <Image
                source={require('../../../assets/main_Logo.png')}
                style={styles.logo}
                resizeMode='contain'
              />
            </View>
            <SafeAreaView style={styles.input_container}>
              <Text style={styles.input_text}>Mail Adresi</Text>
              <Input
                value={values.usermail}
                placeholder="Mail Adresi.."
                onType={handleChange('usermail')}
                onBlur={handleBlur('usermail')}
              />
              {touched.usermail && errors.usermail && (
                <Text style={styles.error}>{errors.usermail}</Text>
              )}
              <Text style={styles.input_text}>Klinik Adı</Text>
              <Input
                value={values.clinic_name}
                placeholder="Klinik Adı..."
                onType={handleChange('clinic_name')}
                onBlur={handleBlur('clinic_name')}
              />
              {touched.clinic_name && errors.clinic_name && (
                <Text style={styles.error}>{errors.clinic_name}</Text>
              )}
              <Text style={styles.input_text}>Klinik Adresi</Text>
              <Input 
                value={values.clinic_address}
                placeholder="Klinik Adresi..."
                onType={handleChange('clinic_address')}
                onBlur={handleBlur('clinic_address')}
              />
              {touched.clinic_address && errors.clinic_address && (
                <Text style={styles.error}>{errors.clinic_address}</Text>
              )}
              <Text style={styles.input_text}>Telefon Numarası</Text>
              <Input
                value={values.phone_num}
                placeholder="Telefon Numarası..."
                keyboardType="numeric"
                onType={handleChange('phone_num')}
                onBlur={handleBlur('phone_num')}
              />
              {touched.phone_num && errors.phone_num && (
                <Text style={styles.error}>{errors.phone_num}</Text>
              )}
              <Text style={styles.input_text}>Şifre</Text>
              <Input
                value={values.password}
                placeholder="Şifre..."
                isSecure={true}
                onType={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <Text style={styles.input_text}>Şifre Onay</Text>
              <Input
                value={values.repassword}
                placeholder="Şifre Onay..."
                isSecure={true}
                onType={handleChange('repassword')}
                onBlur={handleBlur('repassword')}
              />
              {touched.repassword && errors.repassword && (
                <Text style={styles.error}>{errors.repassword}</Text>
              )}
            </SafeAreaView>
            <View style={styles.button_container}>
              <Button text="Kayıt Ol" theme="secondary" />
            </View>

            <View style={styles.bottom_container}>
              <Text style={styles.text}>Hesabın Var Mı?</Text>
              <TouchableOpacity onPress={goToLoginPage}>
                <Text style={styles.text_2}> GİRİŞ YAP</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Formik>

    </KeyboardAvoidingView>
  );
}

export default ClinicRegisterPage;
