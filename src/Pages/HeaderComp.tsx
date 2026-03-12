import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoIcon from "../images/LogoBall.png"
import ExitIcon from "../images/exit.png"

function HeaderComp({ name }: { name: string }) {
    return (
        <SafeAreaView style={{ alignItems: "center" }} >
            <View style={style.menuTopHead}>
                <View style={{ width: 70, alignItems: "center" }}>
                    <Image style={style.menuTopImage} source={LogoIcon}></Image>
                </View>
                <View style={{ width: 150, alignItems: "center" }}>
                    <Text style={style.menuTopName}>{name} </Text>
                </View>
                <View style={{ width: 70, alignItems: "center" }}>
                    <TouchableOpacity>
                        <Image style={style.menuTopImage} source={ExitIcon}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    menuTopHead: {
        flexDirection: "row",
        height: 70,
        borderRadius: 20,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-around",
        width: "90%",
        backgroundColor: "#007fbd"

    },
    menuTopImage: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    menuTopName: {
        fontWeight: "bold",
        fontSize: 25

    },
})

export default HeaderComp