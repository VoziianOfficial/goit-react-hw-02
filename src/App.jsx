import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import './App.module.css/App.module.css'

function App() {
  const [feedback, setFeedBack] = useState({
    good: 0,
	  neutral: 0,
	  bad: 0,
  });


   // Завантаженя стану з localStorage при завантажувані сторінки
  useEffect (() => {
    const saveFeedback = localStorage.getItem('feedback');
    if(saveFeedback) {
      setFeedBack(JSON.parse(saveFeedback));
    }
  },[]);

  // Збереження в localStorage при кожній зміні

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  },[feedback]);

  // Функція для оновлення стану відгуків
  const updateFeedback = (feedbackTyp) => {
    setFeedBack((prevState) => ({
      ...prevState,
      [feedbackTyp]: prevState[feedbackTyp] + 1,
    }));
  };

  // Обчислення загальної кількості відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Процент позитивних відгуків 

  const positivePercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  // функція для скиданя відгуків 
   const resetFeedback = () => {
    setFeedBack({
      good: 0,
      neutral: 0,
      bad: 0,
    })
   }

  return (
    <>
    <Description/>
    <Options 
    onLiveFeedback={updateFeedback}
    onReset ={resetFeedback}
    totalFeedback ={totalFeedback}
     />

    {totalFeedback > 0 ? (
      <Feedback 
      good={feedback.good} 
      neutral={feedback.neutral} 
      bad={feedback.bad}
      total={totalFeedback}
      positivePercentage={positivePercentage}
      />
    ) : (
      <Notification message="No feedback yet"/>
    )}
  

    </>
  )
}

export default App
