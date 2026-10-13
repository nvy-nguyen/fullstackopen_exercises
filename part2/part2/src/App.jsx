const App = () => {
  const wholeCourse = {
  name: 'Web development curriculum',
  courses: [
  {
    name: 'Half Stack application development',
    id: 1,
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
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts : [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  },
  ]
  }

  return (
    <div>
      <h2>{wholeCourse.name}</h2>
      {wholeCourse.courses.map(transformCourse => 
        <Course key={transformCourse.id} course={transformCourse} />
      )}
    </div>
  )
}

const Course = (props) => (
  <div>
    <Header courseName={props.course.name} />
    <Content courseParts={props.course.parts} />
    <Total total={props.course.parts.reduce((acc, count) => acc + count.exercises, 0)} />
  </div>
)

// const transformCourse = (course) => {
//   console.log(course)
//   return (
//   <div key={course.id}>
//   <Header courseName={course.name} />
//   <Content courseParts={course.parts} />
//   <Total total={course.parts.reduce((acc, count) => acc + count.exercises, 0)} />
//   </div>
//   )
// }

const Header = (props) => <h3>{props.courseName}</h3>

const Content = (props) => {
  return (
    <div>
      {props.courseParts.map(partObject => <Part key={partObject.id} part={partObject}/>)}
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

const Total = (props) => (
  <p> <strong>total of {props.total} exercises</strong></p>
)

export default App