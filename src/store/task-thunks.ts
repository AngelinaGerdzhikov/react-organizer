import { createAsyncThunk } from "@reduxjs/toolkit";

import ICalendarItem from "../models/tasks/calendar-item.interface";
import { Task } from "../models/tasks/task";
import { TaskStatus } from "../models/tasks/task-status.enum";
import { addTask, deleteTask, getTasksByWeek, updateTask } from "../services/task.service";

export const fetchTasksAsync = createAsyncThunk<
  ICalendarItem[],
  { year: number; week: number }
>(
  "tasks/fetchTasks",
  async ( week: { year: number;  week: number }) => {
    const tasks = await getTasksByWeek(week.year, week.week);
    return tasks || [];
  }
);

export const addTaskAsync = createAsyncThunk<
  ICalendarItem,
  { title: string; due_date: Date; status: TaskStatus }
>(
  "tasks/addTask",
  async (task: { title: string; due_date: Date; status: TaskStatus }) => {
    const taskKey = await addTask(task.title, task.due_date, task.status);
  
    return {
      id: taskKey,
      title: task.title,
      due_date: task.due_date,
      status: task.status,
    } as ICalendarItem;

  }
);

export const deleteTaskAsync = createAsyncThunk<{ id: string }, string>(
  "tasks/deleteTask",
  async (taskId: string) => {
    await deleteTask(taskId);
    return { id: taskId };
  }
);

export const updateTaskAsync = createAsyncThunk<Task, Task>(
  "tasks/updateTask",
  async (task: Task) => {
    await updateTask(task);

    return {
      id: task.id,
      title: task.title,
      due_date: task.due_date,
      status: task.status,
    } as Task;
  }
);