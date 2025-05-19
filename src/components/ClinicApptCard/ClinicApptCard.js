import React from 'react'
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './ClinicApptCard.style'
import color from '../../styles/color'

const ClinicApptCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.info_container}>
                <View style={styles.datetime_container}>
                    <Text style={styles.date}>14 Nisan Salı </Text>
                    <Text style={styles.time}>15:00</Text>
                </View>
                <Text style={styles.clinic_name}>İkonyum Veteriner Kliniği</Text>
                <View style={styles.state_container}>
                    <Text style={styles.state_text}>Durum: </Text>
                    <Text style={styles.state}>Onayınız Bekleniyor</Text>
                </View>
                <View style={styles.todo_list}>
                    <Text style={styles.todo}>Kuduz aşısı yapılacak</Text>
                    <Text style={styles.todo}>Tırnak kesimi.</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.buton_text}>İPTAL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buton, {backgroundColor:color.orange}]}>
                        <Text style={styles.buton_text}>ONAYLA</Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.animal_container}>
                <Image 
                    source={require('../../assets/icon_cat.png')}
                    style={styles.image}
                />
                <Text style={{color:color.orange, fontSize:20, fontWeight:"600"}}>Mırnav</Text>
            </View>
        </View>
    )
}

export default ClinicApptCard;