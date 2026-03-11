import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';

function ProfileStack() {

      const Stack = createNativeStackNavigator();
    

  return (
     <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Register' component={Register}/>


      </Stack.Navigator>
  )
}

export default ProfileStack
