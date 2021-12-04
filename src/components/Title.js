import React from 'react'
import { Text, View } from 'react-native'

const Title = ({ title, subTitle, containerStyle }) => (
    <View style={{
        ...containerStyle,
    }}>
        <Text style={{
            color: '#222628',
            fontWeight: 'bold',
            fontSize: 21,
        }}>
            {title}
        </Text>
        <Text style={{
            color: '#222628',
            fontWeight: 'bold',
            fontSize: 21,
        }}
        >
            {subTitle}
        </Text>
    </View>
)
export default Title
