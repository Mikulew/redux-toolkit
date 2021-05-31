import React from 'react';
import { selectActiveQuestion, selectQuestions, next } from './quizSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core'

const Quiz = () => {
  const activeQuestion = useSelector(selectActiveQuestion);
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();
  const handleNext = () => questions[activeQuestion + 1] ? dispatch(next()) : console.log('finished!');

  return <div>
    <p>{activeQuestion + 1} / {questions.length}</p>
    <p>{questions[activeQuestion].content}</p>

    <Button
      onClick={handleNext}
    >
      Next
    </Button>
  </div>
}

export default Quiz;
