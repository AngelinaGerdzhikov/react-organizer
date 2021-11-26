import { TaskStatus } from "./task-status.enum";
import ICalendarItem from "./calendar-item.interface";

export class Task implements ICalendarItem{
  constructor(
    public title: string,
    public due_date: Date,
    public status: TaskStatus,
    public readonly id: string,
  ) { }
}
