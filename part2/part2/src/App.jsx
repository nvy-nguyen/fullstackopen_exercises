const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'test',
        exercises: 67,
        id: 4
      }
    ],
  }

  return (
    <div>
      <Course courseData={course}/>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header courseName={props.courseData.name} />
      <Content courseParts={props.courseData.parts} />
      <Total total={props.courseData.parts.reduce((acc, count) => acc + count.exercises, 0)} />
    </div>
  )
}

const Header = (props) => <h1>{props.courseName}</h1>

const Content = (props) => {
  console.log(props.courseParts)
  return (
    <div>
      {props.courseParts.map(props => <Part key={props.id} part={props}/>)}
    </div>
  )
}

// const transformPart = (part) => {
//   console.log(part)
//   return (
//     <Part key={part.id} part={part}/>
//   )  
// }

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

export default App