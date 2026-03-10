import React from 'react'
import HeaderComp from './HeaderComp'
import { ScrollView, Text, View } from 'react-native'

function Profile() {
  const ScreenName = "Profile"

  return (
    <View>
      <HeaderComp
        name={ScreenName}
      />
      <ScrollView>

      </ScrollView>
    </View>

  )
}



export default Profile