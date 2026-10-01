import { useState } from 'react'

const Buttons = ({ onClick, text }) => 
  <button 
    onClick={onClick}>{text}
  </button>

// const Display = (props) => {
//   if (props.displayAll.length === 0) {
//     return (
//       <div></div>
//     )
//   }
//   return (
//     <div>
//       <h1>statistics</h1>
//       <p>good {good}</p>
//       <p>neutral {neutral}</p>
//       <p>bad {bad}</p>
//     </div>
//   )
// }

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [displayAll, setAll] = useState(false)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(true)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(true)
    setTotal(good + updatedNeutral + bad)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(true)
    setTotal(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Buttons onClick={handleGood} text='good'/>
      <Buttons onClick={handleNeutral} text='neutral'/>
      <Buttons onClick={handleBad} text='bad'/>

      {displayAll && (
        <div>
          <h1>statistics</h1>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>    
          <p>all {total}</p>  
          <p>average {(good - bad) / total * 100}</p>
          <p>positive {good / total * 100} %</p>
        </div>   
      )}
    </div>
  )
}

export default App