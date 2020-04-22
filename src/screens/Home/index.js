import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native'

import { ImContainer } from '@components/Container'
import { IdTab } from '@components/Indicator'
import { HmCurrent, HmDetails, HmHourly, HmDaily } from './components'

const HomeScreen = () => {

    const [indicatorIndex, setIndicatorIndex] = useState(0)

    return (
        <ImContainer
            source={require('@assets/full-background-1.jpg')}
        >
            <SafeAreaView style={styles.container}>
                <HmCurrent />
                <View>
                    <HmDetails />
                    <IdTab
                        titles={['Today', 'Next 7 Days']}
                        onChange={(index) => setIndicatorIndex(index)}
                        index={indicatorIndex}
                    />
                    {
                        indicatorIndex == 0 ?
                            <HmHourly /> : <HmDaily />
                    }
                </View>
                <View style={{ height: 12 }} />
            </SafeAreaView>
        </ImContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default HomeScreen