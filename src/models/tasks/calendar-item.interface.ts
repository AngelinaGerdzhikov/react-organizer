import { TaskStatus } from "./task-status.enum";

interface ICalendarItem {
  title: string,
  due_date: Date,
  status: TaskStatus,
  readonly id: string
}

export default ICalendarItem;