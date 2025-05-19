import React from "react";
import { TouchableOpacity, Text} from "react-native";
import styles from './FloatingButton.style';
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../styles/color";

const FloatingButton = ({onPress, icon_name, icon_color}) => {
    return(
       <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name={icon_name} size={55} color={icon_color}/>
       </TouchableOpacity>
    )
}
export default FloatingButton