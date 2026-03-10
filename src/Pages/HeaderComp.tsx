import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
function HeaderComp({ name }: { name: string }) {
    return (
        <SafeAreaView style={{alignItems:"center"}} >
            <View style={style.menuTopHead}>
                <View style={{ width: 70, alignItems: "center" }}>
                    <Image style={style.menuTopImage}></Image>
                </View>
                <View style={{ width: 150, alignItems: "center" }}>
                    <Text style={style.menuTopName}>{name} </Text>
                </View>
                <View style={{ width: 70, alignItems: "center" }}>
                    <TouchableOpacity>
                        <Image style={style.menuTopImage}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    menuTopHead: {
        borderWidth: 1,
        borderBlockColor: "black",
        flexDirection: "row",
        height: 70,
        borderRadius: 10,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-around",
        width:"90%"

    },
    menuTopImage: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderBlockColor: "red",
        borderRadius: 10
    },
    menuTopName: {
        fontWeight: "bold",
        fontSize: 25

    },
})

export default HeaderComp