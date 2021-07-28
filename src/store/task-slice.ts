import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_TASK_STATE } from './task-state';

const taskSlice = createSlice({
  name: 'task',
  initialState: INITIAL_TASK_STATE,
  reducers: { 
    addTask(state, action) {
      const newTask = { ...action.payload };
      const updatedTasks = [ ...state.tasks];
      updatedTasks.push(newTask);
      return { ...state, tasks: updatedTasks };
    },
    removeTask(state, action) {
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload.id);
      return { ...state, tasks: updatedTasks };      
    },
    updateTaskTitle(state, action) {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
  
      if (taskIndex >= 0) {
        const task = state.tasks[taskIndex];
        const updatedTask = { ...task, title: action.payload.title };
        const updatedTasks = [ ...state.tasks];
        updatedTasks[taskIndex] = updatedTask;
        return { ...state, tasks: updatedTasks };
      }
      return { ...state };
    },
    updateTaskStatus(state, action) {
      const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
  
      if (taskIndex >= 0) {
        const task = state.tasks[taskIndex];
        const updatedTask = { ...task, status: action.payload.newStatus };
        const updatedTasks = [ ...state.tasks];
        updatedTasks[taskIndex] = updatedTask;
        return { ...state, tasks: updatedTasks };
      }
      return { ...state };
    }
  }
});

export const taskActions = taskSlice.actions;
export default taskSlice;