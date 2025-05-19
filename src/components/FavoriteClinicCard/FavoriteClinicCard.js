import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import styles from './FavoriteClinicCard.style';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";


const FavoriteClinicCard = ({onPress}) => {
    const [animalList, setAnimalList] = useState(["dog", "cat", "bird", "rabbit"]);

    const animalLogos = {
        dog: require('../../assets/icon_dog.png'),
        cat: require('../../assets/icon_cat.png'),
        bird: require('../../assets/icon_bird.png'),
        rabbit: require('../../assets/icon_rabbit.png')
    }
    

    const renderAnimals = ({item}) => {
        return(
            <Image 
                source={animalLogos[item]}
                style={styles.logo}
            />
            
        )
    }

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.image_container}>
                <Image 
                    source={require('../../assets/vet-resim-yeni.jpeg')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
            <View style={styles.info_container}>
                <View>
                    <Text style={styles.clinic_name}>İkonyum Veteriner Kliniği</Text>
                    <Text style={styles.clinic_address}>Melikşah Mahallesi - Konya/Meram</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="star" color={"gold"} size={40} />
                </TouchableOpacity>
            </View>
            <View style={styles.animal_container}>
                <FlatList
                    data={animalList}
                    renderItem={renderAnimals}
                    horizontal
                    removeClippedSubviews={false}
                />
            </View>
        </TouchableOpacity>
    )
}

export default FavoriteClinicCard;