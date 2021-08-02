import { TaskStatus } from "./task-status.enum";
import ITask from "./task.interface";

export class Task implements ITask {
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
