import { Platform } from "react-native";
import Config from "react-native-config";

export const createPet = async (ownerId, petData) => {
    try {
        const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND;
        const response = await fetch(`${URL}pets/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ownerId,
                ...petData
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.log("createPet API Error: ", error);
        throw error;
    }
}

export const getPets = async (ownerId) => {
    try {
        const URL = Platform.OS ==="ios" ? Config.BACKEND_URL_IOS: Config.BACKEND_URL_AND;
        const response = await fetch(`${URL}pets/owner/${ownerId}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.log("getPets API Error: ", error)
         return [];
    }
}

export const uploadPetImage = async (imageUri) => {
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

        const response = await fetch(`${URL}pets/upload-image`, {
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

export const deletePet = async (petId) => {
  try {
    const URL = Platform.OS === "ios" ? Config.BACKEND_URL_IOS : Config.BACKEND_URL_AND;
    const response = await fetch(`${URL}pets/${petId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("deletePet API Error:", error);
    throw error;
  }
};
