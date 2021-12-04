import React, { useCallback } from 'react'
import { View, StyleSheet, Text, Dimensions, SafeAreaView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import SelectButton from '../components/common/SelectButton'

const { height } = Dimensions.get('screen')

export default function Bank() {
    const navigation = useNavigation()

    const onSubmit = useCallback(() => {
        navigation.navigate('Joined')
    }, [])

    return (
        <View>
            <View style={styles.topContent}>
                <SafeAreaView style={styles.safeArea} />

                <Container style={{ flex: 1 }}>
                    <Text style={styles.subTitle}>
                        Шаг 2 из 2
                    </Text>

                    <Text style={styles.title}>
                        Выберите свой банк
                    </Text>

                    <Text style={styles.subTitle}>
                        Это все банки, которые присоединились к системе
                        интернет-банкинга. Нет вашего? Следите за обновлениями.
                    </Text>
                </Container>
            </View>

            <Container style={styles.bottomContent}>
                <View style={styles.buttonContent}>
                    <SelectButton onPress={onSubmit} title="NBU" style={styles.button} />
                    <SelectButton onPress={onSubmit} title="Aloqabank" style={styles.button} />
                </View>

                <View style={styles.buttonContent}>
                    <SelectButton onPress={onSubmit} title="Asaka Bank" style={styles.button} />
                    <SelectButton onPress={onSubmit} title="Sanoat Qurilish" style={styles.button} />
                </View>

                <View style={styles.buttonContent}>
                    <SelectButton onPress={onSubmit} title="Qishloq Qurilish Bank" style={styles.button} />
                </View>

                <View style={styles.buttonContent}>
                    <SelectButton onPress={onSubmit} title="TBC" style={styles.button} />
                    <SelectButton onPress={onSubmit} title="Mikrokreditbank" style={styles.button} />
                </View>

                <View style={styles.buttonContent}>
                    <SelectButton onPress={onSubmit} title="InfinBank" style={styles.button} />
                    <SelectButton onPress={onSubmit} title="Ipak Yoli Bank" style={styles.button} />
                </View>

                <View style={styles.buttonContent}>
                    <SelectButton onPress={onSubmit} title="Asia Alliance Bank" style={styles.button} />
                    <SelectButton onPress={onSubmit} title="Agrobank" style={styles.button} />
                </View>

                <View style={styles.buttonContent}>
                    <SelectButton onPress={onSubmit} title="Turon Bank" style={styles.button} />
                    <SelectButton onPress={onSubmit} title="Ipoteka Bank" style={styles.button} />
                </View>
            </Container>
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
})
