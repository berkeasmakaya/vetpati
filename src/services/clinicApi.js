import { Platform } from "react-native";
import Config from "react-native-config";

export const createClinic = async (vetId, clinicData) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND
        const response = await fetch(`${URL}clinics/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                vetId,
                ...clinicData
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

export const uploadClinicHeaderImage = async (imageUri) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND;
        const formData = new FormData();

        const filename = imageUri.split("/").pop();
        const fileType = filename.split(".").pop();

        formData.append("image", {
            uri: imageUri,
            type: `image/${fileType}`,
            name: filename,
        });

        const response = await fetch(`${URL}clinics/upload-image`, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData.imageUrl; // sunucu yüklenen resmin URL'sini dönerse
    } catch (error) {
        console.log("uploadPetImage API Error: ", error);
        throw error;
    }
};

export const getClinicByVet = async (vetId) =>{
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND;
        const response = await fetch(`${URL}clinics/vet/${vetId}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return await response.json();
    } catch (error) {
        console.log("getClinicByVet API Error: ", error);
        throw error;
    }
}

