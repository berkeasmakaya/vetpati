import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, FlatList, Platform } from "react-native";
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './UserGetApptPage.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from "../../components/Button/Button";
import Modal from "react-native-modal";
const { width } = Dimensions.get('window')


const initialFormValues = {
  NewClinicName: '',
};

const validationSchema = Yup.object().shape({
  NewClinicName: Yup.string()
    .required("İleti alanı boş bırakılamaz!"),
});

function UserGetApptPage({ navigation }) {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [tempDate, setTempDate] = useState(new Date());
  const [showDateModal, setShowDateModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);


  const monthsTR = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];

  const formatDate = (date) => {
    const day = date.getDate();
    const month = monthsTR[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  const [isModalVisible, setIsModalVisible] = useState(false)
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const handleDateChange = (event, date) => {
    if (event.type === 'set' && date) {
      setTempDate(date);
      setSelectedDate(formatDate(date));
    }
    setShowDatePicker(false);
  };


  const confirmDate = () => {
    setSelectedDate(formatDate(tempDate));
    setShowDatePicker(false);
  };

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleTimeChange = (event, time) => {
    setShowTimePicker(false);
    if (time) setSelectedTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };
 const pawData = [
  {image:require('../../assets/icon_dog.png'), name:'Badem', kind:'Husky', age:'2 Yıl 8 Ay'},
  {image:require('../../assets/icon_cat.png'), name:'Mırnav', kind:'Ankara', age:'1 Yıl 4 Ay'}
 ];
  const renderPaws = ({item})=>{

    return(
      <TouchableOpacity style={styles.select_paw_card} >
      <Image
        source={item.image}
        resizeMode="contain"
        style={{ width: width / 6, height: width / 6 }}
      />
      <View style={{ justifyContent: 'center', margin: 5, }} >
      <Text style={{ fontWeight: 'bold', fontSize: width / 20, color: color.brown }} >{item.name}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: width / 20 }} >{item.kind} - {item.age}</Text>

    </View>
    </TouchableOpacity>
    );
  }

  return (

    <View style={styles.container}>

      <View style={styles.img_container}>

        <Image
          source={require('../../assets/vet-resim-yeni.jpeg')}
          resizeMode='cover'
          style={styles.img}
        />

      </View>
      <TouchableOpacity style={styles.back_btn} onPress={handleGoBack}>
        <Icon name="arrow-left" color={color.white} size={30} />
      </TouchableOpacity>
      {/* <View style={{backgroundColor:"orange"}}><Text></Text></View> */}

      <Formik initialValues={initialFormValues}
        validationSchema={validationSchema} >
        {({ values, handleChange }) => (
          <>
            <View style={styles.edit_container} >
              <Text style={styles.clinic_title} >İkonyum Veteriner Kliniği</Text>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Platform.OS === 'ios') {
                        setShowDateModal(true);
                      } else {
                        setShowDatePicker(true);
                      }
                    }}
                    style={{
                      margin: 10,
                      borderRadius: 5,
                      backgroundColor: color.orange,
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Tarih Seç</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setShowTimeModal(true)}
                    style={{
                      margin: 10,
                      borderRadius: 5,
                      backgroundColor: color.orange,
                      paddingVertical: 10,
                      alignItems: 'center',
                      paddingHorizontal: 20,

                    }}
                  >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Saat Seç</Text>
                  </TouchableOpacity>
                </View>

                {/* iOS: Tarih Seç Modal */}
                {Platform.OS === 'ios' && (
                  <Modal
                    isVisible={showDateModal}
                    onBackdropPress={() => setShowDateModal(false)}
                  >

                    <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
                      <DateTimePicker
                        value={tempDate}
                        mode="date"
                        display="spinner"
                        onChange={(e, d) => d && setTempDate(d)}
                      />
                      <TouchableOpacity
                        style={{ backgroundColor: color.orange, marginTop: 10, padding: 10, borderRadius: 5, alignItems: 'center' }}
                        onPress={() => {
                          setSelectedDate(formatDate(tempDate));
                          setShowDateModal(false);
                        }}
                      >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Tarihi Seç</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                )}




                {/* iOS: Saat Seç Modal */}
                {Platform.OS === 'ios' && (
                  <Modal
                    isVisible={showTimeModal}
                    onBackdropPress={() => setShowTimeModal(false)}
                  >

                    <View style={{ backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
                      <DateTimePicker
                        value={tempDate}
                        mode="time"
                        display="spinner"
                        onChange={(e, d) => d && setTempDate(d)}
                      />
                      <TouchableOpacity
                        style={{ backgroundColor: color.orange, marginTop: 10, padding: 10, borderRadius: 5, alignItems: 'center' }}
                        onPress={() => {
                          setSelectedTime(tempDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                          setShowTimeModal(false);
                        }}
                      >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Saati Seç</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                )}


                {/* Android: Saat doğrudan açılır */}
                {Platform.OS === 'android' && showTimeModal && (
                  <DateTimePicker
                    value={tempDate}
                    mode="time"
                    display="default"
                    is24Hour={true}
                    onChange={(event, date) => {
                      if (event.type === 'set' && date) {
                        setSelectedTime(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                      }
                      setShowTimeModal(false);
                    }}
                  />
                )}





                {/* Date Picker */}
                {showDatePicker && (
                  <>
                    <DateTimePicker
                      value={tempDate}
                      mode="date"
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={handleDateChange}
                    />
                    {Platform.OS === 'ios' && (
                      <TouchableOpacity onPress={confirmDate} style={{ marginTop: 10, backgroundColor: color.orange, padding: 10, borderRadius: 5 }}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Seç</Text>
                      </TouchableOpacity>
                    )}
                  </>
                )}


                {/* Time Picker */}
                {showTimePicker && (
                  <DateTimePicker
                    value={new Date()}
                    mode="time"
                    is24Hour={true}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={handleTimeChange}
                  />
                )}
              </View>
              <TextInput
                value={values.NewClinicName}
                placeholder="Genel Aşı kontrolü ve tırnak kesimi için randevu rica ediyorum, teşekkürler"
                placeholderTextColor="#999"
                onChange={handleChange('NewClinicName')}
                style={styles.exp_input}
                multiline

              />
            </View>

          </>
        )}
      </Formik>
      <TouchableOpacity onPress={toggleModal} style={styles.add_pati_button} >
        <Text style={{ color: '#fff', fontWeight: 'bold' }} >Pati Seç</Text>
      </TouchableOpacity>
      <Modal onBackdropPress={() => setIsModalVisible(false)} isVisible={isModalVisible} animationIn="zoomIn" animationOut="zoomOut">
        <View style={{ backgroundColor: "#d3d3d3", flex: 0.5, borderRadius: 10, justifyContent: 'space-evenly' }}>


          <View style={{ alignItems: 'center', margin: 20, }} >

            <Text style={{ fontSize: width / 15, fontWeight: 'bold', marginRight: 20 }} >Patini Seç</Text>
                  <FlatList
                  data={pawData}
                  keyExtractor={(item,index)=>index.toString()}
                  renderItem={renderPaws}
                  />


          </View>

        </View>
      </Modal>
      <View style={styles.check_card} >
        <Image
          source={require('../../assets/icon_dog.png')}
          resizeMode="contain"
          style={{ width: width / 6, height: width / 6 }}
        />
        <View style={{ justifyContent: 'center', margin: 5, }} >
          <Text style={{ fontWeight: 'bold', fontSize: width / 20 }} >{selectedDate ?? '-'} - {selectedTime ?? '-'}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: width / 20, color: color.brown }} >Badem</Text>

        </View>
      </View>
      <View style={{ padding: 20 }} >
        <Button theme="fifth" text={'RANDEVU İSTEĞİ GÖNDER'} />
      </View>
    </View>
  )
}

export default UserGetApptPage;