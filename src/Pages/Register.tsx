import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from './HeaderComp'
import DropDownPicker from 'react-native-dropdown-picker'


function Register() {

    const navigation = useNavigation()
    const ScreenName = "Register"

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    const [items, setItems] = useState([
        { label: 'Trendyol Süper Lig', value: 'TSL'},
        { label: 'Trendyol 1.Lig', value: 'TL' },

    ]);

    const allTeams = [
        { label: 'GALATASARAY A.Ş', lig: 'TSL', value: 'gs' },
        { label: 'FENERBAHÇE A.Ş', lig: 'TSL', value: 'fb' },
        { label: 'TRABZONSPOR A.Ş', lig: 'TSL', value: 'ts' },
        { label: 'BEŞİKTAŞ', lig: 'TSL', value: 'bjk' },
        { label: 'RAMS BAŞAKŞEHİR FUTBOL KULÜBÜ', lig: 'TSL', value: 'bşk' },
        { label: 'GÖZTEPE A.Ş', lig: 'TSL', value: 'gzt' },
        { label: 'KOCAELİSPOR', lig: 'TSL', value: 'koc' },
        { label: 'SAMSUNSPOR A.Ş', lig: 'TSL', value: 'sam' },
        { label: 'ÇAYKUR RİZESPOR A.Ş', lig: 'TSL', value: 'çrz' },
        { label: 'GAZİANTEP FUTBOL KULÜBÜ A.Ş', lig: 'TSL', value: 'gaf' },
        { label: 'CORENDON ALANYASPOR', lig: 'TSL', value: 'cal' },
        { label: 'NATURA DÜNYASI GENÇLERBİRLİĞİ', lig: 'TSL', value: 'ngb' },
        { label: 'TÜMOSAN KONYASPOR', lig: 'TSL', value: 'tks' },
        { label: 'HESAP.COM ANTALYASPOR', lig: 'TSL', value: 'hant' },
        { label: 'İKAS EYÜPSPOR', lig: 'TSL', value: 'ies' },
        { label: 'KASIMPAŞA A.Ş', lig: 'TSL', value: 'kp' },
        { label: 'ZECORNER KAYSERİSPOR', lig: 'TSL', value: 'zks' },
        { label: 'MISIRLI.COM.TR FATİH KARAGÜMRÜK', lig: 'TSL', value: 'mfk' },
        { label: 'ERZURUMSPOR FK', lig: 'TL', value: 'es' },
        { label: 'ESENLER EROKSPOR', lig: 'TL', value: 'ees' },
        { label: 'AMED SPORTİF FAALİYETLER', lig: 'TL', value: 'asf' },
        { label: 'ARCA ÇORUM FK', lig: 'TL', value: 'açf' },
        { label: 'ATKO GRUP PENDİKSPOR FUTBOL A.Ş', lig: 'TL', value: 'aps' },
        { label: 'SİPAY BODRUM FK', lig: 'TL', value: 'sb' },
        { label: 'BANDIRMA SPOR', lig: 'TL', value: 'bs' },
        { label: 'EMRE GÖKDEMİR İNŞAAT ANKARA KEÇİÖRENGÜCÜ', lig: 'TL', value: 'akö' },
        { label: 'ALAGÖZ HOLDİNG IĞDIR FK', lig: 'TL', value: 'aıf' },
        { label: 'MANİSA FUTBOL KULÜBÜ', lig: 'TL', value: 'mfk' },
        { label: 'BOLUSPOR', lig: 'TL', value: 'bos' },
        { label: 'ÖZELSAN SİVASSPOR', lig: 'TL', value: 'öss' },
        { label: 'EMİNEVİM ÜMRANİYESPOR', lig: 'TL', value: 'eüs' },
        { label: 'İSTANBULSPOR A.Ş', lig: 'TL', value: 'ist' },
        { label: 'SMS GRUP SARIYERSPOR', lig: 'TL', value: 'sgs' },
        { label: 'SAKARYASPOR A.Ş', lig: 'TL', value: 'sas' },
        { label: 'SERİK SPOR FUTBOL A.Ş', lig: 'TL', value: 'ssf' },
        { label: 'ATAKAŞ HATAYSPOR', lig: 'TL', value: 'atah' },
        { label: 'ADANA DEMİRSPOR A.Ş', lig: 'TL', value: 'ads' },

    ]


    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([{label: "", value:""}]);

   const Superlig = allTeams.filter((lig) => lig.lig === "TSL")
   const BırıncıLıg = allTeams.filter((lig) => lig.lig === "TL")

   const Superlıgtakımlar = Superlig.map((team) => team.label)
   const BırıncıTakımlar = BırıncıLıg.map((team) => team.label)

   console.log(Superlıgtakımlar);
   console.log(BırıncıTakımlar);


   

    // const ligSecildi = (items) => {
    //     if (items.value == "TSL") {

            
    //     }


    // }
    // const filtreliTakimlar = allTeams.filter(team => team.lig === lig)

    // setItems2(filtreliTakimlar)

    // setValue2(null)


    return (
        <View style={style.container}>
            <HeaderComp name={ScreenName} />
            <TextInput style={style.input}></TextInput>
            <TextInput style={style.input} placeholder='İsim'></TextInput>
            <TextInput style={style.input} placeholder='Soyisim'></TextInput>
            <View style={style.telefon}>
                <TextInput style={style.telInput} placeholder='🇹🇷+90'></TextInput>
                <TextInput style={style.telInput2} placeholder='Telefon Numarası'></TextInput>
            </View>
            <TextInput style={style.input} placeholder='E-mail'></TextInput>
            <TextInput style={style.input} placeholder='Şifre'></TextInput>
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
                maxHeight={100}
                placeholder='Takım Seçiniz'
            />

            <TouchableOpacity style={style.button}>
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
