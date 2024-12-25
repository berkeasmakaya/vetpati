import React from "react";
import { View, Text } from "react-native";
import VetCard from "../../components/VetCard";
import { SafeAreaView } from "react-native-safe-area-context";

function MainPage() {
    return(
        <SafeAreaView>
            <VetCard />
        </SafeAreaView>
    )
}

export default MainPage;