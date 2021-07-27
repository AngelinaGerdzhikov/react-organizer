import { TaskStatus } from "./task-status.enum";

export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public status: TaskStatus = TaskStatus.TO_DO
  ) { }
}
