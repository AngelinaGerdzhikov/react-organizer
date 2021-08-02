import { TaskStatus } from "./task-status.enum";
import ICalendarItem from "./calendar-item.interface";

export class Task implements ICalendarItem {
  dateKey: string;

  constructor(
    public title: string,
    public date: string,
    public status: TaskStatus = TaskStatus.TO_DO,
    public readonly id: string = new Date().toUTCString(),
  ) { 
    const taskDate = new Date(date);
    this.dateKey = `${taskDate.getFullYear()}${taskDate.getMonth()}${taskDate.getDate()}`;
  }
}
