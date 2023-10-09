import { useState } from 'react'
import { useEffect } from 'react'
import Search from './components/Search'
import Content from './components/Content'
import countriesService from './services/countries'

const App = () => {
  const [filter, setFilter] = useState('') 
  const [countries, setCountries] = useState([])

  useEffect( () => {
    countriesService
      .getAll()
     .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const overrideFilter = (value) => {
    setFilter(value)
  }

  return (
    <div>
      {/*  Search Bar  (changes filter state) */}
      <Search filter={filter} handleFilter={handleFilter} />
      {/* Content -> message, list, country info */}
      <Content countries={countries} filter={filter} handler={overrideFilter} />
    </div>
  )
}

export default App
