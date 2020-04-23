import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    Alert,
    Platform,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import RNLocation from 'react-native-location'

import { ImContainer } from '@components/Container'
import { IdTab } from '@components/Indicator'
import { BxMessage } from '@components/Box'
import { HmCurrent, HmDetails, HmHourly, HmDaily } from './components'
import { roundCelsius, getWeatherIcon } from '@utils/functions'
import * as weatherActions from '@actions/weather'

const HomeScreen = () => {

    const [indicatorIndex, setIndicatorIndex] = useState(0)
    const [message, setMessage] = useState('')

    const weather = useSelector(state => state.weather.oneCall)

    const dispatch = useDispatch()

    const requestLocationPermission = () => {
        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "fine"
            }
        })
            .then(granted => {
                console.log('granted', granted)
                if (granted) {
                    configureLocation()
                }
                else {
                    alertLocationPermission()
                }
            })
    }

    const alertLocationPermission = () => {
        Alert.alert(
            "Alert",
            "Location permission denied. Go to Settings to allow location permission.",
            [
                { text: "OK", onPress: () => requestLocationPermission() }
            ],
            { cancelable: false }
        )
    }

    const configureLocation = () => {
        if (Platform.OS === 'ios') {
            RNLocation.configure({
                distanceFilter: 100,
                desiredAccuracy: {
                    ios: "best",
                },
            })
            getLatestLocation()
        }
        else {
            RNLocation.configure({
                distanceFilter: 100,
                desiredAccuracy: {
                    android: "highAccuracy"
                },
                androidProvider: "auto",
                interval: 5000,
                fastestInterval: 10000,
                maxWaitTime: 5000,
            })
                .then(_ => {
                    console.log('configure SUCCESS')
                    getLatestLocation()
                })
                .catch(error => {
                    console.log('configure ERROR', error)
                    alertLocationStatus()
                })
        }
    }

    const alertLocationStatus = () => {
        Alert.alert(
            "Alert",
            "Location is disabled. For accurate result, please turn on device Location.",
            [
                { text: "OK", onPress: () => configureLocation() }
            ],
            { cancelable: false }
        )
    }

    const getLatestLocation = () => {
        RNLocation.getLatestLocation({ timeout: 30000 })
            .then(latestLocation => {
                console.log('latest location', latestLocation)
                if (latestLocation) {
                    const latitude = latestLocation.latitude
                    const longitude = latestLocation.longitude
                    getWeatherOneCall(latitude, longitude)
                }
                else {
                    setMessage('Retrying to get current location')
                    requestLocationPermission()
                }
            })
    }

    const getWeatherOneCall = (lat, lon) => {
        setMessage('Fetching current weather in your location')
        dispatch(weatherActions.getOneCallRequest(lat, lon))
            .then(() => {
                setMessage('')
                console.log('weather oneCall SUCCESS')
            })
            .catch((err) => {
                setMessage('Failed fetching current weather. Please check your internet connection.')
                console.log('weather oneCall ERROR', err)
            })
    }

    useEffect(() => {
        setMessage('Getting current location')
        requestLocationPermission()
    }, [])

    return (
        <ImContainer
            source={require('@assets/full-background-1.jpg')}
        >
            <SafeAreaView style={styles.container}>
                {
                    weather == null ?
                        <BxMessage message={message} />
                        :
                        <View style={styles.container}>
                            <HmCurrent
                                image={getWeatherIcon(weather.current.weather[0].icon)}
                                location={weather.timezone}
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
                        </View>
                }

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