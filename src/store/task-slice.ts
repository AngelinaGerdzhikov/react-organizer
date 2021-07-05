import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {  }
});

export const taskActions = taskSlice.actions;
export default taskSlice;