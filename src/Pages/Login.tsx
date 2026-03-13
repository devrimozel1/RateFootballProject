import React, { useState } from 'react'
import HeaderComp from './HeaderComp'
import { Alert, Button, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import Register from './Register'

type RootStackParamList = {
  Login: undefined
  Register: undefined
}

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const ScreenName = "Login"
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const user = {
    email: "test@test.com",
    password: "1234"
  }

  const handleLogin = () => {

    if (email === user.email && password === user.password) {
      Alert.alert("Giriş başarılı. 🎉")
      navigation.navigate('Register')
    } else {
      Alert.alert("Email veya şifre hatalı ❌")
    }
  }

  const handleRegister=()=>{
    navigation.navigate('Register')
  }


  return (
    <View style={{height:1000}}>
      <HeaderComp
        name={ScreenName}
      />
      <ScrollView>
        <View style={styles.container}>
          <TextInput placeholder='Email'
            style={styles.input}
            onChangeText={(text) => setEmail(text)}></TextInput>

          <TextInput placeholder='Şifre'
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.buttonText}>Giriş Yap</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleRegister}><Text style={{ margin: 10 }} >Hesabınız yok mu?<Text style={styles.text} >Kayıt olun.</Text></Text></TouchableOpacity>
        </View>
      </ScrollView>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height:1000,
    gap:10
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