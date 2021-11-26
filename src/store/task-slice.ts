import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_TASK_STATE } from "./task-state";
import {
  addTaskAsync,
  deleteTaskAsync,
  fetchTasksAsync,
  updateTaskAsync,
} from "./task-thunks";

const taskSlice = createSlice({
  name: "task",
  initialState: INITIAL_TASK_STATE,
  reducers: { 
    setTaskHasBeenDeleted(state, action) {
      const updatedTaskHasBeenDeleted = action.payload;
      return { ...state, taskHasBeenDeleted: updatedTaskHasBeenDeleted };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = action.payload;
      })
      .addCase(fetchTasksAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(addTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks.push(action.payload);
      })
      .addCase(addTaskAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(deleteTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.payload.id
        );
        state.taskHasBeenDeleted = true;
      })
      .addCase(deleteTaskAsync.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(updateTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTaskAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const taskIndex = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        console.log(taskIndex);
        state.tasks[taskIndex] = action.payload;
        console.log(
          `Updated task: ${JSON.stringify(state.tasks[taskIndex])}`
        );
      })
      .addCase(updateTaskAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
