import React, { useState } from "react"
import { SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import Modal from 'react-native-modal'
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import styles from './EditUserModal.style'



const EditUserModal = ({isVisible, onClose}) => {
    
    return(
        <Modal isVisible={isVisible} style={styles.modal}>
          <SafeAreaView style={styles.container}>

              <View style={styles.header}>
                
                <TouchableOpacity style={styles.buttons} onPress={onClose}>
                    <Text style={styles.button_text}>İptal</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttons} onPress={onClose}>
                  <Text style={styles.button_text}>Kaydet</Text>
                </TouchableOpacity>
                
              </View>

              <View style={styles.input_main_container}>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>İsim</Text>
                  <Input placeholder="İsiminizi Giriniz..." />
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>Soyisim</Text>
                  <Input placeholder="Soyisminizi Giriniz..." />
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>Telefon Numarası</Text>
                  <Input placeholder="Telefon Numaranızı Giriniz..." />
                </View>
                <View style={styles.input_container}>
                  <Text style={styles.input_text}>Adres (İlçe/İl şeklinde)</Text>
                  <Input placeholder="Adresinizi Giriniz..." />
                </View>  
              </View>

              <View style={styles.buton_container}>
                <Button text="Kaydet" theme='fourth' />
              </View>

          </SafeAreaView>
        </Modal>
    )
}

export default EditUserModal;

