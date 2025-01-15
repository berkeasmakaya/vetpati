import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView
} from 'react-native';
import Input from '../../../components/Input';
import styles from './ClinicRegisterPage.style';
import Button from '../../../components/Button';

function ClinicRegisterPage({ navigation }) {
  const goToLoginPage = () => {
    navigation.navigate('FirstPage');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? 'padding' : "height"} style={styles.container}>
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
    </KeyboardAvoidingView>
  );
}

export default ClinicRegisterPage;
