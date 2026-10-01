import { useState } from 'react'

const Button = ({ onClick, text }) => 
  <button 
    onClick={onClick}>{text}
  </button>

const Statistics = ({ stats1, stats2, stats3, stats4, stats5, stats6 }) => {
  if (stats1 === 0 & stats2 === 0 & stats3 === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given </p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {stats1}</p>
      <p>neutral {stats2}</p>
      <p>bad {stats3}</p>    
      <p>all {stats4}</p>  
      <p>average {(stats1 - stats3) / stats4 * 100}</p>
      <p>positive {stats1 / stats4 * 100} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

    const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  return(
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>   

      <Statistics stats1={good}
        stats2={neutral}
        stats3={bad}
        stats4={total}
        stats5={(good - bad) / total * 100}
        stats6={good / total * 100} 
      />
    </div>
  )
}

export default App