import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../components/Button';
import styles from './FirstPage.style';

function FirstPage(){
  return (
    <View style={styles.container}>
      
      <View style={styles.logo_container}>

      </View>
      
      <View style={styles.button_container}>
        <Button text="Merhaba" theme='secondary'/>
        <Button text="Merhaba" theme='secondary'/>
        <Button text="Merhaba" theme='secondary'/>
      </View>

      <Text style={styles.copy_right}>Copyright KFAU © 2024 Tüm Hakları Saklıdır.</Text>

    </View>
  )
}

export default FirstPage;