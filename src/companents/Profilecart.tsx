import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import GalatasarayIcon from "../images/gala.png"
import { useSelector } from 'react-redux'
import { Teams } from '../Teams/Teams'
import { Rating, AirbnbRating } from 'react-native-ratings';
import Icon from "../images/LogoBall.png"

function Profilecart() {
    const data = useSelector((state: any) => state.rateReducer.teamname)
    const bedir = Teams.find((item) => (item.label == data))
    const ratingCompleted = (rating: any) => {
        console.log("Rating is: " + rating)
    }
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
            <TouchableOpacity style={style.profilecardlow} onPress={isClick}>
                <Image style={style.teamLogo} source={bedir?.logo} resizeMode='contain'></Image>
                <View style={style.scoreView}><Text style={style.scoreText}>{data}</Text></View>
            </TouchableOpacity>
            <View style={style.profilecardlong}>
                <Rating
                    type='custom'
                    ratingImage={Icon}
                    ratingColor='darkgreen'
                    ratingBackgroundColor='#17b978'
                    ratingCount={5}
                    imageSize={50}
                    style={{ paddingVertical: 10,marginBottom:350, width:300}}
                    onFinishRating={ratingCompleted}

                />

            </View>
        </View>
    )
}

const style = StyleSheet.create({

    profilecardlow: {
        height: 100,
        width: "90%",
        backgroundColor: "#17b978",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderStartEndRadius: 20,
        borderStartStartRadius: 20
    },

    profilecartlowopen: {
        height: 100,
        width: "90%",
        backgroundColor: "#17b978",
        justifyContent: "center",
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
        fontSize: 15,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    }

})
export default Profilecart