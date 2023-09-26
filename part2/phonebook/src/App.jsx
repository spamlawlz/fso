import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect( () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const match = persons.find((person) => person.name === newPerson.name)
    if (match) {
      if (window.confirm(`${match.name} is already added to the phonebook. Replace the old number with a new one?`)) {
        personService
          .update(newPerson, match.id)
          .then(returnedPerson => {
            setPersons(persons.map(person => {
              if (person.name === returnedPerson.name) {
                person.number = returnedPerson.number
              }
              return person
            }))
            setNewName('')
            setNewNumber('')
          })
      }
      return
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const removePerson = (event) => {
    event.preventDefault()

    //better way to do this? seems janky
    const id = Number(event.target.getAttribute("id")) 
    const name = persons.find((person) => person.id === id).name

    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          const newPersons = persons.filter(person => person.id !== id)
          setPersons(newPersons)
        })
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} remove={removePerson}/>
    </div>
  )
}

export default App
