import React from 'react'

const Options = ({onLiveFeedback}) => {
  return (
    <div>
      <button onClick={() => onLiveFeedback('good')} >Good</button>
      <button onClick={() => onLiveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLiveFeedback('bad')}>Bad</button>
    </div>
  )
}

export default Options
