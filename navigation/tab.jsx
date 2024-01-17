import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../constants/themes"
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "../screens/home";
import 'react-native-gesture-handler'
import BookDetail from "../screens/bookDetail";

const Tab = createBottomTabNavigator()

const BottomTab = ({navigation}) => {
    return(
            <Tab.Navigator
            screenOptions={{
                tabBarShowLabel:false,
                headerShown:false,
                style : {
                    height:30,
                    backgroundColor:colors.black
                },
                showlabel: false,
            }}>
            <Tab.Screen 
                name="Home" 
                component={BookDetail}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Icon size={25} name="home" style={{color: focused ? 'purple' : 'coral' }} />
                    }
                }}/>

                <Tab.Screen 
                name="Search" 
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Icon size={25} name="search" style={{color: focused ? 'purple' : 'coral' }} />
                    }
                }}/>

                <Tab.Screen 
                name="Notifications" 
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Icon size={25} name="notifications-none" style={{color: focused ? 'purple' : 'coral' }} />
                    }
                }}/>

                <Tab.Screen 
                name="Settings" 
                component={BookDetail}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Icon size={25} name="settings" style={{color: focused ? 'purple' : 'coral' }} />
                    }
                }}/>
                
            </Tab.Navigator>
    )
}
export default BottomTab