import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';

const Stack = createNativeStackNavigator();
function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack
