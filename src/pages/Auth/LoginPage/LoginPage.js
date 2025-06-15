import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import styles from './LoginPage.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from '../../../styles/color';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import Loading from '../../../components/Loading/Loading';
import { useDispatch } from 'react-redux';
import { setAddress, setFirstName, setLastName, setPhoneNumber } from '../../../redux/userSlice';
import { getUserType } from '../../../services/authApi';
import { getClinicByVet } from '../../../services/clinicApi';
import { setClinicName, setClinicHeaderImage, setClinicAddress, setAnimalTypes, setDescription } from '../../../redux/clinicSlice';


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
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const goToRegisterPage = () => {
    navigation.navigate('RegisterPage');
  };

  const handleLogin = async (values) => {
    setLoading(true)
    const auth = getAuth();
    try {
      const userCredentail = await signInWithEmailAndPassword(auth, values.usermail, values.password)
      const uid = userCredentail.user.uid;   
      const response = await getUserType(uid)
      const { userType, data } = response;

      if (userType === "user") {
        dispatch(setFirstName(data.firstName));
        dispatch(setLastName(data.lastName));
        dispatch(setPhoneNumber(data.phoneNumber));
        dispatch(setAddress(data.address));

        navigation.navigate("UserAppStack");

        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Başarılı",
          textBody: "Giriş başarılı",
          autoClose: 500,
        });

      } else if (userType === "vet") {
        console.log(data)
        try {
          console.log(data._id)
          const response = await getClinicByVet(data._id)
          dispatch(setClinicName(response.clinicName))
          dispatch(setClinicAddress(response.address))
          dispatch(setDescription(response.description))
          dispatch(setClinicHeaderImage(response.clinicHeaderImage))
          dispatch(setAnimalTypes(response.setAnimalTypes))
        } catch (error) {
          
        }
        navigation.navigate("ClinicAppStack");
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Başarılı",
          textBody: "Giriş başarılı",
          autoClose: 500,
        });
      }
      setLoading(false);

    } catch (error) {
      setLoading(false)
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "HATA",
        textBody: error.code,
        autoClose: 800
      })
    }
  }

  const goToForgotPasswordPage = () => {
    navigation.navigate("ForgotPasswordPage")
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {loading && <Loading />}
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
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

              <View style={styles.input_main_container}>
                <View style={styles.input_container}>
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
                <View style={styles.input_container}>
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

                <TouchableOpacity style={styles.forgot_password_container} onPress={goToForgotPasswordPage}>
                  <Text style={styles.forgot_password}>Şifremi Unuttum</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btn_container}>
                <Button text={'Giriş Yap'} theme='primary' onPress={handleSubmit} />
              </View>
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

// try {
//   const userData = await getUserData(uid);

//   dispatch(setFirstName(userData.firstName))
//   dispatch(setLastName(userData.lastName))
//   dispatch(setPhoneNumber(userData.phoneNumber))
//   dispatch(setAddress(userData.address))

//   setLoading(false)
//   Toast.show({
//     type: ALERT_TYPE.SUCCESS,
//     title: "Başarılı",
//     textBody: "Giriş Başarılı",
//     autoClose: 500
//   })
//   navigation.navigate("UserAppStack")
// } catch (error) {
//   setLoading(false)
//   Toast.show({
//     type: ALERT_TYPE.DANGER,
//     title: "HATA",
//     textBody: "Bir Şeyler Ters Gitti.",
//     autoClose: 800
//   })
// }
