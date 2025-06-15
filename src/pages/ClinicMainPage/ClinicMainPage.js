import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './ClinicMainPage.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";
import { useSelector } from "react-redux";

const images = [
    'https://picsum.photos/id/1011/400/300',
    'https://picsum.photos/id/1012/400/300',
    'https://picsum.photos/id/1013/400/300',
];

function ClinicMainPage({navigation}){
    const {clinicName, address, description, clinicHeaderImage, animalTypes} = useSelector((state)=>state.clinics)

    return (
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image
                    source={{uri:clinicHeaderImage}}
                    resizeMode='cover'
                    style={styles.img}
                />
                <TouchableOpacity style={styles.edit_btn} onPress={()=>navigation.openDrawer()}>
                    <Icon name="reorder-horizontal" size={30} color={color.blue}/>
                </TouchableOpacity>
            </View>
            {/* <View style={{backgroundColor:"orange"}}><Text></Text></View> */}
            <View style={styles.info_container}>
                <Text style={styles.clinic_title}>{clinicName}</Text>
                <Text style={styles.clinic_working_hours}>{address}</Text>
                <Text style={styles.clinic_info}>{description}</Text>
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