import React from 'react';
import s from './Feedback.module.css';

const Feedback = ({good, neutral, bad, total,positivePercentage}) => {
  return (
    <div className={s.feedbackContainer}>
      <p className={s.good}>Good: {good}</p>
      <p className={s.neutral}>Neutral: {neutral}</p>
      <p className={s.bad}>Bad: {bad}</p>
      <p className={s.total}>Total:{total}</p>
      <p className={s.positive}>Positive:{positivePercentage}%</p>
    </div>
  )
}

export default Feedback;
