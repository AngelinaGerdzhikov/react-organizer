import { TaskStatus } from "./task-status.enum";
import ICalendarItem from "./calendar-item.interface";

export class Task {
  date: Date = new Date();

  constructor(
    public title: string,
    public timestamp: string,
    public status: TaskStatus = TaskStatus.TO_DO,
    public readonly id: string = new Date().toUTCString(),
  ) { 
    this.date = new Date(timestamp);
  }
}
