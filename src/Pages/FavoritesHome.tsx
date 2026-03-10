import React from 'react'
import HeaderComp from './HeaderComp'
import { View } from 'react-native'

function FavoritesHome() {
    const ScreenName = "Favorites"
    return (
        <View>
            <HeaderComp
                name={ScreenName}
            />
        </View>

    )
}

export default FavoritesHome