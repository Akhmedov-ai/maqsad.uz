import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const COLORS = {
    green: '#E6F5EA',
    white2: '#FBFBFB',
    white: '#FFFFFF',
    black: '#000000',
    black1: '#222628',
    green1: '#E5E5E5',
    gray: '#C4C4C4',
    lightGrey: '#E6F5EA',
    transparent: 'transparent',
    transparentWhite1: 'rgba(255, 255, 255, 0.1)',
    transparentBlack1: 'rgba(0, 0, 0, 0.1)',
    transparentBlack7: 'rgba(0, 0, 0, 0.7)',
}
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
}

const appTheme = { COLORS, SIZES }

export default appTheme
