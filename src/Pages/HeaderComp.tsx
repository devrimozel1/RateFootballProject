import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogoIcon from "../images/LogoBall.png"
import ExitIcon from "../images/exit.png"
import LinearGradient from 'react-native-linear-gradient'

function HeaderComp({ name }: { name: string }) {
    return (
        <SafeAreaView style={{ alignItems: "center" }} >
            <LinearGradient
                colors={["rgb(170, 75, 107)", "rgb(107, 107, 131)", "rgb(59, 141, 153)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={style.gradientContainer}
            >
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
            </LinearGradient>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    gradientContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,      
        overflow: "hidden",    
    },
    menuTopHead: {
        flexDirection: "row",
        height: 70,
        borderRadius: 20,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-around",
        width: "90%",
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