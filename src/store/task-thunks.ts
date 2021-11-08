import { createAsyncThunk } from "@reduxjs/toolkit";
import ICalendarItem from "../models/tasks/calendar-item.interface";

import { Task } from "../models/tasks/task";
import { TaskStatus } from "../models/tasks/task-status.enum";

export function fetchTasks(startDate?: string, endDate?: string) {
  const query = `?orderBy="date"`;
  return fetch(
    `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks.json` + query
  );
}

export const fetchTasksAsync = createAsyncThunk<ICalendarItem[]>(
  "tasks/fetchTasks",
  async () => {
    const response = await fetchTasks();
    const data = await response.json();

    const loadedTasks: ICalendarItem[] = [];
    for (const key in data) {
      loadedTasks.push({
        id: key,
        title: data[key].title,
        timestamp: data[key].timestamp,
        status: data[key].status,
      });
    }
    return loadedTasks;
  }
);

export const addTaskAsync = createAsyncThunk<
  ICalendarItem,
  { title: string; date: Date; status: TaskStatus }
>(
  "tasks/addTask",
  async (task: { title: string; date: Date; status: TaskStatus }) => {
    const response = await fetch(
      `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks.json`,
      {
        method: "POST",
        body: JSON.stringify({
          ...task,
          date: task.date
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    return {
      id: data.name,
      title: task.title,
      timestamp: task.date.toUTCString(),
      status: task.status,
    } as ICalendarItem;
  }
);

export const deleteTaskAsync = createAsyncThunk<{ id: string }, string>(
  "tasks/deleteTask",
  async (taskId: string) => {
    await fetch(
      `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks/${taskId}.json`,
      {
        method: "DELETE",
      }
    );
    return { id: taskId };
  }
);

export const updateTaskAsync = createAsyncThunk<Task, Task>(
  "tasks/updateTask",
  async (task: Task) => {
    const response = await fetch(
      `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks/${task.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(task),
      }
    );

    const data = await response.json();

    return {
      id: data.id,
      title: task.title,
      timestamp: task.date.toUTCString(),
      status: task.status,
    } as Task;
  }
);
