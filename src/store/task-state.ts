import { Task } from "../models/tasks/task";
import { TaskStatus } from "../models/tasks/task-status.enum";

export interface TaskState {
  tasks: Task[]
}

export const INITIAL_TASK_STATE: TaskState = {
  tasks: [
    { id: 'task_0',
      title: "Code",
      date: new Date(2021, 6, 25).toUTCString(),
      status: TaskStatus.IN_PROGRESS
    },
    {
      id: 'task_1',
      title: "Bathe Chari",
      date: new Date(2021, 6, 26).toUTCString(),
      status: TaskStatus.TO_DO
    },
    {
      id: 'task_2',
      title: "Put Chari for Lunch Sleep",
      date: new Date(2021, 6, 27).toUTCString(),
      status: TaskStatus.COMPLETED
    },
    {
      id: 'task_2',
      title: "Get Tasks By Date",
      date: new Date(2021, 6, 28).toUTCString(),
      status: TaskStatus.COMPLETED
    }
  ]
}