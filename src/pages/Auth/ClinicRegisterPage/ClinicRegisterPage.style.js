import { StyleSheet, Dimensions } from "react-native";
import color from "../../../styles/color";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: color.backgroundGray,
    },
    logo_container: {
        height: deviceSize.height / 4,
        justifyContent: "flex-end",
        alignItems: "center",

        //backgroundColor: "red"
    },
    logo: {
        width: "70%",
        height: "70%"
    },
    title_container: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",

        //backgroundColor: "yellow",
    },
    title: {
        fontSize: 26,
        color: "#000000",
        fontStyle: "italic",
        fontWeight: "bold"
    },
    input_container: {
        flex: 1.5,
        justifyContent: "center",

        //backgroundColor: "blue"
    },
    input_text: {
        marginLeft: "3%",
        fontWeight: "600",
        color: color.brown
    },
    buton_container: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",

        //backgroundColor: "red",
    },
    error: {
        textAlign: "center",
        color: "#000000",
        fontWeight: "bold"
    },
    indicator_container: {
        height: deviceSize.height / 10,
        justifyContent: "center",
        backgroundColor: color.backgroundGray,
    },
    add_image_btn: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.green,
        borderRadius: 10,
        marginBottom: 20
    },
    render_animal_container: {
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 45,
        marginHorizontal: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
})