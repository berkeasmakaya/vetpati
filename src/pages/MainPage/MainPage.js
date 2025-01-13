import React from "react";
import { View, Text, ScrollView } from "react-native";
import VetCard from "../../components/VetCard";
import { SafeAreaView } from "react-native-safe-area-context";

function MainPage() {
    return(
        <SafeAreaView>
            <ScrollView>
                <VetCard />
                <VetCard />
                <VetCard />
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default MainPage;