import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { Image } from 'react-native';
import HomeTabScreen from './HomeTabScreen';

function Router() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeTabScreen} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>


    </NavigationContainer>
  )
}

export default Router