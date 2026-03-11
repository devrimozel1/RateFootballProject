import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


function Register() {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#f5f6fa"}} >
            <View style={style.container}>
                <TextInput style={style.input} placeholder='İsim'></TextInput>
                <TextInput style={style.input} placeholder='Soyisim'></TextInput>
                <View style={style.telefon}>
                    <TextInput style={style.telInput} placeholder='🇹🇷+90'></TextInput>
                    <TextInput style={style.telInput2} placeholder='Telefon Numarası'></TextInput>
                </View>
                <TextInput style={style.input} placeholder='E-mail'></TextInput>
                <TextInput style={style.input} placeholder='Şifre'></TextInput>

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Kayıt Ol</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }} style={style.buttonalttext}><Text>Zaten üye misiniz? <Text style={style.title2}>Giriş yapın.</Text></Text></TouchableOpacity>
            </View>
        </SafeAreaView>


    )
}

const style = StyleSheet.create({
    container: {
       flex:1,
        padding:25,
        justifyContent:"center"
    },
    input: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#131214ff"
    },
    telefon: {
        flexDirection: "row",
        marginBottom: 15
    },
    telInput: {
        width: 90,
        marginRight: 25,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#7244ceff",
        padding: 12,

    },
    telInput2: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#7244ceff",
        padding: 12,

    },
    button: {
        backgroundColor: "#091e43ff",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center"
    },
    buttonalttext: {
        marginLeft: 50,
        padding: 10
    },
    title2: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 15

    },
})

export default Register
