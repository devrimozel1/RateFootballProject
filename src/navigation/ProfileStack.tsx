import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Profile from '../Pages/Profile'

function ProfileStack() {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default ProfileStack