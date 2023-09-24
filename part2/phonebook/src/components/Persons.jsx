const Persons = ({persons, filter, remove}) => {
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()) === true )
  return (
    <div>
      {filteredPersons.map(person => {
        return (
          <div key={person.name}>
            {person.name} {person.number} <button id={person.id} onClick={remove}>delete</button>
          </div>
        )
      })} 
    </div>
  )
}

export default Persons