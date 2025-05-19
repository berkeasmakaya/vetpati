import React from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import color from "../../../styles/color";
import Input from "../../../components/Input/Input";
import styles from './ForgotPasswordPage.style'
import Button from "../../../components/Button/Button";
import { Formik } from "formik";
import * as Yup from 'yup';


const initialFormValues = {
    password: '',
    repassword: '',
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required("Şifre boş bırakılamaz!")
        .min(6, "Şifre en az 6 karakter olmalı!"),
    repassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Şifreler Aynı Olmalıdır!')
        .required('Şifre Onayı Zorunludur!'),
})

function ForgotPasswordPage() {
    return (
        <Formik
            initialValues={initialFormValues}
            validationSchema={validationSchema}
        >
            {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                <>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.image_container}>
                            <Image
                                source={require('../../../assets/main_Logo.png')}
                                style={styles.image}

                            />
                        </View>
                        <View style={styles.inner_container}>
                            <Text style={styles.header}>Şifreni Değiştir</Text>
                            <View style={styles.input_main_container}>
                                <View style={styles.input_container}>
                                    <Text style={styles.input_text}>Yeni Şifre</Text>
                                    <Input
                                        isSecure={true}
                                        placeholder="Yeni Şifrenizi Giriniz"
                                        value={values.password}
                                        onType={handleChange("password")}
                                        onBlur={handleBlur("password")}
                                    />
                                    {touched.password && errors.password && (
                                        <Text style={styles.error}>{errors.password}</Text>
                                    )}
                                </View>
                                <View style={styles.input_container}>
                                    <Text style={styles.input_text}>Yeni Şifre Tekrar</Text>
                                    <Input
                                        isSecure={true}
                                        placeholder="Yeni Şifrenizi Tekrar Giriniz"
                                        value={values.repassword}
                                        onType={handleChange("repassword")}
                                        onBlur={handleBlur("repassword")}
                                    />
                                    {touched.repassword && errors.repassword && (
                                        <Text style={styles.error}>{errors.repassword}</Text>
                                    )}
                                </View>
                            </View>
                            <View style={styles.buton_container}>
                                <Button text="Kaydet" theme="fourth" onPress={handleSubmit} />
                            </View>
                        </View>
                    </SafeAreaView>
                </>
            )}
        </Formik>
    )
}

export default ForgotPasswordPage;