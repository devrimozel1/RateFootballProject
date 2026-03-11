import HomeScreen from '../Pages/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveHome from '../Pages/LiveHome';
import FavoritesHome from '../Pages/FavoritesHome';
import ProfileIcon from "../images/profile.png"
import HomeIcon from "../images/home.png"
import LiveIcon from "../images/football.png"
import { Image } from 'react-native';
import ProfileStack from './ProfileStack';
function HomeTabScreen() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
             
            }
        }}>
            <Tab.Screen name='Home' component={HomeScreen} options={{
                headerShown: false, tabBarIcon: (({ size }) => {
                    return (<Image source={HomeIcon} style={{ width: size, height: size }}></Image>)
                })
            }} />
            <Tab.Screen name='Live' component={LiveHome} options={{
                tabBarIcon: (({ size }) => {
                    return (<Image source={LiveIcon} style={{ width: size, height: size }}></Image>)
                })
            }} />
            <Tab.Screen name='Favorites' component={FavoritesHome} />
            <Tab.Screen name='Profile' component={ProfileStack} options={{
                tabBarIcon: (({ size }) => {
                    return (<Image source={ProfileIcon} style={{ width: size, height: size }}></Image>)
                })
            }} />
        </Tab.Navigator>)
}

export default HomeTabScreen