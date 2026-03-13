import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GalatasarayIcon from "../images/gala.png"

function Profilecart() {
    const [cliced, setCliced] = useState(false)

    const isClick = () => {
        if (!cliced) {
            setCliced(true)
        } else {
            setCliced(false)
        }
    }
    return (
        <View style={{ alignItems: "center", }}>
            <TouchableOpacity style={cliced ? style.profilecartlowopen : style.profilecardlow} onPress={isClick}>
                <Image style={style.teamLogo} source={GalatasarayIcon } resizeMode='contain'></Image>
                <View style={style.scoreView}><Text style={style.scoreText}>Galatasaray A.Ş</Text></View>
            </TouchableOpacity>
            <View style={cliced ? style.profilecardlong : ""}></View>
        </View>
    )
}

const style = StyleSheet.create({

   profilecardlow: {
        height: 100,
        borderRadius: 20,
        width: "90%",
        backgroundColor: "#17b978",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"flex-start"
    },

    profilecartlowopen: {
        height: 100,
        width: "90%",
        backgroundColor: "#17b978",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20

    },

    profilecardlong: {
        height: 400,
        width: "90%",
        backgroundColor: "#17b978",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        borderEndStartRadius: 20,
        borderEndEndRadius: 20
    },

    teamLogo: {
        width: 70,
        height: 70,
        borderRadius: 10
    },

    scoreView: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },

    scoreText: {
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }

})
export default Profilecart