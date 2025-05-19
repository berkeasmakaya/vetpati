import React, { useRef, useState } from "react";
import { Alert, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import PagerView from "react-native-pager-view";
import Input from '../../../components/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './ClinicRegisterPage.style';
import FloatingButton from '../../../components/FloatingButton/FloatingButton'
import DotIndicator from "../../../components/DotIndicator/DotIndicator";
import color from "../../../styles/color";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomModal from "../../../components/modals/CustomModal/CustomModal";


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
const totalPages = 4;

function ClinicRegisterPage({ navigation }) {
  const [animalList, setAnimalList] = useState(["dog", "cat", "bird", "rabbit"]);
  const [selectedAnimals, setSelectedAnimals] = useState([])
  const [clinicImage, setClinicImage] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const handleOpenCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.assets?.[0]?.uri) {
        setClinicImage({ uri: response.assets[0].uri });
      }
    });
  };

  const handleOpenGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.errorCode) {
        if (response.assets && response.assets.length > 0) {
          setClinicImage({ uri: response.assets[0].uri });
        }
      }
      setModalVisible(false)
    });
  }

  const animalLogos = {
    dog: require('../../../assets/icon_dog.png'),
    cat: require('../../../assets/icon_cat.png'),
    bird: require('../../../assets/icon_bird.png'),
    rabbit: require('../../../assets/icon_rabbit.png')
  }

  const toggleAnimalSelection = (animal) => {
    if (selectedAnimals.includes(animal)) {
      setSelectedAnimals(selectedAnimals.filter(item => item !== animal))
    } else {
      setSelectedAnimals([...selectedAnimals, animal])
    }
  }


  const renderAnimals = ({ item }) => {
    const isSelected = selectedAnimals.includes(item)
    return (
      <TouchableOpacity onPress={() => toggleAnimalSelection(item)}
        style={styles.render_animal_container}>
        <Image
          source={animalLogos[item]}
          style={{
            width: 80,
            height: 80,
            opacity: isSelected ? 1 : 0.6,
          }}
        />
        {isSelected && (
          <View style={{
            position: 'absolute',
            top: 5,
            right: 5,
            backgroundColor: '#4CAF50',
            borderRadius: 10,
            padding: 2,
          }}>
            <Icon name="check" size={16} color={color.white} />
          </View>
        )}
      </TouchableOpacity>
    )
  }
  const pagerRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0);
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      const nextPage = currentPage + 1;
      pagerRef.current?.setPage(nextPage);
      setCurrentPage(nextPage)
    }
  }
  const goToClinicPage = () => {
    navigation.navigate("ClinicAppStack")
  }
  const [image, setImage] = useState(null)

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <PagerView style={styles.pageContainer} initialPage={0} ref={pagerRef} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
          <View key="1">
            <Formik initialValues={initialFormValues} validationSchema={validationSchema}>
              {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                <View style={styles.pageContainer}>
                  <View style={styles.logo_container}>
                    <Image
                      source={require('../../../assets/main_Logo.png')}
                      style={styles.logo}
                      resizeMode='contain'
                    />
                  </View>
                  <View style={styles.title_container}>
                    <Text style={styles.title}>Kliniğini oluşturmak için bir kaç bilgiye ihtiyacımız var...</Text>
                  </View>
                  <View style={styles.input_container}>
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
                    //multiline={false}
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
                  </View>
                  <View style={styles.buton_container}>
                    <FloatingButton icon_name="arrow-right" icon_color={color.blue} onPress={goToNextPage} />
                  </View>

                </View>
              )}
            </Formik>
          </View>

          <View key="2">
            <Formik initialValues={initialFormValues} validationSchema={validationSchema}>
              {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                <View style={styles.pageContainer}>
                  <View style={styles.logo_container}>
                    <Image
                      source={require('../../../assets/main_Logo.png')}
                      style={styles.logo}
                      resizeMode='contain'
                    />
                  </View>
                  <View style={styles.title_container}>
                    <Text style={styles.title}>Kliniğini oluşturmak için bir kaç bilgiye ihtiyacımız var...</Text>
                  </View>
                  <View style={styles.input_container}>
                    <Text style={styles.input_text}>Email</Text>
                    <Input
                      value={values.usermail}
                      placeholder="Email.."
                      onType={handleChange('usermail')}
                      onBlur={handleBlur('usermail')}
                    />
                    {touched.usermail && errors.usermail && (
                      <Text style={styles.error}>{errors.usermail}</Text>
                    )}
                    <Text style={styles.input_text}>Şifre</Text>
                    <Input
                      value={values.password}
                      placeholder="Şifre..."
                      onType={handleChange('password')}
                      onBlur={handleBlur('password')}
                    //multiline={false}
                    />
                    {touched.password && errors.password && (
                      <Text style={styles.error}>{errors.password}</Text>
                    )}
                    <Text style={styles.input_text}>Şifre Tekrarı</Text>
                    <Input
                      value={values.repassword}
                      placeholder="Telefon Numarası..."
                      keyboardType="numeric"
                      onType={handleChange('repassword')}
                      onBlur={handleBlur('repassword')}
                    />
                    {touched.repassword && errors.repassword && (
                      <Text style={styles.error}>{errors.repassword}</Text>
                    )}
                  </View>
                  <View style={styles.buton_container}>
                    <FloatingButton icon_name="arrow-right" icon_color={color.blue} onPress={goToNextPage} />
                  </View>

                </View>
              )}
            </Formik>
          </View>

          <View key="3" >
            <View style={styles.pageContainer}>
              <View style={styles.logo_container}>
                <Image
                  source={require('../../../assets/main_Logo.png')}
                  style={styles.logo}
                  resizeMode='contain'
                />
              </View>
              <View style={[styles.title_container, {}]}>
                <Text style={styles.title}>Kliniğini oluşturmak için bir kaç bilgiye ihtiyacımız var...</Text>
              </View>
              <View style={styles.input_container}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                  <Text style={{ marginBottom: 30, fontSize: 18, fontStyle: "italic" }}>Galerinden klinik sayfanın başlık görselini ekle</Text>
                  {!clinicImage ? (
                    <TouchableOpacity style={styles.add_image_btn} onPress={()=>{setModalVisible(true)}}>
                      <Icon name="plus" size={40} color="white" />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={()=>{setModalVisible(true)}}>

                      <Image
                        source={{ uri: clinicImage.uri }}
                        style={{ width: 200, height: 200, }}
                        resizeMode="contain"
                      />

                    </TouchableOpacity>
                  )}
                  <CustomModal
                    isVisible={modalVisible}
                    title={"Fotoğraf Yükle"}
                    message={"Bir Seçenek Belirleyin"}
                    onClose={() => setModalVisible(false)}
                    buttons={[
                      { text: "Galeriden Seç", onPress: handleOpenGallery, theme: "fourth" },
                      { text: "Fotoğraf Seç", onPress: handleOpenCamera, theme: "third" },
                      { text: "İptal", onPress: () => setModalVisible(false), theme: "primary" },
                    ]}
                  />
                </View>

              </View>
              <View style={styles.buton_container}>
                <FloatingButton icon_name="arrow-right" icon_color={color.blue} onPress={goToNextPage} />
              </View>
            </View>
          </View>

          <View key="4" >
            <View style={styles.pageContainer}>
              <View style={styles.logo_container}>
                <Image
                  source={require('../../../assets/main_Logo.png')}
                  style={styles.logo}
                  resizeMode='contain'
                />
              </View>
              <View style={styles.title_container}>
                <Text style={styles.title}>Kliniğini oluşturmak için bir kaç bilgiye ihtiyacımız var...</Text>
              </View>
              <View style={styles.input_container}>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <View style={{ flex: 0.25 }}>
                    <Text style={{ fontSize: 20, fontStyle: "italic" }}>Bakımını yapacağın patileri seç</Text>
                  </View>
                  <View style={{ flex: 0.75 }}>
                    <FlatList
                      data={animalList}
                      renderItem={renderAnimals}
                      horizontal
                      //removeClippedSubviews={false}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.buton_container}>
                <FloatingButton icon_name="arrow-right" icon_color={color.blue} onPress={goToClinicPage} />
              </View>
            </View>
          </View>

        </PagerView>


        <View style={styles.indicator_container}>
          <DotIndicator currentPage={currentPage} totalPages={totalPages} />
        </View>
      </View>
    </View>
  )
}

export default ClinicRegisterPage;
