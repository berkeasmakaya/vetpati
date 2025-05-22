import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, FlatList } from "react-native";
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './ClinicEditPage.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";
import { Formik } from 'formik';
import * as Yup from 'yup';


const width = Dimensions.get('window')

const images = [
    { source: require('../../assets/vet-resim-yeni.jpeg') },
    { source: require('../../assets/kedi.jpg.webp') },
    { source: require('../../assets/icon_dog.png') },
    // istediğin kadar
  ];

  const icons = [
    { id: 'bird', source: require('../../assets/icon_bird.png') },
    { id: 'cat', source: require('../../assets/icon_cat.png') },
    { id: 'dog', source: require('../../assets/icon_dog.png') },
    { id: 'rabbit', source: require('../../assets/icon_rabbit.png') },
  ];
const initialFormValues = {

    NewClinicName: '',
    NewSchedule: '',
    NewTitle: '',
    NewAdress:'',

};

const validationSchema = Yup.object().shape({
    NewClinicName: Yup.string()
        .required("Klinik adı boş bırakılamaz!"),
    NewSchedule: Yup.string()
        .required("Çalışma saatleri boş bırakılamaz!"),
    NewTitle: Yup.string()
        .required("Açıklama boş bırakılamaz!"),
    NewAdress: Yup.string()
        .required("Adres boş bırakılamaz!")
});

const chunkArray = (arr, size) => {
    const chunks = [];
    for(let i = 0; i < arr.length; i += size){
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };
  const rows = chunkArray(images, 3);


function ClinicEditPage({ navigation}) {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelect = (id) => {
      if (selectedIds.includes(id)) {
        // seçiliyse çıkar
        setSelectedIds(selectedIds.filter(item => item !== id));
      } else {
        // seçili değilse ekle
        setSelectedIds([...selectedIds, id]);
      }
    };
  
    const renderItem = ({ item }) => {
      const isSelected = selectedIds.includes(item.id);
  
      return (
        <TouchableOpacity
          onPress={() => toggleSelect(item.id)}
          style={styles.edit_icon_container}
        >
          <Image
            source={item.source}
            resizeMode="cover"
            style={styles.edit_icon_card}
          />
          {isSelected && (
            <View style={styles.paw_overlay}>
              <Icon name="check-bold" size={40} color={color.white} />
            </View>
          )}
        </TouchableOpacity>
      );
    };
    return (
        
        <View style={styles.container}>
            <View style={styles.img_container}>

                <Image
                    source={require('../../assets/vet-resim-yeni.jpeg')}
                    resizeMode='cover'
                    style={styles.img}
                />
                <TouchableOpacity style={styles.overlay} >
                    <View style={styles.cancel_save_container} >
                        <TouchableOpacity style={styles.cancel_save_button} >
                            <Text style={styles.cancel_save_text} >İptal Et</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancel_save_button} >
                            <Text style={styles.cancel_save_text} >Kaydet</Text>

                        </TouchableOpacity>
                    </View>
                    <Image
                        source={require('../../assets/changePhoto.png')}
                        resizeMode='contain'
                        style={styles.edit_main_photo}
                    />
                </TouchableOpacity>
            </View>
            {/* <View style={{backgroundColor:"orange"}}><Text></Text></View> */}
            <ScrollView style={styles.info_container}>

                <Formik initialValues={initialFormValues}
                    validationSchema={validationSchema} >
                    {({ values, handleChange }) => (
                        <>
                            <View style={styles.edit_container} >
                                <Text style={styles.edit_text} >Klinik Adı:</Text>
                                <TextInput
                                    value={values.NewClinicName}
                                    placeholder="İkonyum Veteriner Kliniği"
                                    placeholderTextColor="#999"
                                    onChange={handleChange('NewClinicName')}
                                    underlineColorAndroid="transparent"
                                    style={{ width: '70%' }}

                                />
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} ></View>
                            <View style={styles.edit_container} >
                                <Text style={styles.edit_text} >Çalışma Saatleri:</Text>

                                <TextInput
                                    value={values.NewSchedule}
                                    placeholder="Pazartesi - Cumartesi 10 - 19"
                                    autoCapitalize="none"
                                    style={{ width: '70%' }}
                                    onChange={handleChange('NewSchedule')}


                                />
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} ></View>

                            <View style={styles.edit_container} >
                                <Text style={styles.edit_text} >Klinik Açıklama:</Text>

                                <TextInput
                                    value={values.NewTitle}
                                    placeholder="bana bir textinput lazım react native için react native in kendi Textinput bileşeni ile border veya renge sahip olmayacak sadece silik renkle bir placeholder olacak üzeirne dokunulduğunda ise düzenlenecek şekilde"
                                    autoCapitalize="none"
                                    onChange={handleChange('NewTitle')}
                                    multiline={true}
                                    style={{ width: '70%' }}

                                />

                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} ></View>
                            <View style={styles.edit_container} >
                                <Text style={styles.edit_text} >Adres:</Text>

                                <TextInput
                                    value={values.NewAdress}
                                    placeholder="Melikşah Mahallesi Namık Kemal Cad. no:12/d Karatay/Konya"
                                    autoCapitalize="none"
                                    style={{ width: '70%' }}
                                    onChange={handleChange('NewAdress')}


                                />
                            </View>
                            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} ></View>
                            <Text style={{ fontWeight: 'bold', alignSelf: 'flex-start', margin: 10 }} >Galeri:</Text>

                        </>
                    )}

                </Formik>
                {/* <View style={{ flexDirection: 'row' }} >
                    <View style={styles.edit_image_container} >
                        <Image
                            source={require('../../assets/vet-resim-yeni.jpeg')}
                            resizeMode='cover'
                            style={styles.edit_image_card}
                        />
                        <TouchableOpacity style={styles.edit_overlay} >
                            <Image
                                source={require('../../assets/trashWhite.png')}
                                resizeMode='contain'
                                style={styles.edit_icon}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.edit_image_container} >
                        <View style={styles.add_image_card} ></View>
                        <TouchableOpacity style={styles.edit_overlay} >
                            <Image
                                source={require('../../assets/add.png')}
                                resizeMode='contain'
                                style={styles.edit_icon}
                            />
                        </TouchableOpacity>

                    </View>
                </View> */}

{rows.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          {row.map((image, i) => (
            <View key={i} style={styles.edit_image_container}>
              <Image source={image.source} style={styles.edit_image_card} resizeMode="cover" />
              <TouchableOpacity style={styles.edit_overlay} >
                <Image source={require('../../assets/trashWhite.png')} style={styles.edit_icon} resizeMode="contain" />
              </TouchableOpacity>
            </View>
          ))}

          {rowIndex === rows.length - 1 && row.length < 3 &&
            Array.from({ length: 3 - row.length }).map((_, i) => (
              <View key={`empty-${i}`} style={styles.edit_image_container} />
            ))
          }
        </View>
      ))}

      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View style={styles.edit_image_container}>
          <View style={styles.add_image_card} />
          <TouchableOpacity style={styles.edit_overlay} >
            <Image source={require('../../assets/add.png')} style={styles.edit_icon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} ></View>
                            <Text style={{ fontWeight: 'bold', alignSelf: 'flex-start', margin: 10 }} >Patileri Seç:</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <FlatList
        data={icons}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={selectedIds}  // seçimin güncellenmesini sağlar
        showsHorizontalScrollIndicator={false}
      />
    </View>
            </ScrollView>


        </View>
    )
}

export default ClinicEditPage;