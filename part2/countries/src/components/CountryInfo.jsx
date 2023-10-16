import Weather from './Weather'
const CountryInfo = ({country}) => {
  return (
    <div>
        <h2>{country.name.common}</h2>
        capital {country.capital} <br />
        area {country.area} <br />
        <br />

        <strong>languages:</strong>
        <ul>
          {Object.values(country.languages).map( lang => <li key={lang}>{lang}</li>)}
        </ul>

        <img src={country.flags.png} />
        <br />

        <h2>Weather in {country.capital}</h2>
        <Weather city={country.capital} />

      </div>
  )
}
 export default CountryInfo