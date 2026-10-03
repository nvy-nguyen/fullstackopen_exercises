import { useState } from 'react'

const Button = ({ onClick, text }) => 
  <button 
    onClick={onClick}>{text}
  </button>

const StatisticLine = ({ statName, statValue }) =>
  <tbody>
    <tr>
      <td>{statName}</td>
      <td>{statValue}</td>
    </tr>
  </tbody>

const Statistics = ({ goodCount, neutralCount, badCount, totalCount, averageCount, positiveCount }) => {
  if (goodCount === 0 & neutralCount === 0 & badCount === 0) {
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
      <table>
        <StatisticLine statName='good' statValue={goodCount} />
        <StatisticLine statName='neutral' statValue={neutralCount} />
        <StatisticLine statName='bad' statValue={badCount} />
        <StatisticLine statName='all' statValue={totalCount} />
        <StatisticLine statName='average' statValue={averageCount} />
        <StatisticLine statName='positive' statValue={positiveCount} />
      </table> 
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
      <Statistics goodCount={good}
        neutralCount={neutral}
        badCount={bad}
        totalCount={total}
        averageCount={(good - bad) / total * 100}
        positiveCount={String(good / total * 100) + ' %'}
      />
    </div>
  )
}

export default App