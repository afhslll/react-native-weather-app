import apiInstance from './httpManager'
const appId = '8431c1af723ec74b5e15ecf8656b25dc'

const getOneCall = (lat, lon) => apiInstance.get(`/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${appId}`)

export default {
  getOneCall,
}