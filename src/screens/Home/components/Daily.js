import React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native'

import { CdImage } from '@components/Card'
import { roundCelsius, momentDay, getWeatherIcon } from '@utils/functions'

const HmDaily = (props) => {

    const renderRenderItem = (itemData) => {
        return (
            <CdImage
                containerStyle={{ width: 78 }}
                isFirst={itemData.index == 0}
                isLast={itemData.index + 1 == props.data.length}
                title={momentDay(itemData.item.dt)}
                value1={roundCelsius(itemData.item.temp.min)}
                value2={roundCelsius(itemData.item.temp.max)}
                image={getWeatherIcon(itemData.item.weather[0].icon)}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => `${index}`}
                data={props.data}
                renderItem={renderRenderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
    }
})

export default HmDaily