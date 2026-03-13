import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from './HeaderComp'
import DropDownPicker from 'react-native-dropdown-picker'
import { Teams } from '../Teams/Teams'


function Register() {

    const takımlar = Teams


    const navigation = useNavigation()
    const ScreenName = "Register"

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");



    const validate = () => {
  
        if (!name || !surname || !phone || !email || !password) {
            setError("Lütfen tüm alanları doldurunuz.")
            
        } else {
            navigation.navigate('Profile',)
        }

    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const [items, setItems] = useState([
        { label: 'Trendyol Süper Lig', value: 'TSL' },
        { label: 'Trendyol 1.Lig', value: 'TL' }
    ]);

    const SuperTeams = [
        { label: 'GALATASARAY A.Ş', lig: 'TSL', value: 'GS' },
        { label: 'FENERBAHÇE A.Ş', lig: 'TSL', value: 'FB' },
        { label: 'TRABZONSPOR A.Ş', lig: 'TSL', value: 'TS' },
        { label: 'BEŞİKTAŞ', lig: 'TSL', value: 'BJK' },
        { label: 'RAMS BAŞAKŞEHİR FUTBOL KULÜBÜ', lig: 'TSL', value: 'BFK' },
        { label: 'GÖZTEPE A.Ş', lig: 'TSL', value: 'GOZ' },
        { label: 'KOCAELİSPOR', lig: 'TSL', value: 'KOC' },
        { label: 'SAMSUNSPOR A.Ş', lig: 'TSL', value: 'SAM' },
        { label: 'ÇAYKUR RİZESPOR A.Ş', lig: 'TSL', value: 'CRZ' },
        { label: 'GAZİANTEP FUTBOL KULÜBÜ A.Ş', lig: 'TSL', value: 'GFK' },
        { label: 'CORENDON ALANYASPOR', lig: 'TSL', value: 'ALN' },
        { label: 'NATURA DÜNYASI GENÇLERBİRLİĞİ', lig: 'TSL', value: 'GNC' },
        { label: 'TÜMOSAN KONYASPOR', lig: 'TSL', value: 'KON' },
        { label: 'HESAP.COM ANTALYASPOR', lig: 'TSL', value: 'ANT' },
        { label: 'İKAS EYÜPSPOR', lig: 'TSL', value: 'EYS' },
        { label: 'KASIMPAŞA A.Ş', lig: 'TSL', value: 'KAS' },
        { label: 'ZECORNER KAYSERİSPOR', lig: 'TSL', value: 'KAY' },
        { label: 'MISIRLI.COM.TR FATİH KARAGÜMRÜK', lig: 'TSL', value: 'FKG' },
    ]
    const FirstTeams = [
        { label: 'ERZURUMSPOR FK', lig: 'TL', value: 'ERZ' },
        { label: 'ESENLER EROKSPOR', lig: 'TL', value: "EES" },
        { label: 'AMED SPORTİF FAALİYETLER', lig: 'TL', value: 'AMD' },
        { label: 'ARCA ÇORUM FK', lig: 'TL', value: 'ACF' },
        { label: 'ATKO GRUP PENDİKSPOR FUTBOL A.Ş', lig: 'TL', value: 'PEN' },
        { label: 'SİPAY BODRUM FK', lig: 'TL', value: 'BOD' },
        { label: 'BANDIRMA SPOR', lig: 'TL', value: 'BAN' },
        { label: 'EMRE GÖKDEMİR İNŞAAT ANKARA KEÇİÖRENGÜCÜ', lig: 'TL', value: 'AKE' },
        { label: 'ALAGÖZ HOLDİNG IĞDIR FK', lig: 'TL', value: 'IGF' },
        { label: 'MANİSA FUTBOL KULÜBÜ', lig: 'TL', value: 'MAN' },
        { label: 'BOLUSPOR', lig: 'TL', value: 'BLS' },
        { label: 'ÖZELSAN SİVASSPOR', lig: 'TL', value: 'SVS' },
        { label: 'EMİNEVİM ÜMRANİYESPOR', lig: 'TL', value: 'UMR' },
        { label: 'İSTANBULSPOR A.Ş', lig: 'TL', value: 'IST' },
        { label: 'SMS GRUP SARIYERSPOR', lig: 'TL', value: 'SAR' },
        { label: 'SAKARYASPOR A.Ş', lig: 'TL', value: 'SAK' },
        { label: 'SERİK SPOR FUTBOL A.Ş', lig: 'TL', value: 'SER' },
        { label: 'ATAKAŞ HATAYSPOR', lig: 'TL', value: 'HAT' },
        { label: 'ADANA DEMİRSPOR A.Ş', lig: 'TL', value: 'ADM' },
    ]

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([{ label: '', value: '' }]);

    useEffect(() => {
        if (value === 'TSL') {
            setItems2(SuperTeams)
        } else if (value === 'TL') {
            setItems2(FirstTeams)
        }
    }, [value])



    return (
        <View style={style.container}>
            <TextInput style={style.input} placeholder='İsim'></TextInput>
            <TextInput style={style.input} placeholder='Soyisim'></TextInput>
            <View style={style.telefon}>
                <TextInput style={style.telInput} placeholder='🇹🇷+90'></TextInput>
                <TextInput style={style.telInput2} placeholder='Telefon Numarası' onChangeText={(text) => setPhone(text)}></TextInput>
            </View>
            <TextInput style={style.input} placeholder='E-mail' onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput style={style.input} placeholder='Şifre' onChangeText={(text) => setPassword(text)}></TextInput>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                zIndex={3000}
                zIndexInverse={1000}
                placeholder='Lig Seçiniz'
                style={{ marginBottom: 15 }}
            />
            <DropDownPicker
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
                zIndex={2000}
                zIndexInverse={2000}
                maxHeight={150}
                placeholder='Takım Seçiniz'
                style={{ marginBottom: 15 }}
            />

            <Text style={{ color: "red", marginBottom: 10 }}>
                {error}
            </Text>


            <TouchableOpacity onPress={validate} style={style.button}>
                <Text style={style.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }} style={style.buttonalttext}><Text>Zaten üye misiniz? <Text style={style.title2}>Giriş yapın.</Text></Text></TouchableOpacity>

        </View>


    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: "center",
        marginTop: -100
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
