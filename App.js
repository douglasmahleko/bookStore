import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigation/tab';
import BookDetail from './screens/bookDetail';
import 'react-native-gesture-handler'
import {colors} from './constants/themes'
import { StatusBar } from 'react-native';

export default function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={ colors.black } />
        <Stack.Navigator 
          screenOptions={{
            headerShown:false
          }}
          initialRouteName='Home'
        >
          <Stack.Screen name="Home" component={BottomTab} />
          <Stack.Screen name="BookDetail" component={BookDetail} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

