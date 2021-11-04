import { TaskStatus } from "../models/tasks/task-status.enum";
import ICalendarItem from "../models/tasks/calendar-item.interface";

export interface TaskState {
  status: string,
  newTasks: any[],
  tasks: ICalendarItem[],
  taskHasBeenDeleted: boolean,
  taskIdsPerDate: {
    [yearMonthDay: string]: string[]
  }
}

export const INITIAL_TASK_STATE: TaskState = {
  status: 'idle',
  newTasks: [],
  taskHasBeenDeleted: false,
  tasks: [
    { id: 'task_0',
      title: "Code",
      date: new Date(Date.UTC(2021, 6, 25)).toUTCString(),
      dateKey: '2021625',
      status: TaskStatus.IN_PROGRESS
    },
    {
      id: 'task_1',
      title: "Bathe Chari",
      date: new Date(Date.UTC(2021, 6, 26)).toUTCString(),
      dateKey: '2021626',
      status: TaskStatus.TO_DO
    },
    {
      id: 'task_2',
      title: "Put Chari for Lunch Sleep",
      date: new Date(Date.UTC(2021, 6, 27)).toUTCString(),
      dateKey: '2021627',
      status: TaskStatus.COMPLETED
    },
    {
      id: 'task_3',
      title: "Get Tasks By Date",
      date: new Date(Date.UTC(2021, 6, 28)).toUTCString(),
      dateKey: '2021628',
      status: TaskStatus.COMPLETED
    },
    {
      id: 'task_4',
      title: "Fix Tasks",
      date: new Date(Date.UTC(2021, 6, 31)).toUTCString(),
      dateKey: '2021631',
      status: TaskStatus.COMPLETED
    }
  ],
  taskIdsPerDate: {
    '2021625': [ 'task_0' ],
    '2021626': [ 'task_1' ],
    '2021627': [ 'task_2' ],
    '2021628': [ 'task_3' ],
    '2021631': [ 'task_4' ]
  }
}

export const MOCK_TASKS = [
  { id: 'task_0',
      title: "Code",
      date: new Date(Date.UTC(2021, 6, 25)).toUTCString(),
      dateKey: '2021625',
      status: TaskStatus.IN_PROGRESS
    },
    {
      id: 'task_1',
      title: "Bathe Chari",
      date: new Date(Date.UTC(2021, 6, 26)).toUTCString(),
      dateKey: '2021626',
      status: TaskStatus.TO_DO
    },
    {
      id: 'task_2',
      title: "Put Chari for Lunch Sleep",
      date: new Date(Date.UTC(2021, 6, 27)).toUTCString(),
      dateKey: '2021627',
      status: TaskStatus.COMPLETED
    },
    {
      id: 'task_3',
      title: "Get Tasks By Date",
      date: new Date(Date.UTC(2021, 6, 28)).toUTCString(),
      dateKey: '2021628',
      status: TaskStatus.COMPLETED
    },
    {
      id: 'task_4',
      title: "Fix Tasks",
      date: new Date(Date.UTC(2021, 6, 31)).toUTCString(),
      dateKey: '2021631',
      status: TaskStatus.COMPLETED
    }
];