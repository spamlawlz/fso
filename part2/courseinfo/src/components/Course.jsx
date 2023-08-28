const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({name}) => {
  return <h1>{name}</h1>
}

const Total = ({parts}) => {
  const total = parts.reduce((total, part) => total + part.exercises, 0);
  return <strong><p>total of {total} exercises</p></strong>
}

const Content = ({parts}) => {
  return (
    <div>
      <ul>
        {parts.map(part =>
          <Part key={part.id} part={part} />
        )}
      </ul>
      <Total parts={parts} />
    </div>
  )
}

const Part = ({part}) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  )
}

export default Course