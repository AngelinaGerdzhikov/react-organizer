import { TaskStatus } from "./task-status.enum";
import ICalendarItem from "./calendar-item.interface";

export class Task {
  // dateKey: string;
  date: Date = new Date();

  constructor(
    public title: string,
    public timestamp: string,
    public status: TaskStatus = TaskStatus.TO_DO,
    public readonly id: string = new Date().toUTCString(),
  ) { 
    const date = new Date(timestamp);
    // this.dateKey = `${taskDate.getFullYear()}${taskDate.getMonth()}${taskDate.getDate()}`;
  }
}
