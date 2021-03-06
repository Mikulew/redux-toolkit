import React from 'react';
import {
  selectActiveQuestion,
  selectQuestions,
  selectFinished,
  selectPoints,
  selectMaxPoints,
  next,
  toggle,
  finish
} from './quizSlice';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { Button } from '@material-ui/core'

const Quiz = () => {
  const activeQuestion = useSelector(selectActiveQuestion);
  const finished = useSelector(selectFinished);
  const questions = useSelector(selectQuestions);
  const points = useSelector(selectPoints);
  const maxPoints = useSelector(selectMaxPoints);
  const dispatch = useDispatch();
  const handleNext = () => {
    if (finished) {
      return;
    }

    return questions[activeQuestion + 1] ? dispatch(next()) : dispatch(finish());
  };
  const handleToggle = answerIndex => () => { dispatch(toggle(answerIndex)) };

  return <div>
    {!finished && <>
      <p>{activeQuestion + 1} / {questions.length}</p>
      <p>{questions[activeQuestion].content}</p>
      <List>
        {questions[activeQuestion].answers.map((answer, index) =>
          <ListItem dense button onClick={handleToggle(index)} key={answer.id}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={answer.checked}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': answer.id }}
              />
            </ListItemIcon>
            <ListItemText id={answer.id} primary={answer.content}/>
          </ListItem>
        )}
      </List>

      <Button
        onClick={handleNext}
      >
        Next
      </Button>
    </>}
    
    {finished && <>
      <b>You score is: {points}/{maxPoints}</b>
    </>}
  </div>
}

export default Quiz;
