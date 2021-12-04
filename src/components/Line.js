import React from 'react'
import { View } from 'react-native'

const Line = ({ containerStyle }) => (
    <View style={{
        backgroundColor: '#EBEBEB',
        height: 2,
        width: 260,
        borderRadius: 1,
        ...containerStyle,
    }} />
)
export default Line
