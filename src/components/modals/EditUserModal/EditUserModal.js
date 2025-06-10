import React, { useState } from "react"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal'
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import styles from './EditUserModal.style'
import { Formik } from "formik";
import * as Yup from 'yup';
import { getAuth } from "@react-native-firebase/auth";
import { updateUserData } from "../../../services/userApi";
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../../redux/userSlice";
import Loading from "../../Loading/Loading";
import color from "../../../styles/color";

const initialFormValues = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .notRequired("İsim alanı boş bırakılamaz!")
    .min(3, "İsim en az 3 harfli olmalı!"),
  lastName: Yup.string()
    .notRequired("Soyisim alanı boş bırakılamaz!")
    .min(3, "Soyisim en az 3 harfli olmalı!"),
  address: Yup.string(),
  phoneNumber: Yup.string()
    .notRequired()
    .min(10, "Telefon numarası en az 10 haneli olmalıdır!")
    .max(11, "Telefon numarası en fazla 11 haneli olmalıdır!"),
});

const EditUserModal = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [showWarning, setShowWarning] = useState(false);

  const handleUpdate = async (values) => {
    try {
      setLoading(true);
      const auth = getAuth();
      const userUid = auth.currentUser.uid;

      const updatedUserData = {};
      if (typeof values.firstName === "string" && values.firstName.trim()) {
        updatedUserData.firstName = values.firstName;
      }
      if (typeof values.lastName === "string" && values.lastName.trim()) {
        updatedUserData.lastName = values.lastName;
      }
      if (typeof values.phoneNumber === "string" && values.phoneNumber.trim()) {
        updatedUserData.phoneNumber = values.phoneNumber;
      }
      if (typeof values.address === "string" && values.address.trim()) {
        updatedUserData.address = values.address;
      }

      if (Object.keys(updatedUserData).length === 0) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 2000);
        setLoading(false);
        return;
      }

      await updateUserData(userUid, updatedUserData);
      dispatch(updateUserInfo(updatedUserData))

      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Başarılı",
        textBody: "Bilgileriniz güncellendi!",
        autoClose: 800
      });

      onClose();
    } catch (error) {
      console.log("Kullanıcı bilgileri güncellenirken hata oluştu:", error);
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "Hata",
        textBody: "Bilgiler güncellenemedi.",
        autoClose: 800
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <Modal isVisible={isVisible} style={styles.modal}>
      {loading && <Loading />}
      
      {showWarning && (
        <View style={{ backgroundColor:color.backgroundGray,padding: 10,borderRadius: 8,marginHorizontal: 16, marginBottom: 10,}}>
          <Text style={{color: 'red',fontWeight: '600',textAlign: 'center',}}>Güncellemek için en az bir alan doldurun.</Text>
        </View>
      )}

      <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={handleUpdate}>
        {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
          <>
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity style={styles.buttons} onPress={onClose}>
                  <Text style={styles.button_text}>İptal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttons} onPress={handleSubmit}>
                  <Text style={styles.button_text}>Kaydet</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.input_main_container}>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>İsim</Text>
                  <Input
                    value={values.firstName}
                    placeholder="Lütfen İsminizi Giriniz..."
                    onType={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    autoCapitalize="none"
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={styles.error}>{errors.firstName}</Text>
                  )}
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>Soyisim</Text>
                  <Input
                    value={values.lastName}
                    placeholder="Lütfen Soyisminizi Giriniz..."
                    onType={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    autoCapitalize="none"
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={styles.error}>{errors.lastName}</Text>
                  )}
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>Telefon Numarası</Text>
                  <Input
                    value={values.phoneNumber}
                    placeholder="05xx xxx xx xx"
                    onType={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    autoCapitalize="none"
                  />
                  {touched.phoneNumber && errors.phoneNumber && (
                    <Text style={styles.error}>{errors.phoneNumber}</Text>
                  )}
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>Adres (İlçe/İl şeklinde)</Text>
                  <Input
                    value={values.address}
                    placeholder="Lütfen Adresinizi Giriniz..."
                    onType={handleChange('address')}
                    onBlur={handleBlur('address')}
                    autoCapitalize="none"
                  />
                  {touched.address && errors.address && (
                    <Text style={styles.error}>{errors.address}</Text>
                  )}
                </View>
              </View>

              <View style={styles.buton_container}>
                <Button text="Kaydet" theme='fourth' onPress={handleSubmit} />
              </View>

            </SafeAreaView>
          </>
        )}
      </Formik>
    </Modal>
  )
}

export default EditUserModal;

