import React from 'react'
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Platform, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import logo from '../../assets/logo.png'
import coat from '../../assets/coat.png'
import Button from '../components/common/Button'

const { height } = Dimensions.get('screen')

export default function Joined() {
    const navigation = useNavigation()

    function onSubmit() {
        navigation.navigate('Home')
    }

    return (
        <View>
            <View style={styles.topContent}>
                <SafeAreaView style={styles.safeArea} />

                <Container>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={logo} style={{ width: 70, height: 70 }} />
                        <Image source={coat} style={{ width: 70, height: 70, marginLeft: 15 }} />
                    </View>

                    <Text style={{ fontWeight: '700', fontSize: 22, marginTop: 20 }}>
                        Добро пожаловать!
                    </Text>

                    <Text style={{ fontWeight: '500', fontSize: 12, marginTop: 15 }}>
                        Мы ежедневно работаем над тем, чтобы сделать
                        вашу жизнь удобнее.
                    </Text>

                    <Text style={{ fontWeight: '500', fontSize: 12, marginTop: 15 }}>
                        Теперь важные документы будут всегла доступны
                        в смартфоне.
                    </Text>
                </Container>
            </View>

            <View style={styles.bottomContent}>
                <Button title="Перейти к документам" onPress={onSubmit} style={{ width: 240, height: 50 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContent: {
        backgroundColor: '#D2E1D6',
        height: height * 0.8,
        paddingTop: 125,
    },
    safeArea: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    bottomContent: {
        backgroundColor: '#E6F5EA',
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
