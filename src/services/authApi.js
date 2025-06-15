import { Platform } from "react-native";
import Config from "react-native-config";

export const getUserType = async (uid)=> {
    try {
            const URL = Platform.OS ==="ios" ? Config.BACKEND_URL_IOS: Config.BACKEND_URL_AND;
            const response = await fetch(`${URL}auth/user-type/${uid}`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log("getUserType API Error: ", error)
             return [];
        }
}