export const GET_ONE_CALL = 'GET_ONE_CALL'
export const RESET_WEATHER = 'RESET_WEATHER'

import api from '@services/httpServices'

export const getOneCallRequest = (lat, lon) => {
    return async (dispatch, getState) => {
        try {
            const response = await api.getOneCall(lat, lon)
            dispatch({
                type: GET_ONE_CALL,
                data: response.data
            })
        } catch (error) {
            throw error
        }
    }
}