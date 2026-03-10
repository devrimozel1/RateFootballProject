import React from 'react'
import HeaderComp from './HeaderComp'
import { ScrollView, View } from 'react-native'

function FavoritesHome() {
    const ScreenName = "Favorites"
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

export default FavoritesHome