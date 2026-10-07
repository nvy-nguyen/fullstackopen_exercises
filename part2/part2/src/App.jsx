// import React from 'react'

// const Header = (props) => {
//       return (
//         <h1>{props.course}</h1>
//       )
//     }

// const Content = () => {
//       return (
//         <div>
//           <Part />
//         </div>
//       )
//     }

// const Part = () => {
//         // return (
//         //   // <ul>
//         //   //   {course.map(info => 
//         //   //     <li>
//         //   //       {info.name} {info.exercises}
//         //   //     </li>
//         //   //   )}
//         //   // </ul>
//         // )
//       }

// const Course = () => {
//     return (
//       <div>
//         <Header header={course.name} />
//         <Content />
//       </div>
//     )
//   }

// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       }
//     ]
//   }

//   return <Course course={course} />
// }

// export default App

// // const result = course.map(info => info.name)
// // console.log(result)

const App = () => {
  const data = {
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
      }
    ]
  }

  return (
    <div>
      <Course courseData={data} />
      <Total
        total={
          data.parts[0].exercises +
          data.parts[1].exercises +
          data.parts[2].exercises
        }
      />
    </div>
  )
}

const Course = (props) => {
  return (
  <div>
    <Header courseName={props.courseData.name} />
    <Content courseParts={props.courseData.parts} />
  </div>
  )
}

const Header = (props) => <h1>{props.courseName}</h1>

const Content = (props) => {
console.log(JSON.stringify(props, null, 2));
  return (
  <div>
    <Part part={props.courseParts[0]} />
    <Part part={props.courseParts[1]} />
    <Part part={props.courseParts[2]} />
  </div>
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p>Number of exercises {props.total}</p>

export default App