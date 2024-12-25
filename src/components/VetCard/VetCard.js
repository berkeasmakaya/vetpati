import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from './VetCard.style';

const VetCard = () => {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.image_container}>
                <Image 
                    source={require('../../assets/vet-resim-yeni.jpeg')}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
            <View style={styles.info_container}>
                <Text style={styles.clinic_name}>İkonyum Veteriner Kliniği</Text>
                <Text style={styles.clinic_address}>Melikşah Mahallesi - Konya/Meram</Text>
            </View>
            <View style={styles.animal_container}>
                <Text>Bakılacak hayvanlar logosu</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VetCard;