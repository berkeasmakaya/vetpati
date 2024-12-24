import React from "react";
import { View, Image, Text } from "react-native";
import styles from './VetCard.style';

const VetCard = () => {
    return(
        <View style={styles.container}>
            <View>
                <Image />
            </View>
            <View>
                <Text>Veteriner Kliniği</Text>
                <Text>Veteriner Kliniği Adresi</Text>
            </View>
            <View>
                <Text>Bakılacak hayvanlar logosu</Text>
            </View>
        </View>
    )
}

export default VetCard;