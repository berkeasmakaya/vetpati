import React, {useState} from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from "react-native";
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import styles from './ClinicMainPage.style'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";
import Carousel from "react-native-reanimated-carousel";
import { useSelector } from "react-redux";
import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native'



const images = [
    'https://picsum.photos/id/1011/400/300',
    'https://picsum.photos/id/1012/400/300',
    'https://picsum.photos/id/1013/400/300',
];
const placeName = 'Aydoğdu Mah. Çeçenistan Cad. No:71/D Meram/Konya'
const { width } = Dimensions.get('window')

function ClinicMainPage({navigation}){
    const {clinicName, address, description, clinicHeaderImage, animalTypes} = useSelector((state)=>state.clinics)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isModalPawVisible, setIsModalPawVisible] = useState(false)

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible)
    }
    const togglePawModal = () => {
        setIsModalPawVisible(!isModalPawVisible)
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
            <View style={styles.float_buttons_container}>
                <FloatingButton onPress={toggleModal} icon_name="map-marker" icon_color={color.blue} />
                <FloatingButton onPress={togglePawModal} icon_name="paw" icon_color={color.brown}/>
            </View>
        </View>
    )
}

export default ClinicMainPage;