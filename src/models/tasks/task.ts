import { TaskStatus } from './task-status.enum';

export class Task {
  constructor(public title: string, public status?: TaskStatus) {
    this.title = title;
    this.status = status || TaskStatus.TO_DO;
  }
}