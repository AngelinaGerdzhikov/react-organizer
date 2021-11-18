import React, { useState } from "react";
import { ReactComponent as CancelledSvg } from "../../assets/icons/CANCELLED.svg";
import { ReactComponent as CompletedSvg } from "../../assets/icons/COMPLETED.svg";
import { ReactComponent as InProgressSvg } from "../../assets/icons/IN_PROGRESS.svg";
import { ReactComponent as MigratedSvg } from "../../assets/icons/MIGRATED.svg";
import { ReactComponent as ToDoSvg } from "../../assets/icons/TO_DO.svg";
import { TaskStatus as TaskStatusModel, TaskStatusTitle } from "../../models/tasks/task-status.enum";
import classes from "./TaskStatus.module.css";
import OutsideClickHandler from "../UI/OutsideClickHandler";

const TaskStatus: React.FC<{
  status: TaskStatusModel;
  onToggleChangeStatus: (isOpen?: boolean) => void;
  onChangeStatus: (status: TaskStatusModel) => void;
}> = (props) => {
  const [isChangeStatusOpen, setIsChangeStatusOpen] = useState(false);
  const { status } = props;
  const taskStatusesTitles = Object.keys(TaskStatusTitle);

  const toggleChangeStatusOptionHandler = () => {
    setIsChangeStatusOpen((status) => (status = !status));
    props.onToggleChangeStatus();
  };

  const outsideClickHandler = () => {
    setIsChangeStatusOpen(false);
    props.onToggleChangeStatus(false);
  }

  const changeStatusHandler = (status: TaskStatusModel) => {
    setIsChangeStatusOpen((status) => (status = !status));
    props.onChangeStatus(status );
    props.onToggleChangeStatus();
  }

  const statusSvgJSX = (statusTitle: string) => {
    return (
      <React.Fragment>
        {statusTitle === TaskStatusTitle.TO_DO && <ToDoSvg />}
        {statusTitle === TaskStatusTitle.IN_PROGRESS && <InProgressSvg />}
        {statusTitle === TaskStatusTitle.COMPLETED && <CompletedSvg />}
        {statusTitle === TaskStatusTitle.MIGRATED && <MigratedSvg />}
        {statusTitle === TaskStatusTitle.CANCELLED && <CancelledSvg />}
      </React.Fragment>
      // <React.Fragment>
      //   {status === TaskStatusModel.TO_DO && <ToDoSvg />}
      //   {status === TaskStatusModel.IN_PROGRESS && <InProgressSvg />}
      //   {status === TaskStatusModel.COMPLETED && <CompletedSvg />}
      //   {status === TaskStatusModel.MIGRATED && <MigratedSvg />}
      //   {status === TaskStatusModel.CANCELLED && <CancelledSvg />}
      // </React.Fragment>
    );
  };

  return (
    <OutsideClickHandler className={classes['outside-wrapper']} onOutsideClick={outsideClickHandler}>
      <div
        className={`
          ${classes["task-status"]}
          ${
            status.title === TaskStatusTitle.MIGRATED &&
            classes["task-status--migrated"]
          }
      `}
        onClick={toggleChangeStatusOptionHandler}
      >
        {statusSvgJSX(status.title)}
      </div>
      {isChangeStatusOpen && (
        <div className={classes["change-status"]}>
          {taskStatusesTitles.map((taskStatusTitle, taskStatusIndex) => {
            return (
              <div
                key={taskStatusIndex + 1}
                className={`
                  ${classes["task-status"]}
                  ${
                    taskStatusTitle === TaskStatusTitle.MIGRATED &&
                    classes["task-status--migrated"]
                  }
                  ${taskStatusTitle === status.title && classes["task-status--current"]}
                `}
                onClick={() => {
                  changeStatusHandler({ id: taskStatusIndex + 1, title: taskStatusTitle })
                }}
              >
                {statusSvgJSX(taskStatusTitle)}
              </div>
            );
          })}
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default TaskStatus;
