import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../models/tasks/task";
import { TaskStatus } from "../models/tasks/task-status.enum";

export function fetchTasks() {
  return fetch(
    `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks.json`
  );
};

export const fetchTasksAsync = createAsyncThunk<Task[]>(
  'tasks/fetchTasks',
  async () => {
    const response = await fetch(
      `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks.json`
    );
    const data = await response.json();
    
    const loadedTasks: Task[] = [];
    for (const key in data) {
      loadedTasks.push( 
        {
          id: key,
          title: data[key].title,
          date: data[key].date,
          status: data[key].status
        } as Task
      ); 
    }
    return loadedTasks;
  }
);

export const addTaskAsync = createAsyncThunk<
  Task, { title: string, date: string, status: TaskStatus}>(
  'tasks/addTask',
  async (task: { title:string, date: string, status: TaskStatus}) => {
    const response = await fetch(
      `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks.json`,
      {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const data = await response.json();
    return {
      id: data.name,
        title: task.title,
        date: task.date,
        status: task.status
      } as Task;
  }
);

export const deleteTaskAsync = createAsyncThunk<
  { id: string}, string >(
  'tasks/deleteTask',
  async (taskId: string) => {
    const response = await fetch(
      `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks/${taskId}.json`,
      {
        method: 'DELETE'
      }
    );
    return { id: taskId };
  }
);

export const updateTaskAsync = createAsyncThunk<
  Task, Task >(
  'tasks/updateTask',
  async (task: Task) => {
    const response = await fetch(
      `https://react-organizer-7a62e-default-rtdb.firebaseio.com/tasks/${task.id}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(task)
      }
    );

    const data = await response.json();
    
    return {
      id: data.id,
      title: task.title,
      date: task.date,
      status: task.status
    } as Task;
  }
);