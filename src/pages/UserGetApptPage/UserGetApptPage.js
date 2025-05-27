import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, FlatList, Modal, Platform} from "react-native";
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './UserGetApptPage.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window')


const initialFormValues = {
    NewClinicName: '',
};

const validationSchema = Yup.object().shape({
    NewClinicName: Yup.string()
        .required("Klinik adı boş bırakılamaz!"),
});

function UserGetApptPage({ navigation}) {
 
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
  
  
  
  const handleTimeChange = (event, time) => {
    setShowTimePicker(false);
    if (time) setSelectedTime(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  };

    return (
        
        <View style={styles.container}>
            <View style={styles.img_container}>

                <Image
                    source={require('../../assets/vet-resim-yeni.jpeg')}
                    resizeMode='cover'
                    style={styles.img}
                />
                
            </View>
            {/* <View style={{backgroundColor:"orange"}}><Text></Text></View> */}

                <Formik initialValues={initialFormValues}
                    validationSchema={validationSchema} >
                    {({ values, handleChange }) => (
                        <>
                            <View style={styles.edit_container} >
                                <Text style={styles.clinic_title} >İkonyum Veteriner Kliniği</Text>
                                <View style={{  alignItems:'center', justifyContent:'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
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
      backgroundColor: 'coral',
      paddingVertical: 10,
      paddingHorizontal:20,
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
      backgroundColor: 'coral',
      paddingVertical: 10,
      alignItems: 'center',
      paddingHorizontal:20,

    }}
  >
    <Text style={{ color: 'white', fontWeight: 'bold' }}>Saat Seç</Text>
  </TouchableOpacity>
</View>

{/* iOS: Tarih Seç Modal */}
{Platform.OS === 'ios' && showDateModal && (
  <Modal transparent animationType="slide">
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ backgroundColor: '#fff', margin: 20, borderRadius: 10, padding: 20 }}>
        <DateTimePicker
          value={tempDate}
          mode="date"
          display="spinner"
          onChange={(e, d) => d && setTempDate(d)}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'coral', marginTop: 10, padding: 10, borderRadius: 5, alignItems: 'center' }}
          onPress={() => {
            setSelectedDate(formatDate(tempDate));
            setShowDateModal(false);
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Tarihi Seç</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
)}



{/* iOS: Saat Seç Modal */}
{Platform.OS === 'ios' && showTimeModal && (
  <Modal transparent animationType="slide">
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <View style={{ backgroundColor: '#fff', margin: 20, borderRadius: 10, padding: 20 }}>
        <DateTimePicker
          value={tempDate}
          mode="time"
          display="spinner"
          onChange={(e, d) => d && setTempDate(d)}
        />
        <TouchableOpacity
          style={{ backgroundColor: 'coral', marginTop: 10, padding: 10, borderRadius: 5, alignItems: 'center' }}
          onPress={() => {
            setSelectedTime(tempDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            setShowTimeModal(false);
          }}
        >
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Saati Seç</Text>
        </TouchableOpacity>
      </View>
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



      {/* Seçilen tarih ve saat */}
      {(selectedDate || selectedTime) && (
        <Text style={{ marginTop: 20, fontSize: 16, textAlign: 'center' }}>
          Seçilen: {selectedDate ?? '-'} {selectedTime ?? '-'}
        </Text>
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
      <TouchableOpacity onPress={confirmDate} style={{ marginTop: 10, backgroundColor: 'coral', padding: 10, borderRadius: 5 }}>
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
        
        </View>
    )
}

export default UserGetApptPage;