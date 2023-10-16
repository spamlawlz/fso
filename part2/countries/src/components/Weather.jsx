import weatherService from '../services/weather'
import { useEffect } from 'react'
import { useState } from 'react'

const Weather = ({city}) => {
  const [weather, setWeather] = useState(null)
  useEffect( () => {
    weatherService
      .get(city)
     .then(weather => {
        setWeather(weather)
      })
  }, [])

  const kelvinToCelsius = (k) => {
    return k - 273.15
  }
 
  if (weather != null) {
    const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

    return (
      <div>
        temperature {kelvinToCelsius(weather.main.temp).toFixed(2)} Celsius
        <br />
        <img src={icon}/>
        <br />
        wind {weather.wind.speed} m/s
      </div>
    )
  }

  return (
    <div>loading...</div>
  )

}

export default Weather