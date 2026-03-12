import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeTabScreen from './HomeTabScreen';

  const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeTab' component={HomeTabScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router