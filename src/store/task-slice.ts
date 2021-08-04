import { createSlice } from '@reduxjs/toolkit';
import ICalendarItem from '../models/tasks/calendar-item.interface';
import { INITIAL_TASK_STATE } from './task-state';

const taskSlice = createSlice({
  name: 'task',
  initialState: INITIAL_TASK_STATE,
  reducers: { 
    addTask(state, action) {
      const newTask: ICalendarItem = { ...action.payload };
      state.tasks.push(newTask);

      if (state.taskIdsPerDate[newTask.dateKey]) {
        state.taskIdsPerDate[newTask.dateKey].push(newTask.id);
      } else {
        state.taskIdsPerDate[newTask.dateKey] = [ newTask.id ];
      }

    },
    removeTask(state, action) {
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload.id);
      const updatedTaskIdsPerDate = { ...state.taskIdsPerDate };
      
      if (updatedTaskIdsPerDate[action.payload.dateKey] ) {
        updatedTaskIdsPerDate[action.payload.dateKey] = updatedTaskIdsPerDate[action.payload.dateKey].filter(taskId => taskId !==action.payload.id )
      }
      return { ...state, tasks: updatedTasks, taskHasBeenDeleted: true, taskIdsPerDate: updatedTaskIdsPerDate };      
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
    },
    moveTask(state, action) {
      const taskIndexInTasks = state.tasks.findIndex(task => task.id === action.payload.task.id);
  
      if (taskIndexInTasks >= 0) {
        state.tasks[taskIndexInTasks].date = action.payload.targetDateString;
        state.tasks[taskIndexInTasks].dateKey = action.payload.targetDateKey;
      }

      const taskIndexInTasksIdsPerDate = state.taskIdsPerDate[action.payload.task.dateKey].findIndex(id => id === action.payload.task.id);

      if (taskIndexInTasksIdsPerDate >= 0) {
        state.taskIdsPerDate[action.payload.task.dateKey].splice(taskIndexInTasksIdsPerDate, 1);
        
        if (state.taskIdsPerDate[action.payload.targetDateKey]) {
          state.taskIdsPerDate[action.payload.targetDateKey].push(state.tasks[taskIndexInTasks].id);
        } else {
          state.taskIdsPerDate[action.payload.targetDateKey] = [state.tasks[taskIndexInTasks].id ];
        }
      } 
    },
    setTaskHasBeenDeleted(state, action) {
      const updatedTaskHasBeenDeleted = action.payload;
      return { ...state, taskHasBeenDeleted: updatedTaskHasBeenDeleted}
    }
  }
});

export const taskActions = taskSlice.actions;
export default taskSlice;