import React from 'react'
import HeaderComp from './HeaderComp'
import { Button, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Profile() {
  const ScreenName = "Profile"
  const navigation=useNavigation()

const handleProfile=()=>{
  navigation.navigate('Register')
}


  return (
    <View>
      <HeaderComp
        name={ScreenName}
      />
      <ScrollView >
        <View style={styles.container}>
          <TextInput placeholder='Email'
            style={styles.input}></TextInput>

          <TextInput placeholder='Şifre'
            style={styles.input}
          ></TextInput>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Giriş Yap</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleProfile}><Text style={{margin:10}} >Hesabınız yok mu?<Text style={styles.text} >Kayıt olun.</Text></Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "black",
    width: '70%'
  },
  button: {
    backgroundColor: "#dcdfe3ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "50%"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",

  },
  text: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 15

  }
})

export default Profile
