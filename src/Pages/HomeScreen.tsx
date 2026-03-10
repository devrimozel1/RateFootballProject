import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from './HeaderComp'

function HomeScreen() {

    const ScreenName = "RateFootball";

    return (
        <View>
            <HeaderComp
                name={ScreenName}
            />
        </View>


    )
}



export default HomeScreen