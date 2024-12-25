import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Input from '../../../components/Input';
import styles from './ClinicRegisterPage.style';
import Button from '../../../components/Button';

function ClinicRegisterPage({navigation}) {
  const goToLoginPage = () => {
    navigation.navigate('FirstPage');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding': "padding"} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logo_container}>
          <Text>Logo</Text>
        </View>
        <View style={styles.input_container}>
          <Text style={styles.input_text}>Mail Adresi</Text>
          <Input placeholder="Mail Adresi.." />
          <Text style={styles.input_text}>Klinik Adı</Text>
          <Input placeholder="Klinik Adı..." />
          <Text style={styles.input_text}>Klinik Adresi</Text>
          <Input placeholder="Klinik Adresi..." />
          <Text style={styles.input_text}>Telefon Numarası</Text>
          <Input placeholder="Telefon Numarası..." />
          <Text style={styles.input_text}>Şifre</Text>
          <Input placeholder="Şifre..." />
          <Text style={styles.input_text}>Şifre Onay</Text>
          <Input placeholder="Şifre Onay..." />
        </View>
        <View style={styles.button_container}>
          <Button text="Kayıt Ol" theme="secondary" />
        </View>
      </ScrollView>
      <View style={styles.bottom_container}>
        <Text style={styles.text}>Hesabın Var Mı?</Text>
        <TouchableOpacity onPress={goToLoginPage}>
          <Text style={styles.text_2}> Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default ClinicRegisterPage;
