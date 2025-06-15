import { Platform } from "react-native";
import Config from "react-native-config";

export const createVet = async (uid, vetData) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND
        console.log(URL)
        const response = await fetch(`${URL}vets/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uid,
                ...vetData
            })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
    } catch (error) {
        console.log("createVet API Error: ", error)
        throw error
    }
}

export const getVetData = async (uid) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND
        const response = await fetch(`${URL}vets/${uid}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status:${response.status}`)
        }
        return await response.json();
    } catch (error) {
        console.log("getVetData API Error: ", error)
    }
}