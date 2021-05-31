import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'quiz',
  initialState: {
    activeQuestion: 0,
    questions: [
      {
        id: 1,
        content: 'What is React?',
        answers: [
          { id: 1, content: 'Backend\'s Framework', checked: false },
          { id: 2, content: 'UI library', checked: false },
          { id: 3, content: 'Testing library', checked: false },
        ]
      },
      {
        id: 2,
        content: 'What is Redux?',
        answers: [
          { id: 1, content: 'Backend\'s Framework', checked: false },
          { id: 2, content: 'React\'s state management', checked: false },
          { id: 3, content: 'Testing library', checked: false },
        ]
      },
      {
        id: 3,
        content: 'What is Vue?',
        answers: [
          { id: 1, content: 'Backend\'s Framework', checked: false },
          { id: 2, content: 'UI library', checked: false },
          { id: 3, content: 'Testing library', checked: false },
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
    }
  }
});

export const selectQuestions = state => state.quiz.questions;

export const selectActive = state => state.quiz.questions;

export const selectActiveQuestion = state => state.quiz.activeQuestion;

export const { next, toggle } = slice.actions;

export default slice.reducer;