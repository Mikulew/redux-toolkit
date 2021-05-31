import React from 'react';
import { selectActiveQuestion, next } from './quizSlice';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '@material-ui/core'

const Quiz = () => {
  const questions = useSelector(selectActiveQuestion);
  const dispatch = useDispatch();

  return <div>
    <p>{questions.content}</p>

    <Button
      onClick={() => dispatch(next())}
    >
      Next
    </Button>
  </div>
}

export default Quiz;
