import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import TabNavigator from './src/TabNavigator'
import Auth from './src/screen/Auth'
import SignIn from './src/screen/SignIn'
import OneId from './src/screen/OneId'
import Joined from './src/screen/Joined'
import PinCode from './src/screen/PinCode'

const Stack = createStackNavigator()

const App = () => {
    const [loaded] = useFonts({
        // eslint-disable-next-line global-require
        Bold: require('./assets/fonts/Raleway-Bold.ttf'),
        // eslint-disable-next-line global-require
        Medium: require('./assets/fonts/Raleway-Medium.ttf'),
    })

    if (!loaded) {
        return null
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                cardOverlayEnabled={false}
                initialRouteName="Auth">
                <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNavigator} />
                <Stack.Screen name="Auth" options={{ headerShown: false }} component={Auth} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="PinCode" component={PinCode} />
                <Stack.Screen name="OneId" component={OneId} />
                <Stack.Screen name="Joined" component={Joined} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
