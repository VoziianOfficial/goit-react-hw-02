import React from 'react';
import s from './Options.module.css';

const Options = ({onLiveFeedback,}) => {
  return (
    <div className={s.containerBtn}>
      <button className={s.btnGood} onClick={() => onLiveFeedback('good')} >Good</button>
      <button className={s.btnNeutral} onClick={() => onLiveFeedback('neutral')}>Neutral</button>
      <button className={s.btnBad} onClick={() => onLiveFeedback('bad')}>Bad</button>
    </div>
  )
}

export default Options
