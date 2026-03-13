import HomeScreen from '../Pages/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveHome from '../Pages/LiveHome';
import FavoritesHome from '../Pages/FavoritesHome';
import ProfileIcon from "../images/profile.png"
import HomeIcon from "../images/home.png"
import LiveIcon from "../images/football.png"
import { Image } from 'react-native';
import ProfileStack from './ProfileStack';
import FavoritesIcon from "../images/star.png"
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

function HomeTabScreen() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            
            tabBarStyle: {
                borderRadius: 20,
                marginBottom: 50,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#007fbd",
                margin: 20,
                position: "absolute",
                overflow:'hidden'
            },
            tabBarBackground: () => (
                <LinearGradient
                    colors={["rgb(170, 75, 107)", "rgb(107, 107, 131)", "rgb(59, 141, 153)"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ flex: 1 }}
    
                />
            )

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
            <Tab.Screen name='Favorites' component={FavoritesHome} options={{
                tabBarIcon: (({ size }) => {
                    return (<Image source={FavoritesIcon} style={{ width: size, height: size }} ></Image>)
                })
            }} />
            <Tab.Screen name='Profile' component={ProfileStack} options={{
                tabBarIcon: (({ size }) => {
                    return (<Image source={ProfileIcon} style={{ width: size, height: size }}></Image>)
                })
            }} />
        </Tab.Navigator >)
}

export default HomeTabScreen