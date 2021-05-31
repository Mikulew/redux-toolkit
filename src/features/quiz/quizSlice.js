import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'quiz',
  initialState: {
    activeQuestion: 0,
    questions: [
      {
        id: 1,
        content: 'What is React?'
      },
      {
        id: 2,
        content: 'What is Redux?'
      },
      {
        id: 3,
        content: 'What is Vue?'
      }
    ]
  },
  reducers: {
    next: state => {
      state.activeQuestion += 1
    }
  }
});

export const selectQuestions = state => state.quiz.questions;

export const selectActiveQuestion = state => {
  const { questions, activeQuestion} = state.quiz;
  return questions[activeQuestion]
};

export const { next } = slice.actions;

export default slice.reducer;