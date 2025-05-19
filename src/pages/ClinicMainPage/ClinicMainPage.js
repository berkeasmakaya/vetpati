import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './ClinicMainPage.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";

const images = [
    'https://picsum.photos/id/1011/400/300',
    'https://picsum.photos/id/1012/400/300',
    'https://picsum.photos/id/1013/400/300',
];

function ClinicMainPage({navigation}){

    return (
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image
                    source={require('../../assets/vet-resim-yeni.jpeg')}
                    resizeMode='cover'
                    style={styles.img}
                />
                <TouchableOpacity style={styles.edit_btn} onPress={()=>navigation.openDrawer()}>
                    <Icon name="reorder-horizontal" size={30} color={color.blue}/>
                </TouchableOpacity>
            </View>
            {/* <View style={{backgroundColor:"orange"}}><Text></Text></View> */}
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
                        renderItem={({item})=>(
                            <Image
                                source={{uri:item}} 
                                style={styles.slider_img}
                            />
                        )}
                    />
                    
                </View>
            </View>
            <View style={styles.float_buttons_container}>
                <FloatingButton icon_name="map-marker" icon_color={color.blue} />
                <FloatingButton icon_name="paw" icon_color={color.brown}/>
            </View>
        </View>
    )
}

export default ClinicMainPage;