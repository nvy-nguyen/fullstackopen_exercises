const App = () => {

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = () => {
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>{props.part} {props.exercises}</div>
  )
}

const Total = (props) => {
  return (
    <div>Total {props.total}</div>
  )
}

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course='Half Stack application development' />
      <Content />
      <Total total= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App