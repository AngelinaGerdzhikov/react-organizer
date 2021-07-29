import { TaskStatus } from "./task-status.enum";

export class Task {

  constructor(
    public title: string,
    public date: string,
    public status: TaskStatus = TaskStatus.TO_DO,
    public readonly id: string = new Date().toUTCString(),
  ) { }
}
