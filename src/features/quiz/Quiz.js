import React from 'react';
import { selectActiveQuestion } from './quizSlice';
import { useSelector } from 'react-redux';

import { Button } from '@material-ui/core'

const Quiz = () => {
  const questions = useSelector(selectActiveQuestion);

  return <div>
    <p>{questions.content}</p>

    <Button>Next</Button>
  </div>
}

export default Quiz;
