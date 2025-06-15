import React, { useRef, useState } from "react";
import { Alert, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import PagerView from "react-native-pager-view";
import Input from '../../../components/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './VetRegisterPage.style';
import FloatingButton from '../../../components/FloatingButton/FloatingButton'
import DotIndicator from "../../../components/DotIndicator/DotIndicator";
import color from "../../../styles/color";
import Button from "../../../components/Button/Button";
import { getAuth, createUserWithEmailAndPassword } from "@react-native-firebase/auth";
import { createVet } from "../../../services/vetApi";
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import Loading from "../../../components/Loading/Loading";

const initialFormValues = {
  firstName: "",
  lastName: "",
  usermail: '',
  phoneNum: '',
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
  usermail: Yup.string()
    .email("E-mail formatına uygun girilmeli!")
    .required("E-mail alanı boş bırakılamaz!"),
  phoneNum: Yup.string()
    .required("Telefon numarası boş olamaz!")
    .min(10, "Telefon numarası en az 10 haneli olmalıdır!")
    .max(11, "Telefon numarası en fazla 11 haneli olmalıdır!"),
  password: Yup.string()
    .required("Şifre boş bırakılamaz!")
    .min(6, "Şifre en az 6 karakter olmalı!"),
  repassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Şifreler Aynı Olmalıdır!')
    .required('Şifre Onayı Zorunludur!'),
})

const totalPages = 2;

function VetRegisterPage({ navigation }) {
  const [loading, setLoading] = useState(false)
  const pagerRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0);


  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      const nextPage = currentPage + 1;
      pagerRef.current?.setPage(nextPage);
      setCurrentPage(nextPage)
    }
  }

  const handleRegister = async (values) => {
    console.log("handle Register çalıştı")
    setLoading(true)
    const auth = getAuth()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.usermail, values.password);
      const uid = userCredential.user.uid;
      try {
        await createVet(uid, {
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phoneNum,
        })
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Başarılı",
          textBody: "Kayıt Olma Başarılı",
          autoClose: 500
        });
        navigation.navigate("CreateClinicPage")
      } catch (error) {
        await userCredential.user.delete();
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: "HATA",
          textBody: "Bir Şeyler Ters Gitti",
          autoClose: 800
        });
      }
    } catch (error) {
      console.log(error)
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "HATA",
        textBody: "Bir Şeyler Ters Gitti",
        autoClose: 800
      });
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
          <View style={{ flex: 1 }}>
            {loading && <Loading />}
            <PagerView style={styles.pageContainer} initialPage={0} ref={pagerRef} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>

              <View key="1">
                <View style={styles.pageContainer}>
                  <View style={styles.logo_container}>
                    <Image source={require('../../../assets/main_Logo.png')} style={styles.logo} resizeMode='contain' />
                  </View>
                  <View style={styles.input_container}>
                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.input_text}>İsim</Text>
                      <Input value={values.firstName} placeholder="İsminiz..." onType={handleChange('firstName')} onBlur={handleBlur('firstName')} />
                      {touched.firstName && errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}
                    </View>

                    <View style={{ marginVertical: 10 }}>

                      <Text style={styles.input_text}>Soyisim</Text>
                      <Input value={values.lastName} placeholder="Soyisminiz..." onType={handleChange('lastName')} onBlur={handleBlur('lastName')} />
                      {touched.lastName && errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}
                    </View>

                    <View style={{ marginVertical: 10 }}>
                      <Text style={styles.input_text}>Telefon Numarası</Text>
                      <Input value={values.phoneNum} placeholder="05xx xxx xx xx" keyboardType="numeric" onType={handleChange('phoneNum')} onBlur={handleBlur('phoneNum')} />
                      {touched.phoneNum && errors.phoneNum && <Text style={styles.error}>{errors.phoneNum}</Text>}
                    </View>
                  </View>
                  <View style={styles.buton_container}>
                    <FloatingButton icon_name="arrow-right" icon_color={color.blue} onPress={goToNextPage} />
                  </View>
                </View>
              </View>

              <View key="2">
                <View style={styles.pageContainer}>
                  <View style={styles.logo_container}>
                    <Image source={require('../../../assets/main_Logo.png')} style={styles.logo} resizeMode='contain' />
                  </View>
                  <View style={styles.input_container}>
                    <Text style={styles.input_text}>Email</Text>
                    <Input value={values.usermail} placeholder="Email.." onType={handleChange('usermail')} onBlur={handleBlur('usermail')} />
                    {touched.usermail && errors.usermail && <Text style={styles.error}>{errors.usermail}</Text>}
                    <Text style={styles.input_text}>Şifre</Text>
                    <Input value={values.password} placeholder="Şifre..." onType={handleChange('password')} onBlur={handleBlur('password')} />
                    {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                    <Text style={styles.input_text}>Şifre Tekrarı</Text>
                    <Input value={values.repassword} placeholder="Şifre Tekrarı..." onType={handleChange('repassword')} onBlur={handleBlur('repassword')} />
                    {touched.repassword && errors.repassword && <Text style={styles.error}>{errors.repassword}</Text>}
                  </View>
                  <View style={styles.buton_container}>
                    <Button theme='secondary' text="Kayıt Ol" onPress={handleSubmit} />
                  </View>
                </View>
              </View>

            </PagerView>
            <View style={styles.indicator_container}>
              <DotIndicator currentPage={currentPage} totalPages={totalPages} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default VetRegisterPage;
