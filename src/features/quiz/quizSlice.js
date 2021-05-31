import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'quiz',
  initialState: {
    activeQuestion: 0,
    isFinished: false,
    questions: [
      {
        id: 1,
        content: 'What is React?',
        answers: [
          { id: 1, content: 'Backend\'s Framework', checked: false, points: 0 },
          { id: 2, content: 'UI library', checked: false, points: 1 },
          { id: 3, content: 'Testing library', checked: false, points: 0 },
        ]
      },
      {
        id: 2,
        content: 'What is Redux?',
        answers: [
          { id: 1, content: 'Backend\'s Framework', checked: false, points: 0 },
          { id: 2, content: 'React\'s state management', checked: false, points: 1 },
          { id: 3, content: 'Testing library', checked: false, points: 0 },
        ]
      },
      {
        id: 3,
        content: 'What is Vue?',
        answers: [
          { id: 1, content: 'Backend\'s Framework', checked: false, points: 0 },
          { id: 2, content: 'UI library', checked: false, points: 1 },
          { id: 3, content: 'Testing library', checked: false, points: 0 },
        ]
      }
    ]
  },
  reducers: {
    next: state => {
      state.activeQuestion += 1
    },
    toggle: (state, action) => {
      const question = state.questions[state.activeQuestion];
      question.answers[action.payload].checked = !question.answers[action.payload].checked;
    },
    finish: state => {
      state.isFinished = true
    }
  }
});

export const selectQuestions = state => state.quiz.questions;

export const selectActive = state => state.quiz.questions;

export const selectActiveQuestion = state => state.quiz.activeQuestion;

export const selectFinished = state => state.quiz.isFinished;

export const selectMaxPoints = state => {
  let maxPoints = 0;

  state.quiz.questions.forEach(question => {
    maxPoints += question.answers.filter(answer => answer.points > 0).length;
  });

  return maxPoints;
}

export const selectPoints = state => {
  let points = 0;

  state.quiz.questions.forEach(question => {
    points += question.answers.filter(answer => answer.points > 0 && answer.checked).length;
  });

  return points;
}

export const { next, toggle, finish } = slice.actions;

export default slice.reducer;