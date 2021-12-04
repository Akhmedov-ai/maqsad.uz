import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Container({ children, style }) {
    return (
        <View style={{ ...styles.content, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 25,
    },
})
