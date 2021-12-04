import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Pressable, Modal, Text, Dimensions, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ReactNativePinView from 'react-native-pin-view'
import Container from '../components/Container'
import { ArrowBack, Plus } from '../components/common/Svgs'

const { height } = Dimensions.get('screen')

export default function PinCode() {
    const [visible, setVisible] = useState(true)
    const navigation = useNavigation()

    const pinView = useRef(null)
    const [enteredPin, setEnteredPin] = useState('')

    useEffect(() => {
        if (enteredPin.length === 4) {
            setVisible(false)
            navigation.navigate('Home')
        }
    }, [enteredPin])

    return (
        <View>
            <View style={styles.topContent}>
                <Container style={{ flex: 1 }}>
                    <Pressable>
                        <ArrowBack />
                    </Pressable>

                    <Text style={styles.subTitle}>
                        Шаг 3 из 3
                    </Text>

                    <Text style={styles.title}>
                        Придумайте код из 4 {'\n'}цифр
                    </Text>

                    <Text style={styles.subTitle}>
                        Этот код вы будите вводить для входа в систему
                        приложения <Text style={{ fontWeight: '700' }}>MAQSAD.uz</Text>
                    </Text>
                </Container>
            </View>

            <Container style={styles.bottomContent} />

            <Modal
                visible={visible}
                transparent
                animationType="slide">
                <View style={{ height: 560, marginTop: 350 }}>
                    <ReactNativePinView
                        inputSize={32}
                        ref={pinView}
                        pinLength={4}
                        buttonSize={60}
                        onValueChange={(value) => setEnteredPin(value)}
                        buttonAreaStyle={{
                            marginTop: 24,
                            width: 300,
                        }}
                        inputAreaStyle={{
                            marginBottom: 24,
                        }}
                        inputViewEmptyStyle={{
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: '#000',
                            width: 10,
                            height: 10,
                        }}
                        inputViewFilledStyle={{
                            backgroundColor: '#000',
                            width: 10,
                            height: 10,
                        }}
                        buttonViewStyle={{
                            width: 70,
                            height: 70,
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: '#000',
                        }}
                        buttonTextStyle={{
                            color: '#000',
                            fontSize: 38,
                            fontWeight: '600',
                        }}
                        onButtonPress={(key) => {
                            if (key === 'custom_right') {
                                pinView.current.clear()
                            }
                        }}
                        customRightButton={<Plus size={36} color="#FFF" />}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    topContent: {
        backgroundColor: '#D2E1D6',
        height: height * 0.35,
        paddingTop: 63,
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
