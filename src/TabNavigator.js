import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import icons from '../data/icons'
import Order from './screen/Order/Order'
import Menu from './screen/Menu/Menu'
import Home from './screen/Home/Home'
import Bell from './screen/Bell/Bell'

const TabButton = function ({ icon, isFocused }) {
    return (
        <Image
            source={icon}
            style={{
                width: 22,
                height: 25,
                tintColor: '#000000',
            }}
            resizeMode="contain"
        />
    )
}

const Tab = createBottomTabNavigator()

const TabNavigator = function ({ navigation }) {
    return (
        <Tab.Navigator headerShown={false} screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#E6F5EA', height: 93, justifyContent: 'center', padding: 20 },
        }}>
            <Tab.Screen options={{
                tabBarLabel: 'Документы',
                tabBarLabelStyle: { color: '#000000', marginBottom: 20 },
                tabBarIcon: ({ focused }) => (
                    <TabButton icon={!focused ? icons.home : icons.activeHome}
                    />
                ),

            }} name="Home" component={Home} />

            <Tab.Screen options={{
                tabBarLabel: 'Уведомления',
                tabBarLabelStyle: { color: '#000000', marginBottom: 20 },
                tabBarIcon: ({ focused }) => (
                    <TabButton icon={!focused ? icons.notification : icons.activeNotification}
                    />
                ),
            }} name="Notification" component={Bell} />
            <Tab.Screen options={{
                tabBarLabel: 'Меню',
                tabBarLabelStyle: { color: '#000000', marginBottom: 20 },
                tabBarIcon: () => (
                    <TabButton icon={icons.menu}
                    />
                ),
            }} name="Menu" component={Menu} />
        </Tab.Navigator>
    )
}

export default TabNavigator
