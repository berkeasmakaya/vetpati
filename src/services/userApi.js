import { Platform } from "react-native";
import Config from "react-native-config";

export const createUser = async (uid, userData) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND
        const response = await fetch(`${URL}users/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                uid,
                ...userData
            })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        
    } catch (error) {
        console.log("createUser API Error: ", error)
        throw error
    }
}

export const getUserData = async (uid) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND
        const response = await fetch(`${URL}users/${uid}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status:${response.status}`)
        }
        return await response.json();
    } catch (error) {
        console.log("getUserData API Error: ", error)
    }
}

export const updateUserData = async (uid, updatedData) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND;
        const response = await fetch(`${URL}users/update`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                uid,
                ...updatedData
            })
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status:${response.status}`)
        }
        return await response.json();
    } catch (error) {
         console.log("updateUserData API Error: ", error)
    }
}