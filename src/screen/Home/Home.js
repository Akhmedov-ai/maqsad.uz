import React, { useEffect, useRef, useState } from 'react'
import { Text,
    View,
    Image,
    Animated,
    Platform } from 'react-native'

import CovidTextButton from '../../components/CovidTextButton'

import Line from '../../components/Line'
import Card from '../../components/Card'
import Title from '../../components/Title'
import TaxCard from '../../components/TaxCard'
import SelectButton from '../../components/common/SelectButton'
import Header from '../../components/Header'
import { titleList } from '../../../data/api'
import { COLORS, SIZES } from '../../../data/theme'
import icons from '../../../data/icons'
import { returnBackGroundColor } from '../utils/backgroundColor'

const SPACING = -10
const ITEM_SIZE = Platform.OS === 'ios' ? SIZES.width * 0.65 : SIZES.width * 0.66

export default function Home() {
    const [movies, setMovies] = React.useState([])
    const scrollX = React.useRef(new Animated.Value(0)).current
    const flatListRef = useRef()
    const [currentIndex, setCurrentIndex] = useState()
    useEffect(() => {
        setMovies(titleList)
    }, [])

    const onViewRef = React.useRef((viewableItems) => {
        setCurrentIndex(viewableItems.viewableItems[0].index)
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    function renderDot() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                {
                    titleList.map((item, index) => (
                        <View style={{
                            backgroundColor: index === currentIndex ? COLORS.black : COLORS.gray,
                            width: index === currentIndex ? 9.51 : 7,
                            height: index === currentIndex ? 9.51 : 7,
                            borderRadius: 888,
                            marginLeft: 6,
                            bottom: index === currentIndex ? 1 : 0,
                        }} />
                    ))
                }
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.green1 }}>
            <Header title="Документы" isHome />
            <Animated.FlatList
                ref={flatListRef}
                showsHorizontalScrollIndicator={false}
                data={movies}
                horizontal
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
                keyExtractor={(item) => `${item.id}`}
                bounces={false}
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                renderToHardwareTextureAndroid
                snapToInterval={SIZES.width * 0.98}
                snapToAlignment="start"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    },
                )}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 5) * ITEM_SIZE,
                        (index - 5) * ITEM_SIZE,
                        index * ITEM_SIZE,
                    ]

                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 140, 10],
                        extrapolate: 'clamp',
                    })

                    return (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginHorizontal: 20,
                                height: Platform.OS === 'ios' ? SIZES.height * 0.55 : SIZES.height * 0.6,
                                width: SIZES.width * 0.88,
                            }}>
                            <Animated.View
                                style={{
                                    padding: SPACING * 2,
                                    alignItems: 'center',
                                    transform: [{ translateY }],
                                    height: Platform.OS === 'ios' ? SIZES.height * 0.55 : SIZES.height * 0.6,
                                    width: SIZES.width * 0.88,
                                    borderRadius: 30,
                                    borderColor: '#EEEEEE',
                                    borderWidth: 2,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                    elevation: 5,
                                    backgroundColor: returnBackGroundColor(index),
                                }}>

                                {index === 0 && (
                                    <View style={{
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-evenly',
                                        flex: 1,
                                    }}>
                                        <CovidTextButton
                                            title="У вас еще нет"
                                            covidTitle="COVID-сертификатов"
                                            icon={icons.warning}
                                            imageStyle={{
                                                width: 72,
                                                height: 59,
                                            }}
                                            subtitle="Добавьте сертификат, если вакцинировались."
                                        />
                                        <Line />
                                        <CovidTextButton
                                            title="Добавить"
                                            icon={icons.add}
                                            imageStyle={{
                                                width: 33,
                                                height: 33,
                                                marginTop: 20,
                                            }}
                                            covidTitle={item.title}
                                        />
                                    </View>
                                )}

                                {index === 1 && (
                                    <View style={{
                                        flex: 1,
                                        alignItems: 'flex-start',
                                        flexDirection: 'column',
                                        justifyContent: 'space-around',
                                    }}>
                                        <Title title={item.title} subTitle="Республики Узбекистан" />
                                        <Card
                                            icon={icons.card}
                                            date="25.06.1999"
                                            cardNumber="AA000000"
                                            checkIcon={icons.check} />
                                        <Line />

                                        <View>
                                            <Text style={{
                                                color: '#222628',
                                                fontWeight: 'bold',
                                                fontSize: 18,
                                            }}>Бакаев
                                            </Text>
                                            <Text style={{
                                                color: '#222628',
                                                fontWeight: 'bold',
                                                fontSize: 18,
                                            }}>Тимур
                                            </Text>
                                            <Text style={{
                                                color: '#222628',
                                                fontWeight: 'bold',
                                                fontSize: 18,
                                            }}>
                                                Рустамович
                                            </Text>
                                        </View>
                                    </View>
                                )}
                                {
                                    index === 2 && (
                                        <View style={{
                                            flex: 1,
                                            width: '80%',
                                            alignItems: 'flex-start',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around',
                                        }}>
                                            <Title title={item.title} />

                                            <TaxCard
                                                containerStyle={{
                                                    height: '50%',
                                                }}
                                                date="25.06.1999" />

                                            <Line />

                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginBottom: 20,
                                            }}>
                                                <Text style={{
                                                    color: '#222628',
                                                    fontWeight: 'bold',
                                                    fontSize: 28,
                                                }}>
                                                    3793208386
                                                </Text>
                                                <Image
                                                    source={icons.copy}
                                                    style={{
                                                        width: 24,
                                                        height: 24,
                                                        marginLeft: 10,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    )
                                }
                                {
                                    index === 3 && (
                                        <View style={{
                                            flex: 1,
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                        }}>
                                            <Title title={item.title} />
                                            <View style={{
                                                width: '90%',
                                                marginBottom: 50,
                                            }}>
                                                <Text style={{
                                                    color: '#222628',
                                                    fontSize: 12,
                                                }}>
                                                    Сейчас вы можете добавить к документам
                                                    свидетельство о рождении своего
                                                    ребёнка. Для этого нужны серия и
                                                    номер свидетельства.
                                                </Text>
                                            </View>
                                            <SelectButton
                                                title="Добавить"
                                                container={{
                                                    marginTop: 100,
                                                }}
                                                style={{
                                                    width: 168,
                                                    height: 46,
                                                    borderRadius: 14,
                                                }} />
                                        </View>
                                    )
                                }
                            </Animated.View>
                        </View>
                    )
                }}
            />
            {renderDot()}
        </View>
    )
}
