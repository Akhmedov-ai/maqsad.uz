import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default function SelectButton({ onPress, color = 'black', style, loading, textStyle, title, container }) {
    return (
        <View style={[styles.container, container]}>
            <TouchableOpacity onPress={onPress} style={{
                ...styles.button,
                backgroundColor: 'transparent',
                ...style,
                borderColor: color,
            }}>
                {loading ? <ActivityIndicator /> : (
                    <Text style={{ ...styles.text, ...textStyle, color }}>
                        {title}
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginLeft: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    button: {
        height: 66,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
})
