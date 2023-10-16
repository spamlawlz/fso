import axios from "axios"

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q='
const apikey = import.meta.env.VITE_WEATHER_API_KEY

const get = (city) => {
  const request = axios.get(`${baseURL}${city}&appid=${apikey}`)
  return request.then(response => response.data)
}

export default {get}