import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, SafeAreaView } from 'react-native';
import React, { useState, useRef } from 'react';
import Input from '../../../components/Input/Input';
import styles from './RegisterPage.style';
import FloatingButton from '../../../components/FloatingButton/FloatingButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from '../../../styles/color';
import { getAuth, createUserWithEmailAndPassword } from '@react-native-firebase/auth'
import Loading from '../../../components/Loading/Loading';
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import PagerView from 'react-native-pager-view';
import Button from '../../../components/Button/Button';
import { createUser } from '../../../services/userApi';
import { getUserType } from '../../../services/authApi';
import { useDispatch } from 'react-redux';
import { setFirstName, setLastName, setPhoneNumber, setAddress } from '../../../redux/userSlice';

const initialFormValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  usermail: '',
  password: '',
  repassword: '',
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("İsim alanı boş bırakılamaz!")
    .min(3, "İsim en az 3 harfli olmalı!"),
  lastName: Yup.string()
    .required("Soyisim alanı boş bırakılamaz!")
    .min(3, "Soyisim en az 3 harfli olmalı!"),
  address: Yup.string()
    .required("Adres alanı boş bıraklamaz"),
  phoneNumber: Yup.string()
    .min(10, "Telefon numarası en az 10 haneli olmalıdır!")
    .max(11, "Telefon numarası en fazla 11 haneli olmalıdır!"),
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

const totalPages = 2;

function RegisterPage({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepassword, setShowRepassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch()

  const goToLoginPage = () => navigation.navigate('LoginPage');

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      const nextPage = currentPage + 1;
      pagerRef.current?.setPage(nextPage);
      setCurrentPage(nextPage);
    }
  };

  const handleRegister = async (values) => {
    console.log(values)
    setLoading(true);
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.usermail, values.password);
      const uid = userCredential.user.uid;
      try {
        await createUser(uid, {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          address: values.address
        });

        dispatch(setFirstName(values.firstName));
        dispatch(setLastName(values.lastName));
        dispatch(setPhoneNumber(values.phoneNumber));
        dispatch(setAddress(values.address));

        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Başarılı",
          textBody: "Kayıt Olma Başarılı",
          autoClose: 500
        });

        navigation.navigate("UserAppStack");

      } catch (dbError) {
        console.log(dbError)
        await userCredential.user.delete();
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "HATA",
          textBody: "Bir Şeyler Ters Gitti",
          autoClose: 800
        });
      }
    } catch (error) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "HATA",
        textBody: error.code,
        autoClose: 800
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex:1}}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        {loading && <Loading />}
        <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleRegister}>
          {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
            <PagerView style={styles.pageContainer} initialPage={0} ref={pagerRef} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>

              <View key="1">
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                  <View style={styles.logo_container}>
                    <Image style={styles.logo} source={require('../../../assets/main_Logo.png')} resizeMode="contain" />
                  </View>

                  <View style={styles.input_main_container}>
                    <View style={styles.input_container}>
                      <Text style={styles.input_text}>İsim</Text>
                      <Input
                        value={values.firstName}
                        onType={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        placeholder="Lütfen İsminizi Giriniz..."
                      />
                      {touched.firstName && errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}
                    </View>
                    <View style={styles.input_container}>
                      <Text style={styles.input_text}>Soyisim</Text>
                      <Input
                        value={values.lastName}
                        onType={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        placeholder="Lütfen Soyisminizi Giriniz..."
                      />
                      {touched.lastName && errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
                    </View>
                    <View style={styles.input_container}>
                      <Text style={styles.input_text}>Telefon Numarası</Text>
                      <Input
                        keyboardType={"numeric"}
                        value={values.phoneNumber}
                        onType={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        placeholder="05xx xxx xx xx"
                      />
                      {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}
                    </View>
                    <View style={styles.input_container}>
                      <Text style={styles.input_text}>Adres</Text>
                      <Input
                        value={values.address}
                        onType={handleChange('address')}
                        onBlur={handleBlur('address')}
                        placeholder="İl / İlçe"
                      />
                      {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}
                    </View>
                  </View>

                  <View style={styles.btn_container}>
                    <FloatingButton icon_name="arrow-right" icon_color={color.blue} onPress={goToNextPage} />
                  </View>

                  <View style={styles.bottom_container}>
                    <Text style={styles.text}>Hesabın Var Mı?</Text>
                    <TouchableOpacity onPress={goToLoginPage}>
                      <Text style={styles.text_2}> GİRİŞ YAP</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>

              <View key="2">
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                  <View style={styles.logo_container}>
                    <Image style={styles.logo} source={require('../../../assets/main_Logo.png')} resizeMode="contain" />
                  </View>
                  
                  <View style={styles.input_main_container}>
                    <View style={styles.input_container}>
                      <Text style={styles.input_text}>Mail Adresi</Text>
                      <Input
                        value={values.usermail}
                        onType={handleChange('usermail')}
                        onBlur={handleBlur('usermail')}
                        placeholder="E-mail adresinizi giriniz..."
                      />
                      {touched.usermail && errors.usermail && <Text style={styles.error}>{errors.usermail}</Text>}
                    </View>

                    <Text style={styles.input_text}>Şifre</Text>
                    <View style={styles.input_container}>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                          <Input
                            value={values.password}
                            onType={handleChange('password')}
                            onBlur={handleBlur('password')}
                            placeholder="Şifrenizi giriniz..."
                            isSecure={!showPassword}
                          />
                        </View>
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 20 }}>
                          <Icon name={showPassword ? "eye-off" : "eye"} size={30} color={color.brown} />
                        </TouchableOpacity>
                      </View>
                      {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                    </View>
                    <View style={[styles.input_container]}>
                      <Text style={styles.input_text}>Şifre Onay</Text>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                          <Input
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            onBlur={handleBlur('repassword')}
                            placeholder="Şifrenizi tekrar giriniz..."
                            isSecure={!showRepassword}
                          />
                        </View>
                        <TouchableOpacity onPress={() => setShowRepassword(!showRepassword)} style={{ position: "absolute", right: 20 }}>
                          <Icon name={showRepassword ? "eye-off" : "eye"} size={30} color={color.brown} />
                        </TouchableOpacity>
                      </View>
                      {touched.repassword && errors.repassword && <Text style={styles.error}>{errors.repassword}</Text>}
                    </View>
                  </View>

                  <View style={styles.btn_container}>
                    <Button theme='secondary' text="Kayıt Ol" onPress={handleSubmit} />
                  </View>

                  <View style={styles.bottom_container}>
                    <Text style={styles.text}>Hesabın Var Mı?</Text>
                    <TouchableOpacity onPress={goToLoginPage}>
                      <Text style={styles.text_2}> GİRİŞ YAP</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </PagerView>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  );
}

export default RegisterPage;
