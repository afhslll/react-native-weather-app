import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

import { CdIcon } from '@components/Card'
import { windowWidth } from '@utils/constants'

const HmDetails = (props) => {
    const cardWidth = (windowWidth - 32 - 24) / 4
    return (
        <View style={styles.container}>
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='sunrise'
                iconType='feather'
                title='Sunrise'
                value='7:36am'
            />
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='sunset'
                iconType='feather'
                title='Sunset'
                value='7:00pm'
            />
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='wind'
                iconType='feather'
                title='Wind'
                value='5 mph'
            />
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='droplet'
                iconType='feather'
                title='Humidity'
                value='60%'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',

    }
})

export default HmDetails