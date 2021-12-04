import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Check } from 'react-native-feather'
import Container from '../components/Container'
import Button from '../components/common/Button'

const { height } = Dimensions.get('screen')

export default function SignIn() {
    const [check, setCheck] = useState(false)
    const navigation = useNavigation()
    const [active, setActive] = useState(true)

    return (
        <View>
            <View style={styles.topContent}>
                <SafeAreaView style={styles.safeArea} />

                <Container style={{ flex: 1 }}>
                    <Text style={styles.subTitle}>
                        Шаг 1 из 2
                    </Text>

                    <Text style={styles.title}>
                        Пожалуйста
                        авторизуйтесь
                    </Text>

                    <Text style={styles.subTitle}>
                        Чтобы войти в приложение требуется идентификация
                        через технологию банкинга.
                    </Text>

                    <Text style={styles.subTitle}>
                        Для авторизвции выберите свой банк из тех, которые
                        присоединились к системе, и войдите к системе интернет-банкинга.
                    </Text>

                    <View style={{ justifyContent: 'flex-end', flex: 1, paddingBottom: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                style={[styles.checkBox, check ? styles.checked : '']}
                                onPress={() => setCheck(!check)}>
                                {check ? <Check width={14} height={14} color="#0275d8ff" /> : <View />}
                            </TouchableOpacity>

                            <Text style={{ ...styles.subTitle, marginTop: 0, textDecorationLine: 'underline' }}>
                                Я ознакомлен (-а) с содержанием сообщения {'\n'}
                                об обработке персональных данных
                            </Text>
                        </View>
                    </View>
                </Container>
            </View>

            <View style={styles.bottomContent}>
                <Button
                    disabled={!active}
                    onPress={() => navigation.navigate('Joined')}
                    title="Войти через One ID"
                    style={{ width: 220, height: 50 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContent: {
        backgroundColor: '#D2E1D6',
        height: height * 0.8,
        paddingTop: 110,
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
    title: {
        fontWeight: '700',
        fontSize: 22,
        marginTop: 20,
    },
    subTitle: {
        fontWeight: '500',
        fontSize: 12,
        marginTop: 15,
    },
    checkBox: {
        borderRadius: 5,
        marginRight: 7,
        width: 16,
        height: 16,
        borderWidth: 1.6,
        paddingRight: 14,
        paddingBottom: 13,
        borderColor: '#b4b4b4',
    },
    checked: {
        borderWidth: 1.6,
        borderColor: '#0278ff',
    },
    checkContainer: {
        flexDirection: 'row',
        width: 343,
        alignItems: 'center',
        marginVertical: 10,
    },
})
