import React from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import styles from './VetCard.style';

const VetCard = ({ vetData }) => {
    const animalLogos = {
        dog: require('../../assets/icon_dog.png'),
        cat: require('../../assets/icon_cat.png'),
        bird: require('../../assets/icon_bird.png'),
        rabbit: require('../../assets/icon_rabbit.png')
    };

    const renderAnimals = ({ item }) => (
        <Image source={animalLogos[item]} style={styles.logo} />
    );

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.image_container}>
                <Image 
                    source={vetData.image}
                    resizeMode="cover"
                    style={styles.image}
                />
            </View>
            <View style={styles.info_container}>
                <Text style={styles.clinic_name}>{vetData.name}</Text>
                <Text style={styles.clinic_address}>{vetData.address}</Text>
            </View>
            <View style={styles.animal_container}>
                <FlatList
                    data={vetData.animalList}
                    renderItem={renderAnimals}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </TouchableOpacity>
    );
};

const VetList = ({ vets }) => {
    return (
        <FlatList
            data={vets}
            renderItem={({ item }) => <VetCard vetData={item} />}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default VetList;
