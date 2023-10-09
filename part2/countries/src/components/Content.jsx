import Country from './Country'
import CountryInfo from './CountryInfo'

const Content = ({ countries, filter }) => {
  const updatedCountries = countries.filter( (country) => country.name.common.toLowerCase().includes(filter.toLowerCase()) === true)

  if (updatedCountries.length >= 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (updatedCountries.length === 1) {
    const country = updatedCountries[0]
    return (
      <CountryInfo country={country} />
    )
  }

  return (
    <div>
      {updatedCountries.map( (country) => {
        return (
          <Country country={country} key={country.name.common} />
        )
      })}
    </div>
  )
}

export default Content