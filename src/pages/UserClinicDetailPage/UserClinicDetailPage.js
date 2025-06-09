import { View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions, Linking, FlatList } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import styles from './UserClinicDetailPage.style'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../redux/favoriteClinicSlice'
import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native'

const images = [
    'https://picsum.photos/id/1011/400/300',
    'https://picsum.photos/id/1012/400/300',
    'https://picsum.photos/id/1013/400/300',
];
const placeName = 'Aydoğdu Mah. Çeçenistan Cad. No:71/D Meram/Konya'
const clinic = {
    id: 1,
    name: "İkyonyum Veteriner Kliniği"
}
const openMapsWithTitle = () => {
    const placeName = encodeURIComponent("Aydoğdu Mah. Çeçenistan Cad. No:71/D Meram/Konya"); // Boşlukları düzgün işler
    const url = Platform.select({
        ios: `http://maps.apple.com/?daddr=${placeName}`,
        android: `http://maps.google.com/maps?daddr=${placeName}`
    });

    Linking.openURL(url);
};
const { width } = Dimensions.get('window')
function UserClinicDetailPage({ navigation }) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state =>
        state.favorites.clinics.some(item => item.id === clinic.id)
    );
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isModalPawVisible, setIsModalPawVisible] = useState(false)

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }
    const togglePawModal = () => {
        setIsModalPawVisible(!isModalPawVisible)
    }
    // Tıklanınca ekle/kaldır
    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(clinic.id));
        } else {
            dispatch(addFavorite(clinic));
        }
    };
    const handleGoBack = () => {
        navigation.goBack();
    }
    const handleGetAppt = () => {
        navigation.navigate("UserGetApptPage")
    }
    const imagesPaw = [
        require('../../assets/icon_bird.png'),
        require('../../assets/icon_cat.png'),
        require('../../assets/icon_rabbit.png'),
        require('../../assets/icon_dog.png'),
      
    ];

   const renderPaw = ({item})=>{
    return(
        <Image style={{width:width/5, height:width/5, margin:5}} source={item} />     
    )
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
            <View style={styles.info_container}>
                <Text style={styles.clinic_title}>İkonyum Veteriner Kliniği</Text>
                <Text style={styles.clinic_working_hours}>Pazartesi-Cumartesi  10:00-19:00</Text>
                <Text style={styles.clinic_info}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
            </View>
            <View style={styles.slider_container}>
                <View style={styles.slider}>
                    <Carousel
                        loop
                        width={300}
                        height={150}
                        autoPlay={true}
                        data={images}
                        scrollAnimationDuration={2000}
                        renderItem={({ item }) => (
                            <Image
                                source={{ uri: item }}
                                style={styles.slider_img}
                            />
                        )}
                    />
                </View>
                <Modal isVisible={isModalVisible} animationIn="zoomIn" animationOut="zoomOut">
                    <View style={{ backgroundColor: "#fff", flex: 0.5, borderRadius: 10, justifyContent: 'space-evenly' }}>

                        <TouchableOpacity style={styles.close_btn} onPress={toggleModal}>
                            <Icon name='window-close' size={30} color={color.white} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 20, }} >
                            <LottieView
                                source={require('../../assets/animations/Map.json')}
                                autoPlay
                                loop
                                style={{ width: width * 0.1, height: width * 0.25, marginRight: 10 }}
                            />
                            <View>
                                <Text style={{ fontSize: width / 15, fontWeight: 'bold', marginRight: 20 }} >Klinik Konumu</Text>

                                <Text style={{ fontSize: width / 20, fontWeight: 'bold', marginTop: 10, marginRight: 20 }} >{placeName}</Text>

                            </View>


                        </View>
                        <TouchableOpacity style={styles.get_location_button} >
                            <Text style={{ fontWeight: 'bold', fontSize: width / 15, color: '#fff' }} >YOL TARİFİ AL</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <Modal isVisible={isModalPawVisible} animationIn="zoomIn" animationOut="zoomOut">
                    <View style={{ backgroundColor: "#fff", flex: 0.5, borderRadius: 10, justifyContent: 'space-evenly' }}>

                        <TouchableOpacity style={styles.close_btn} onPress={togglePawModal}>
                            <Icon name='window-close' size={30} color={color.white} />
                        </TouchableOpacity>
                           
                            <View style={{alignItems:'center'}} >
                                <Text style={{ fontSize: width / 15, fontWeight: 'bold', marginRight: 20 }} >Klinik Patileri</Text>
                            <FlatList
                            style={{height:width/2}}
                            data={imagesPaw}
                            renderItem={renderPaw}
                            keyExtractor={(item, index) => index.toString()}
                            numColumns={3}
                            />
                            </View>


                     
                    </View>
                </Modal>
            </View>
            <View style={styles.float_buttons_container}>
                <FloatingButton onPress={toggleModal} icon_name="map-marker" icon_color={color.blue} />
                <FloatingButton onPress={togglePawModal} icon_name="paw" icon_color={color.brown} />
                <FloatingButton icon_name={isFavorite ? "star" : "star-outline"} icon_color="gold" onPress={toggleFavorite} />
            </View>
            <View style={styles.buton_container}>
                <Button text="Randevu Al" theme='fourth' onPress={handleGetAppt} />
            </View>
        </View>
    )
}

export default UserClinicDetailPage;