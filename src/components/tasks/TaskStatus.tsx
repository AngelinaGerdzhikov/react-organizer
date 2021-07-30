import React, { useState } from "react";
import { ReactComponent as CancelledSvg } from "../../assets/icons/CANCELLED.svg";
import { ReactComponent as CompletedSvg } from "../../assets/icons/COMPLETED.svg";
import { ReactComponent as InProgressSvg } from "../../assets/icons/IN_PROGRESS.svg";
import { ReactComponent as MigratedSvg } from "../../assets/icons/MIGRATED.svg";
import { ReactComponent as ToDoSvg } from "../../assets/icons/TO_DO.svg";
import { TaskStatus as TaskStatusEnum } from "../../models/tasks/task-status.enum";
import classes from "./TaskStatus.module.css";

const TaskStatus: React.FC<{
  status: TaskStatusEnum;
  onToggleChangeStatus: () => void;
  onChangeStatus: (status: string) => void;
}> = (props) => {
  const [isChangeStatusOpen, setIsChangeStatusOpen] = useState(false);
  const { status } = props;
  const taskStatuses = Object.keys(TaskStatusEnum);

  const toggleChangeStatusOptionHandler = () => {
    setIsChangeStatusOpen((status) => (status = !status));
    props.onToggleChangeStatus();
  };

  const changeStatusHandler = (status: string) => {
    setIsChangeStatusOpen((status) => (status = !status));
    props.onChangeStatus(status);
    props.onToggleChangeStatus();
  }

  const statusSvgJSX = (status: string) => {
    return (
      <React.Fragment>
        {status === TaskStatusEnum.TO_DO && <ToDoSvg />}
        {status === TaskStatusEnum.IN_PROGRESS && <InProgressSvg />}
        {status === TaskStatusEnum.COMPLETED && <CompletedSvg />}
        {status === TaskStatusEnum.MIGRATED && <MigratedSvg />}
        {status === TaskStatusEnum.CANCELLED && <CancelledSvg />}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div
        className={`
          ${classes["task-status"]}
          ${
            status === TaskStatusEnum.MIGRATED &&
            classes["task-status--migrated"]
          }
      `}
        onClick={toggleChangeStatusOptionHandler}
      >
        {statusSvgJSX(status)}
      </div>
      {isChangeStatusOpen && (
        <div className={classes["change-status"]}>
          {taskStatuses.map((taskStatus, taskStatusIndex) => {
            return (
              <div
                key={taskStatusIndex}
                className={`
                  ${classes["task-status"]}
                  ${
                    taskStatus === TaskStatusEnum.MIGRATED &&
                    classes["task-status--migrated"]
                  }
                  ${taskStatus === status && classes["task-status--current"]}
                `}
                onClick={() => changeStatusHandler(taskStatus)}
              >
                {statusSvgJSX(taskStatus)}
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default TaskStatus;
