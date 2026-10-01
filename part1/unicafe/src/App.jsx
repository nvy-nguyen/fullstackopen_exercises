import { useState } from 'react'


const Buttons = ({ onClick, text }) => 
  <button 
    onClick={onClick}>{text}
  </button>


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
       <Buttons onClick={handleGood} text='good'/>
       <Buttons onClick={handleNeutral} text='neutral'/>
       <Buttons onClick={handleBad} text='bad'/>   
       <h1>statistics</h1>
       <p>good {good}</p>
       <p>neutral {neutral}</p>
       <p>bad {bad}</p>    
    </div>
  )
}

export default App