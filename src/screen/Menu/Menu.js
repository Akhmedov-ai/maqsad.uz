import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Container from '../../components/Container'
import lock from '../../../assets/lock.png'
import question from '../../../assets/question.png'
import sun from '../../../assets/sun.png'
import chat from '../../../assets/chat.png'
import settings from '../../../assets/settings.png'
import info from '../../../assets/info.png'
import user from '../../../assets/user.png'
import newInfo from '../../../assets/newInfo.png'
import logout from '../../../assets/logout.png'
import Header from '../../components/Header'

export default function Menu() {
    return (
        <View>
            <Header title="Меню" />
            <View style={styles.topContent}>
                <Container>
                    <View style={styles.tab}>
                        <View style={styles.lastItem}>
                            <Image width={20} height={20} source={lock} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Подключенные устройства
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tab}>
                        <View style={styles.item}>
                            <Image width={20} height={20} source={question} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Функции и подсказки
                            </Text>
                        </View>

                        <View style={styles.item}>
                            <Image width={20} height={20} source={sun} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Вопросы и ответы
                            </Text>
                        </View>

                        <View style={styles.lastItem}>
                            <Image width={20} height={20} source={chat} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Служба поддержки
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tab}>
                        <View style={styles.lastItem}>
                            <Image width={20} height={20} source={settings} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Настройки
                            </Text>
                        </View>
                    </View>

                    <View style={styles.tab}>
                        <View style={styles.item}>
                            <Image width={20} height={20} source={info} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Про Maqsad.uz
                            </Text>
                        </View>

                        <View style={styles.item}>
                            <Image width={20} height={20} source={user} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Рассказать друзьям
                            </Text>
                        </View>

                        <View style={styles.lastItem}>
                            <Image width={20} height={20} source={newInfo} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Информация об обрабортке {'\n'}
                                персональных данных
                            </Text>
                        </View>
                    </View>

                    <View style={[styles.tab, { borderBottomWidth: 0 }]}>
                        <View style={styles.lastItem}>
                            <Image width={20} height={20} source={logout} style={styles.icon} />
                            <Text style={styles.itemText}>
                                Выйти
                            </Text>
                        </View>
                    </View>
                </Container>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topContent: {
        backgroundColor: '#E6F5EA',
        height: '100%',
        paddingTop: 15,
    },
    tab: {
        borderBottomWidth: 2,
        borderBottomColor: '#D2E1D6',
        paddingVertical: 25,
    },
    itemText: {
        fontWeight: '500',
        fontSize: 15,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 25,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    lastItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
