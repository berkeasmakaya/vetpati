import React from "react";
import { SafeAreaView,ScrollView } from "react-native";
import VetList from "../../components/VetCard";
import { styles } from "./MainPage.style";

function MainPage() {
   
    const vets = [
        {
            name: "İkonyum Veteriner Kliniği",
            address: "Melikşah Mahallesi - Konya/Meram",
            animalList: ["dog", "cat", "bird"],
            image:require('../../assets/vet-resim-yeni.jpeg')
        },
        {
            name: "Can Dostlar Veteriner Kliniği",
            address: "Karatay - Konya",
            animalList: ["dog", "rabbit"],
            image:require('../../assets/icon_rabbit.png')
        }
    ];
    
    return(
        <SafeAreaView style={styles.container} edges={['top']}>
            <VetList vets={vets} />
        </SafeAreaView>
    )
}

export default MainPage;