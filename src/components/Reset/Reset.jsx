import React from 'react';
import s from './Reset.module.css';

const Reset = ({onReset}) => {
  return (
    <div>
      <button className={s.resetBtn} onClick={onReset}>Reset</button>
    </div>
  )
}

export default Reset;
