import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from './Pages/HomeScreen';
import Register from './Pages/Profile';
import HomeScreen from './Pages/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Pages/Profile';
import LiveHome from './Pages/LiveHome';
import FavoritesHome from './Pages/FavoritesHome';
import ProfileIcon from "./images/profile.png"
import HomeIcon from "./images/home.png"
import LiveIcon from "./images/football.png"


import { Image } from 'react-native';

function Router() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle:{
          width: '80%',
          marginLeft: '10%'
        }
      }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false, tabBarIcon:(({size}) => {
          return (<Image source={HomeIcon} style={{width:size, height:size}}></Image>)
        })}} />
        <Tab.Screen name='Live' component={LiveHome} options={{tabBarIcon:(({size}) => {
          return (<Image source={LiveIcon} style={{width:size, height:size}}></Image>)
        })}} />
        <Tab.Screen name='Favorites' component={FavoritesHome} />
        <Tab.Screen name='Profile' component={Profile} options={{
          tabBarIcon: (({size}) => {
            return (<Image source={ProfileIcon} style={{width:size, height:size}}></Image>)
          })
        }} />
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default Router