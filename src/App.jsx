import { useEffect, useState } from 'react';
import Description from './components/Description';
import Options from './components/Options';
import Feedback from './components/Feedback';
import Notification from './components/Notification';


function App() {
  const [feedback, setFeedBack] = useState({
    good: 0,
	  neutral: 0,
	  bad: 0,
  });

  // Функція для оновлення стану відгуків
  const updateFeedback = (feedbackTyp) => {
    setFeedBack((prevState) => ({
      ...prevState,
      [feedbackTyp]: prevState[feedbackTyp] + 1,
    }));
  };

  // Обчислення загальної кількості відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
    <Description/>
    <Options onLiveFeedback={updateFeedback} />

    {totalFeedback > 0 ? (
      <Feedback 
      good={feedback.good} 
      neutral={feedback.neutral} 
      bad={feedback.bad}
      total={totalFeedback}
      />
    ) : (
      <Notification message="No feedback yet"/>
    )}
    

    </>
  )
}

export default App
