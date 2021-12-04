import React from 'react'
import { Text, View } from 'react-native'

const TaxCard = ({ date, containerStyle }) => (
    <View style={{ ...containerStyle }}>
        <View>
            <Text style={{
                fontSize: 18,
                color: '#222628',
                fontWeight: 'bold',
            }}>
                Тимур Бакаев
            </Text>
            <Text style={{
                fontFamily: 'Bold',
                fontSize: 18,
                color: '#222628',
                fontWeight: 'bold',
            }}>
                Рустамович
            </Text>
        </View>
        <View style={{ marginTop: 20 }}>
            <Text style={{
                color: '#222628',
                fontSize: 12,
            }}>
                Дата Рождения:
            </Text>
            <Text style={{
                color: '#222628',
                fontSize: 12,
                fontWeight: 'bold',
                marginTop: 5,
            }}>
                {date}
            </Text>
        </View>
    </View>
)
export default TaxCard
