import React from 'react'

const Feedback = ({good, neutral, bad, total,}) => {
    const positivePercentage = total > 0 ? ((good / total) * 100).toFixed(2) : 0;
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
      <p>Positive:{positivePercentage}</p>
    </div>
  )
}

export default Feedback;
