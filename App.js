import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/TabNavigator'
import Auth from './src/screen/Auth'
import SignIn from './src/screen/SignIn'
import Bank from './src/screen/Bank'
import Joined from './src/screen/Joined'

const Stack = createStackNavigator()

const App = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            cardOverlayEnabled={false}
            initialRouteName="Auth">
            <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNavigator} />
            <Stack.Screen name="Auth" options={{ headerShown: false }} component={Auth} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Bank" component={Bank} />
            <Stack.Screen name="Joined" component={Joined} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default App
