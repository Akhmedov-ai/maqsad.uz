import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import icons from '../../data/icons'
import { COLORS } from '../../data/theme'

const Header = ({ title, isHome }) => (
    <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 50,
            paddingBottom: 25,
            backgroundColor: isHome ? COLORS.green1 : COLORS.white,
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={icons.logo}
                style={{
                    width: 47,
                    height: 47,
                    marginLeft: 25,
                }}
            />
            <Text style={{ fontWeight: '700', fontSize: 20, marginLeft: 20 }}>{title}</Text>
        </View>
        <TouchableOpacity
            style={{
                width: 47,
                height: 47,
                justifyContent: 'center',
            }}>
            <Image
                source={icons.scan}
                style={{
                    width: 30,
                    height: 30,
                    marginRight: 25,
                }}
            />
        </TouchableOpacity>
    </View>
)
export default Header
