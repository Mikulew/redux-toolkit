import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'quiz',
  initialState: {
    questions: [
      {
        content: 'What is React?'
      },
      {
        content: 'What is Redux?'
      },
      {
        content: 'What is Vue?'
      }
    ]
  }
});

export default slice.reducer;