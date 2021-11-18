import ICalendarItem from "../models/tasks/calendar-item.interface";

export interface TaskState {
  status: string,
  tasks: ICalendarItem[],
  taskHasBeenDeleted: boolean
}

export const INITIAL_TASK_STATE: TaskState = {
  status: 'idle',
  tasks: [],
  taskHasBeenDeleted: false,
};
