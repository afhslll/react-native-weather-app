import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { ImContainer } from '@components/Container'
import { IdTab } from '@components/Indicator'
import { HmCurrent, HmDetails, HmHourly, HmDaily } from './components'
import { roundCelsius, getWeatherIcon } from '@utils/functions'
import * as weatherActions from '@actions/weather'

const HomeScreen = () => {

    const [indicatorIndex, setIndicatorIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const weather = useSelector(state => state.weather.oneCall)

    const dispatch = useDispatch()

    const getWeatherOneCall = () => {
        setLoading(true)
        dispatch(weatherActions.getOneCallRequest('3.136644', '101.687051'))
            .then(() => {
                setLoading(false)
                console.log('weather oneCall SUCCESS')
            })
            .catch((err) => {
                setLoading(false)
                console.log('weather oneCall ERROR', err)
            })
    }

    useEffect(() => {
        getWeatherOneCall()
    }, [])

    if (weather == null) {
        return <View></View>
    }

    return (
        <ImContainer
            source={require('@assets/full-background-1.jpg')}
        >
            <SafeAreaView style={styles.container}>
                <HmCurrent
                    image={getWeatherIcon(weather.current.weather[0].icon)}
                    location="Kuala Lumpur"
                    description={weather.current.weather[0].main}
                    temperature={roundCelsius(weather.current.temp)}
                />
                <View>
                    <HmDetails
                        sunrise={weather.current.sunrise}
                        sunset={weather.current.sunset}
                        wind={weather.current.wind_speed}
                        humidity={weather.current.humidity}
                    />
                    <IdTab
                        titles={['Today', 'Next 7 Days']}
                        onChange={(index) => setIndicatorIndex(index)}
                        index={indicatorIndex}
                    />
                    {
                        indicatorIndex == 0 ?
                            <HmHourly 
                                data={weather.hourly.slice(0, 24)}
                            /> 
                            : 
                            <HmDaily 
                                data={weather.daily.slice(1, 8)}
                            />
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