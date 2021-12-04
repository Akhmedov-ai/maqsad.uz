import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import TabNavigator from './src/TabNavigator'

const Stack = createStackNavigator()

const App = () => {
    const [loaded] = useFonts({
        Bold: require('./assets/fonts/Raleway-Bold.ttf'),
    })

    if (!loaded) {
        return null
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                cardOverlayEnabled={false}
                initialRouteName="Home">
                <Stack.Screen name="Home" options={{ headerShown: false }} component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
