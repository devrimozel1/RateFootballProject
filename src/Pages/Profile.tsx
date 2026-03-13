import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderComp from './HeaderComp'
import Profilecart from '../companents/Profilecart'

function Profile() {
  const ScreenName = "Profile"
  return (
    <View style={{height:1000}}>
      <HeaderComp
        name={ScreenName}
      />
      <ScrollView>
        <View style={styles.container}>
          <Profilecart/>
        </View>
      </ScrollView>


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height:1000,
    gap:10
  },
  
  
  
  
})


export default Profile