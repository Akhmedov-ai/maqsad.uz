import React from 'react'
import { Image, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import icons from '../data/icons'
import Menu from './screen/Menu/Menu'
import Home from './screen/Home/Home'
import Notification from './screen/Bell/Bell'
import { COLORS } from '../data/theme'

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
            tabBarStyle: { backgroundColor: COLORS.lightGray2, height: 93, justifyContent: 'center', padding: 20 },
        }}>
            <Tab.Screen options={{
                tabBarLabel: 'Документы',
                tabBarLabelStyle: { color: COLORS.black, marginBottom: Platform.OS === 'ios' ? 0 : 20 },
                tabBarIcon: ({ focused }) => (
                    <TabButton icon={!focused ? icons.home : icons.activeHome}
                    />
                ),

            }} name="Home" component={Home} />

            <Tab.Screen options={{
                tabBarLabel: 'Уведомления',
                tabBarLabelStyle: { color: COLORS.black, marginBottom: Platform.OS === 'ios' ? 0 : 20 },
                tabBarIcon: ({ focused }) => (
                    <TabButton icon={!focused ? icons.notification : icons.activeNotification}
                    />
                ),
            }} name="Notification" component={Notification} />
            <Tab.Screen options={{
                tabBarLabel: 'Меню',
                tabBarLabelStyle: { color: COLORS.black, marginBottom: Platform.OS === 'ios' ? 0 : 20 },
                tabBarIcon: () => (
                    <TabButton icon={icons.menu}
                    />
                ),
            }} name="Menu" component={Menu} />
        </Tab.Navigator>
    )
}

export default TabNavigator
