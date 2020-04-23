import {
    GET_ONE_CALL,
    RESET_WEATHER
} from '@actions/weather'

const INITIAL_STATE = {
    oneCall: null
}

export const weatherReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ONE_CALL:
            return {
                ...state,
                oneCall: action.data
            }
        case RESET_WEATHER:
            return INITIAL_STATE
        default:
            return state
    }
}