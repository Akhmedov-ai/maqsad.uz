import React from 'react'
import { View, Text, Image } from 'react-native'

const CovidTextButton = ({ title, covidTitle, icon, imageStyle, subtitle }) => (
    <View style={{
        flexDirection: 'column',
        alignItems: 'center',
    }}>
        <Image
            source={icon}
            style={imageStyle}
        />
        <Text style={{
            fontSize: 21,
            fontWeight: '700',
            textAlign: 'center',
            marginTop: 10,
        }}>
            {title}
        </Text>
        {covidTitle && (
            <Text style={{ fontSize: 21,
                fontWeight: '700',
                textAlign: 'center' }}>
                {covidTitle}
            </Text>
        )}
        {subtitle && <Text style={{ width: '100%', fontSize: 9, marginTop: 10 }}>{subtitle}</Text>}
    </View>

)
export default CovidTextButton
