import React, { useCallback, useState } from 'react'
import { View, StyleSheet, TextInput, Modal, Text, Dimensions, SafeAreaView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import { OneIdLogo } from '../components/common/Svgs'
import Button from '../components/common/Button'

const { height } = Dimensions.get('screen')

export default function OneId() {
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')
    const [visible, setVisible] = useState(true)
    const navigation = useNavigation()

    const onSubmit = useCallback(() => {
        setVisible(false)
        navigation.navigate('PinCode')
    }, [])

    return (
        <View>
            <View style={styles.topContent}>
                <SafeAreaView style={styles.safeArea} />

                <Container style={{ flex: 1 }}>
                    <Text style={styles.subTitle}>
                        Шаг 2 из 3
                    </Text>

                    <Text style={styles.title}>
                        Пожалуйста авторизуйтесь
                    </Text>

                    <Text style={styles.subTitle}>
                        Авторизуйтесь через систему <Text style={{ fontWeight: '700' }}>ONEID</Text> для
                        использования нашего приложения.
                    </Text>
                </Container>
            </View>

            <Container style={styles.bottomContent} />

            <Modal
                visible={visible}
                transparent
                animationType="slide">
                <View style={{ height: 560, marginTop: 350 }}>
                    <View style={styles.navbar}>
                        <OneIdLogo />
                    </View>

                    <View style={styles.wrapper}>
                        <TextInput
                            style={[styles.input, value.length === 0 ? styles.aa : styles.a]}
                            value={value}
                            onChangeText={(e) => setValue(e)}
                            placeholder="Email"
                            placeholderTextColor="#000" />

                        <TextInput
                            style={[styles.input, value1.length === 0 ? styles.aa : styles.a]}
                            placeholder="Пароль"
                            secureTextEntry
                            onChangeText={(e) => setValue1(e)}
                            placeholderTextColor="#000" />

                        {value.length !== 0 && value1.length !== 0 ? (
                            <Button
                                onPress={() => onSubmit()}
                                title="Подтвердить"
                                contStyle={{ marginVertical: 1 }}
                                style={{ width: 230, height: 50 }} />
                        ) : (
                            <View style={styles.unChecked}>
                                <Text style={styles.unCheckedText}>Подтвердить</Text>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    topContent: {
        backgroundColor: '#D2E1D6',
        height: height * 0.35,
        paddingTop: 110,
    },
    safeArea: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    bottomContent: {
        backgroundColor: '#E6F5EA',
        height: height * 0.65,
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
        width: 14,
        height: 14,
        marginRight: 15,
        paddingTop: 5,
    },
    button: {
        minWidth: 130,
        height: 50,
        paddingHorizontal: 20,
    },
    buttonContent: {
        flexDirection: 'row',
    },
    wrapper: {
        height: '55%',
        alignItems: 'center',
    },
    navbar: {
        marginBottom: 17,
        alignItems: 'center',
    },
    oneId: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        paddingLeft: 17,
        paddingVertical: 15,
        borderWidth: 2,
        width: 230,
        marginBottom: 10,
        height: 50,
        borderColor: '#000',
        borderRadius: 16,
    },
    aa: {
        fontWeight: '700',
        fontSize: 18,
    },
    a: {
        fontWeight: '500',
        fontSize: 15,
    },
    login: {
        backgroundColor: '#40bfff',
        marginVertical: 20,
        height: 57,
        width: 250,
        borderRadius: 30,
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        top: 18,
        fontSize: 15,
        fontWeight: 'bold',
    },
    unChecked: {
        width: 230,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    unCheckedText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
})
