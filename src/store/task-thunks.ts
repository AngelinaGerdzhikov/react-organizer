import { createAsyncThunk } from "@reduxjs/toolkit";

import ICalendarItem from "../models/tasks/calendar-item.interface";
import { Task } from "../models/tasks/task";
import { TaskStatus } from "../models/tasks/task-status.enum";
import { addTask, deleteTask, getTasks, updateTask } from "../services/task.service";

export const fetchTasksAsync = createAsyncThunk<ICalendarItem[]>(
  "tasks/fetchTasks",
  async () => {
    const tasks = await getTasks();
    return tasks || [];
  }
);

export const addTaskAsync = createAsyncThunk<
  ICalendarItem,
  { title: string; date: Date; status: TaskStatus }
>(
  "tasks/addTask",
  async (task: { title: string; date: Date; status: TaskStatus }) => {
    const taskKey = await addTask(task.title, task.date, task.status);
  
    return {
      id: taskKey,
      title: task.title,
      timestamp: task.date.toUTCString(),
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
      timestamp: task.date.toUTCString(),
      status: task.status,
    } as Task;
  }
);