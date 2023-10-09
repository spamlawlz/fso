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
      </div>
  )
}
 export default CountryInfo