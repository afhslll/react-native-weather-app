import Moment from 'moment'

export const kelvinToCelsius = (temp) => {
    return `${Math.round(temp - 273.15)}°`
}

export const roundCelsius = (temp) => {
    return `${Math.round(temp)}°`
}

export const moment12Hour = (dt) => {
    return Moment.unix(dt).format('h:mma')
}

export const momentHourOnly = (dt) => {
    return Moment.unix(dt).format('ha')
}

export const momentDay = (dt) => {
    return Moment.unix(dt).format('ddd')
}

export const getWeatherIcon = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}