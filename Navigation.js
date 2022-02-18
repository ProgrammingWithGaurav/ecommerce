import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const Stack = createStackNavigator();

export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator>
        </Stack.Navigator>
    </NavigationContainer>
)

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
    </NavigationContainer>
)