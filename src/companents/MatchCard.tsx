import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function MatchCard() {

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
            <TouchableOpacity style={style.matchcardlow} onPress={isClick}>
                <Image style={style.teamLogo}></Image>
                <View style={style.scoreView}><Text style={style.scoreText}>3 - 1</Text></View>
                <Image style={style.teamLogo}></Image>
            </TouchableOpacity>
            <View style={cliced ? style.matchcardlong : ""}></View>
        </View>
    )
}


const style = StyleSheet.create({

    matchcardlow: {
        height: 100,
        borderRadius: 20,
        width: "90%",
        backgroundColor: "#FF6044",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },

    matchcardlong: {
        height: 400,
        width: "90%",
        backgroundColor: "#FF6044",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        borderRadius:20
       

    },

    teamLogo: {
        width: 70,
        height: 70,
        borderWidth: 1,
        borderBlockColor: "black",
        borderRadius: 10
    },

    scoreView: {
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
    },

    scoreText: {
        fontSize: 40,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }

})
export default MatchCard