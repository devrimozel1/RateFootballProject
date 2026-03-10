import React from 'react'
import HeaderComp from './HeaderComp'
import { View } from 'react-native'

function LiveHome() {
    const ScreenName = "Live"
    return (
        <View>
            <HeaderComp
                name={ScreenName}
            />
        </View>

    )
}

export default LiveHome