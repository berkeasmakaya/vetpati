import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import Button from "../../components/Button/Button";

function UserGetApptPage(){
    return(
        <View>
            <View>
                <Image />
               
            </View>
            <View>
                <Text>İkonyum Veteriner Kliniği</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Tarih Seç</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Saat Seç</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>İleti</Text>
                <View>
                    <TextInput/>
                </View>
                <TouchableOpacity>
                    <Text>Pati Ekle</Text>
                </TouchableOpacity>
            </View>

            <Button text="Randevu İsteği Gönder" />
        </View>
    )
}

export default UserGetApptPage;