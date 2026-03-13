import React from 'react'
import HeaderComp from './HeaderComp'
import { Alert, Button, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import Register from './Register'

type RootStackParamList = {
  Profile: undefined
  Register: undefined
}

function Login() {
  const ScreenName = "Login"
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handleLogin = () => {
    navigation.navigate('Register')
  }

  const handleProfile = () => {
    navigation.navigate('Profile')
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
          <TouchableOpacity style={styles.button} onPress={handleProfile}><Text style={styles.buttonText}>Giriş Yap</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleLogin}><Text style={{ margin: 10 }} >Hesabınız yok mu?<Text style={styles.text} >Kayıt olun.</Text></Text></TouchableOpacity>
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
    backgroundColor: "#091e43ff",
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

export default Login
