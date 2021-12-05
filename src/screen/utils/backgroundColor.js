import { COLORS } from '../../../data/theme'

export function returnBackGroundColor(index) {
    if (index === 0) {
        return COLORS.white
    }

    if (index === 1) {
        return COLORS.lightGrey
    }

    if (index === 2) {
        return COLORS.blueTransparent
    }

    if (index === 3) {
        return COLORS.lightBlue
    }
}
