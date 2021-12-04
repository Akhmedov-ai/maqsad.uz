import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default function Button({ onPress, color = 'black', style, loading, textStyle, title, icon, contStyle }) {
    return (
        <View style={{ ...styles.container, ...contStyle }}>
            <TouchableOpacity onPress={onPress} style={{
                ...styles.button,
                backgroundColor: color,
                ...style,
            }}>
                {loading ? <ActivityIndicator /> : (
                    <View style={styles.icon}>
                        {icon ? <View style={{ marginRight: 10 }}>{icon}</View> : null}

                        <Text style={{ ...styles.text, ...textStyle }}>
                            {title}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        letterSpacing: 0.5,
    },
    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        height: 66,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
})
