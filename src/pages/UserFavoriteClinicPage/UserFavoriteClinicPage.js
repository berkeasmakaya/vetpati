import React from "react";
import { SafeAreaView, View, Text} from "react-native";
import FavoriteClinicCard from "../../components/FavoriteClinicCard/FavoriteClinicCard";
import styles from './UserFavoriteClinicPage.style'

function UserFavoriteClinicPage(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Favori Klinikler</Text>
            </View>
            <View>
                <FavoriteClinicCard />
            </View>
        </SafeAreaView>
    )
}

export default UserFavoriteClinicPage;