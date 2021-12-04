import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Header from '../../components/Header'
import Container from '../../components/Container'

export default function Notification() {
    return (
        <View style={{
            flex: 1,
        }}>
            <Header title="Уведомления" />
            <View style={styles.topContent}>
                <Container>
                    <Text style={styles.noContentText}>
                        У вас нет новых
                        уведомлений.
                    </Text>
                </Container>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContent: {
        backgroundColor: '#E6F5EA',
        height: '100%',
        paddingTop: 50,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    noContentText: {
        fontWeight: '700',
        fontSize: 28,
    },
})
