import React from "react";
import { TouchableOpacity, Dimensions} from "react-native";
import styles from './FloatingButton.style';
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";

const icon_size = Dimensions.get("window").height/20
const FloatingButton = ({onPress, icon_name, icon_color}) => {
    return(
       <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name={icon_name} size={icon_size} color={icon_color}/>
       </TouchableOpacity>
    )
}
export default FloatingButton