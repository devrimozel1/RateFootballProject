import React from 'react'
import HeaderComp from './HeaderComp'
import { ScrollView, View } from 'react-native'
import MatchCard from '../companents/MatchCard'




function LiveHome() {
    const ScreenName = "Live"


    return (
        <View>
            <HeaderComp
                name={ScreenName}
            />
            <ScrollView>
                <View style={{ gap: 10 }}>
                </View>
            </ScrollView>
        </View>


    )
}

export default LiveHome