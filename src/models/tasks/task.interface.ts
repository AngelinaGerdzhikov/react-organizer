import { TaskStatus } from "./task-status.enum";

interface ITask {
  title: string,
  date: string,
  dateKey: string
  status: TaskStatus,
  readonly id: string
}

export default ITask;