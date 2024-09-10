import React from 'react';
import s from './Notification.module.css';
const Notification = ({message}) => {
  return (
    <div>
      <p className={s.notificationText}>{message}</p>
    </div>
  )
}

export default Notification
