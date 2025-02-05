import React from "react";
import { SafeAreaView,ScrollView } from "react-native";
import VetCard from "../../components/VetCard";
import { styles } from "./MainPage.style";

function MainPage() {
    return(
        <SafeAreaView style={styles.container} edges={['top']}>
            <ScrollView>
                <VetCard />
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainPage;