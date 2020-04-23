import axios from 'axios'

const apiInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiInstance