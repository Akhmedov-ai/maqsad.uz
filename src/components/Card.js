import React from 'react'
import { Image, Text, View } from 'react-native'

const Card = ({ icon, checkIcon, date, cardNumber }) => (
    <View style={{
        flexDirection: 'row',
    }}>
        <Image source={icon}
            style={{
                width: 140,
                height: 180,
                marginRight: 20,
            }} />
        <View>
            <View>
                <Text
                    style={{
                        color: '#222628',
                        fontSize: 12,
                    }}
                >
                    Дата рождения:
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

            <View style={{ marginTop: 20 }}>
                <Text style={{
                    color: '#222628',
                    fontSize: 12,
                }}>
                    Серия паспорта:
                </Text>
                <Text style={{
                    color: '#222628',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginTop: 5,
                }}>
                    {cardNumber}
                </Text>
            </View>

            <Image source={checkIcon}
                style={{
                    height: 56,
                    width: 93,
                    marginTop: 30,
                }}
            />
        </View>
    </View>
)
export default Card
