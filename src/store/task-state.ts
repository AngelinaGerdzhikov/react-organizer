import { Task } from "../models/tasks/task";
import { TaskStatus } from "../models/tasks/task-status.enum";

export interface TaskState {
  tasks: Task[]
}

export const INITIAL_TASK_STATE: TaskState = {
  tasks: [
    { id: 'task_0',
      title: "Code",
      status: TaskStatus.IN_PROGRESS
    },
    {
      id: 'task_1',
      title: "Bathe Chari",
      status: TaskStatus.TO_DO
    },
    {
      id: 'task_2',
      title: "Put Chari for Lunch Sleep",
      status: TaskStatus.COMPLETED
    }
  ]
}