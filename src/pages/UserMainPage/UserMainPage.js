import React from "react";
import { SafeAreaView,ScrollView } from "react-native";
import VetCard from "../../components/VetCard/VetCard";
import styles from './UserMainPage.style'

function UserMainPage({navigation}) {
    
    const goToClinicDetailPage = () => {
        navigation.navigate("UserClinicDetailPage")
    }
    
    return(
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <VetCard  onPress={goToClinicDetailPage}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserMainPage;