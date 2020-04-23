import React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import Moment from 'moment'

import { CdIcon } from '@components/Card'
import { windowWidth } from '@utils/constants'
import { moment12Hour } from '@utils/functions'

const HmDetails = (props) => {
    const cardWidth = (windowWidth - 32 - 24) / 4
    
    return (
        <View style={styles.container}>
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='sunrise'
                iconType='feather'
                title='Sunrise'
                value={moment12Hour(props.sunrise)}
            />
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='sunset'
                iconType='feather'
                title='Sunset'
                value={moment12Hour(props.sunset)}
            />
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='wind'
                iconType='feather'
                title='Wind'
                value={`${props.wind} m/s`}
            />
            <CdIcon
                containerStyle={{ width: cardWidth }}
                iconName='droplet'
                iconType='feather'
                title='Humidity'
                value={`${props.humidity}%`}
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