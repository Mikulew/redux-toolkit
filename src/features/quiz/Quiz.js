import React from 'react';
import { selectQuestions } from './quizSlice';
import { useSelector } from 'react-redux';

const Quiz = () => {
  const questions = useSelector(selectQuestions);
  return <div>
    {questions.map(question => <p key={question.id}>{question.content}</p>)}
  </div>
}

export default Quiz;
