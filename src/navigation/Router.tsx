import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'



import { Image } from 'react-native';
import HomeTab from './HomeTab';
import Register from '../Pages/Register';
import ProfileStack from './ProfileStack';

function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeTab' component={HomeTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router