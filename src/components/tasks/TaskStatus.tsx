import React from "react";
import { TaskStatus as TaskStatusEnum }from "../../models/tasks/task-status.enum";
import classes from './TaskStatus.module.css';
import { ReactComponent as ToDoSvg } from '../../assets/icons/TO_DO.svg';
import { ReactComponent as InProgressSvg } from '../../assets/icons/IN_PROGRESS.svg';
import { ReactComponent as CompletedSvg } from '../../assets/icons/COMPLETED.svg';
import { ReactComponent as MigratedSvg } from '../../assets/icons/MIGRATED.svg';
import { ReactComponent as CancelledSvg } from '../../assets/icons/CANCELLED.svg';

const TaskStatus: React.FC<{ status: TaskStatusEnum}> = (props) => {
  const { status } = props;

  const toggleChangeStatusOptionHandler = () => {

  }

  return (
    <React.Fragment>
      <div className={classes['task-status']} onClick=
        {toggleChangeStatusOptionHandler}>
          {status === TaskStatusEnum.TO_DO && <ToDoSvg />}
          {status === TaskStatusEnum.IN_PROGRESS && <InProgressSvg />}
          {status === TaskStatusEnum.COMPLETED && <CompletedSvg />}
          {status === TaskStatusEnum.MIGRATED && <MigratedSvg />}
          {status === TaskStatusEnum.CANCELLED && <CancelledSvg />}
      </div>
  {/* <div
    *ngIf="changeStatusOpened"
    @slideInFromLeft
    @slideOutToLeft
    class="change-status"
  >
    <div 
      *ngFor="let taskStatus of taskStatuses"
      class="task-status"
      [class.task-status--migrated]="taskStatus === 'MIGRATED'"
      [class.task-status--current]="status === taskStatus"
      (click)="changeStatus(taskStatus)">
      <svg-icon src="assets/icons/{{taskStatus}}.svg"></svg-icon>
    </div> */}

    </React.Fragment>
  );
}

export default TaskStatus;