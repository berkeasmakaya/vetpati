import React, { useRef, useState } from "react";
import { Alert, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import PagerView from "react-native-pager-view";
import Input from '../../../components/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './CreateClinicPage.style';
import FloatingButton from '../../../components/FloatingButton/FloatingButton'
import DotIndicator from "../../../components/DotIndicator/DotIndicator";
import color from "../../../styles/color";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CustomModal from "../../../components/modals/CustomModal/CustomModal";
import Button from "../../../components/Button/Button";
import { getAuth} from "@react-native-firebase/auth";
import { Toast, ALERT_TYPE } from "react-native-alert-notification";
import Loading from "../../../components/Loading/Loading";
import { getVetData } from "../../../services/vetApi";
import { createClinic, uploadClinicHeaderImage } from "../../../services/clinicApi";
import { useDispatch } from "react-redux";
import { setAnimalTypes, setClinicAddress, setClinicHeaderImage, setClinicName, setDescription } from "../../../redux/clinicSlice";


const initialFormValues = {
    clinicName: '',
    clinicAddress: '',
    clinicDescription:'',
}

const validationSchema = Yup.object().shape({
    clinicName: Yup.string()
        .required("Klinik adı boş olamaz!"),
    clinicAddress: Yup.string()
        .required("Klinik adresi boş olamaz!"),
    clinicDescription: Yup.string()
        .required("Klinik açıklaması boş olamaz!"),
})

const totalPages = 3;

function CreateClinicPage({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [animalList, setAnimalList] = useState(["dog", "cat", "bird", "rabbit"]);
    const [selectedAnimals, setSelectedAnimals] = useState([])
    const [clinicImage, setClinicImage] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)
    const pagerRef = useRef(null)
    const [currentPage, setCurrentPage] = useState(0);
    const dispatch = useDispatch();
    

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

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            const nextPage = currentPage + 1;
            pagerRef.current?.setPage(nextPage);
            setCurrentPage(nextPage)
        }
    }

    const handleCreateClinic = async (values) => {
        setLoading(true)
        const auth = getAuth()
        try {
            const uid = auth.currentUser.uid
            const userData = await getVetData(uid);
            const vetId = userData._id;

            let imageUrl;
            if (clinicImage) {
                imageUrl = await uploadClinicHeaderImage(clinicImage.uri)
            } else{
                imageUrl = require('../../../assets/vet-resim-yeni.jpeg')
            }
            const clinicData = {
                clinicName:values.clinicName,
                address:values.clinicAddress,
                description:values.clinicDescription,
                clinicHeaderImage:imageUrl,
                animalTypes:selectedAnimals,
            }
            await createClinic(vetId,clinicData)
            console.log(values)
            dispatch(setClinicName(values.clinicName))
            dispatch(setClinicAddress(values.clinicAddress))
            dispatch(setDescription(values.clinicDescription))
            dispatch(setClinicHeaderImage(imageUrl))
            dispatch(setAnimalTypes(selectedAnimals))

            Toast.show({
                type:ALERT_TYPE.SUCCESS,
                title:"Başarılı",
                textBody:"Kliniğin Başarıyla Oluşturuldu",
                autoClose:500
            })
            navigation.navigate("ClinicAppStack")

        } catch (error) {
            console.log(error)
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: "HATA",
                textBody: "Bir Şeyler Ters Gitti",
                autoClose: 800
            });
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Formik
                initialValues={initialFormValues}
                validationSchema={validationSchema}
                onSubmit={handleCreateClinic}
            >
                {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                    <View style={{ flex: 1 }}>
                        {loading && <Loading />}
                        <PagerView style={styles.pageContainer} initialPage={0} ref={pagerRef} onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}>
                            <View key="1">
                                <View style={styles.pageContainer}>
                                    <View style={styles.logo_container}>
                                        <Image source={require('../../../assets/main_Logo.png')} style={styles.logo} resizeMode='contain' />
                                    </View>
                                    <View style={styles.title_container}>
                                        <Text style={styles.title}>Kliniğini oluşturmak için bir kaç bilgiye ihtiyacımız var...</Text>
                                    </View>
                                    <View style={styles.input_container}>
                                        <Text style={styles.input_text}>Klinik Adı</Text>
                                        <Input 
                                            value={values.clinicName} 
                                            placeholder="Klinik Adı..." 
                                            onType={handleChange('clinicName')} 
                                            onBlur={handleBlur('clinicName')} 
                                        />
                                        {touched.clinicName && errors.clinicName && <Text style={styles.error}>{errors.clinicName}</Text>}

                                        <Text style={styles.input_text}>Klinik Adresi</Text>
                                        <Input 
                                            value={values.clinicAddress} 
                                            placeholder="Klinik Adresi..." 
                                            onType={handleChange('clinicAddress')} 
                                            onBlur={handleBlur('clinicAddress')} 
                                        />
                                        {touched.clinicAddress && errors.clinicAddress && <Text style={styles.error}>{errors.clinicAddress}</Text>}

                                        <Text style={styles.input_text}>Klinik Açıklaması</Text>
                                        <Input 
                                            value={values.clinicDescription} 
                                            placeholder="Klinik Açıklaması..." 
                                            onType={handleChange('clinicDescription')} 
                                            onBlur={handleBlur('clinicDescription')} 
                                            multiline={true}
                                        />
                                        {touched.clinicDescription && errors.clinicDescription && <Text style={styles.error}>{errors.clinicDescription}</Text>}
                                    </View>
                                    <View style={styles.buton_container}>
                                        <FloatingButton icon_name="arrow-right" icon_color={color.blue} onPress={goToNextPage} />
                                    </View>
                                </View>
                            </View>

                            <View key="2">
                                <View style={styles.pageContainer}>
                                    <View style={styles.logo_container}>
                                        <Image source={require('../../../assets/main_Logo.png')} style={styles.logo} resizeMode='contain' />
                                    </View>
                                    <View style={styles.title_container}>
                                        <Text style={styles.title}>Kliniğini oluşturmak için bir kaç bilgiye ihtiyacımız var...</Text>
                                    </View>
                                    <View style={styles.input_container}>
                                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ marginBottom: 30, fontSize: 18, fontStyle: "italic" }}>Galerinden klinik sayfanın başlık görselini ekle</Text>
                                            {!clinicImage ? (
                                                <TouchableOpacity style={styles.add_image_btn} onPress={() => { setModalVisible(true) }}>
                                                    <Icon name="plus" size={40} color="white" />
                                                </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                                                    <Image source={{ uri: clinicImage.uri }} style={{ width: 200, height: 200 }} resizeMode="contain" />
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

                            {/* PAGE 5 */}
                            <View key="3">
                                <View style={styles.pageContainer}>
                                    <View style={styles.logo_container}>
                                        <Image source={require('../../../assets/main_Logo.png')} style={styles.logo} resizeMode='contain' />
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
                                                <FlatList data={animalList} renderItem={renderAnimals} horizontal />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.buton_container}>
                                        <Button theme='secondary' text="Kayıt Ol" onPress={handleSubmit} />
                                    </View>
                                </View>
                            </View>

                        </PagerView>
                        <View style={styles.indicator_container}>
                            <DotIndicator currentPage={currentPage} totalPages={totalPages} />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default CreateClinicPage;
