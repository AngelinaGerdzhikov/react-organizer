import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import ICalendarItem from '../models/tasks/calendar-item.interface';
import { Task } from '../models/tasks/task';
import { INITIAL_TASK_STATE, MOCK_TASKS } from './task-state';
import { addTaskAsync, deleteTaskAsync, fetchTasksAsync, updateTaskAsync } from './task-thunks';

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.newTasks = action.payload;
      })
      .addCase(fetchTasksAsync.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(addTaskAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.newTasks.push(action.payload);
      })
      .addCase(addTaskAsync.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(deleteTaskAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.newTasks = state.newTasks.filter(task => task.id !== action.payload.id);
      })
      .addCase(deleteTaskAsync.rejected, (state) => {
        state.status = 'failed';
      })

      .addCase(updateTaskAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const taskIndex = state.newTasks.findIndex(task =>
          task.id === action.payload.id);
          console.log(taskIndex);
        state.newTasks[taskIndex] = action.payload;
        console.log( `Updated task: ${JSON.stringify(state.newTasks[taskIndex])}`);
      })
      .addCase(updateTaskAsync.rejected, (state) => {
        state.status = 'failed';
      })
  }
});

export const taskActions = taskSlice.actions;
export default taskSlice;