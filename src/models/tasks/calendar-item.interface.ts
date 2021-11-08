import { TaskStatus } from "./task-status.enum";

interface ICalendarItem {
  title: string,
  timestamp: string,
  // dateKey: string
  status: TaskStatus,
  readonly id: string
}

export default ICalendarItem;