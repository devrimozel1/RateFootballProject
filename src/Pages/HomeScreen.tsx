import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from './HeaderComp'
import MatchCard from '../companents/MatchCard';

function HomeScreen() {

    const ScreenName = "RateFootball";

    return (
        <View style={{ minHeight: 850 }}>
            <HeaderComp
                name={ScreenName}
            />
            <ScrollView>
                <View style={{ gap: 10, }}>
                    <MatchCard></MatchCard>
                    <MatchCard></MatchCard>
                    <MatchCard></MatchCard>
                    <MatchCard></MatchCard>
                    <MatchCard></MatchCard>

                </View>
            </ScrollView>
        </View>




    )
}



export default HomeScreen