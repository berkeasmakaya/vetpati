import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../../components/Button/Button'
import styles from './UserClinicDetailPage.style'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../redux/favoriteClinicSlice'

const images = [
    'https://picsum.photos/id/1011/400/300',
    'https://picsum.photos/id/1012/400/300',
    'https://picsum.photos/id/1013/400/300',
];
const clinic = {
    id: 1,
    name: "İkyonyum Veteriner Kliniği"
}

function UserClinicDetailPage({ navigation }) {
    const dispatch = useDispatch();
    const isFavorite = useSelector(state =>
        state.favorites.clinics.some(item => item.id === clinic.id)
    );

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
            </View>
            <View style={styles.float_buttons_container}>
                <FloatingButton icon_name="map-marker" icon_color={color.blue} />
                <FloatingButton icon_name="paw" icon_color={color.brown} />
                <FloatingButton icon_name={isFavorite ? "star":"star-outline"} icon_color="gold" onPress={toggleFavorite} />
            </View>
            <View style={styles.buton_container}>
                <Button text="Randevu Al" theme='fourth' onPress={handleGetAppt} />
            </View>
        </View>
    )
}

export default UserClinicDetailPage;