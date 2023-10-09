const Country = ({ country, handler }) => {
  return (
    <div>
      {country.name.common} <button onClick={handler}>show</button>
    </div>
  )
}

export default Country