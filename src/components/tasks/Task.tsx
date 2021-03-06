import React, { useRef, useState } from "react";

import { Task as TaskModel } from "../../models/tasks/task";
import { TaskStatus as TaskStatusEnum } from "../../models/tasks/task-status.enum";
import { useAppDispatch } from "../../store/hooks/store-hooks";
import { deleteTaskAsync, updateTaskAsync } from "../../store/task-thunks";
import DeleteButton from "../UI/DeleteButton";
import DeleteTaskPrompt from "./DeleteTaskPrompt";
import classes from "./Task.module.css";
import TaskStatus from "./TaskStatus";

const Task: React.FC<{ task: TaskModel }> = (props) => {
  const dispatch = useAppDispatch();
  const [titleInputValue, setTitleInputValue] = useState(props.task.title);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const [isEditTitleActive, setIsEditTitleActive] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(true);
  const [isDeleteTaskModalVisible, setIsDeleteTaskModalVisible] =
    useState(false);
  // const [isBeingDragged, setIsBeingDragged] = useState(false);

  const toggleChangeStatusHandler = (isOpen?: boolean) => {
    if (isOpen === undefined) {
      setIsTitleVisible((visibility) => (visibility = !visibility));
    } else {
      setIsTitleVisible(!isOpen);
    }
  };

  const changeStatusHandler = (status: TaskStatusEnum) => {
    dispatch(
      updateTaskAsync({
        ...props.task,
        status: status,
      })
    );
    // dispatch(
    //   taskSlice.actions.updateTaskStatus({
    //     id: props.task.id,
    //     newStatus: status,
    //   })
    // );
  };

  const clickTitleHandler = () => {
    setIsEditTitleActive(true);
    setTimeout(() => {
      inputTitleRef.current?.focus();
    }, 100);
  };

  const titleInputChangeHandler = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setTitleInputValue(event.currentTarget.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputTitleRef.current?.value) {
      setTitleInputValue(event.currentTarget.value);
      setIsEditTitleActive(false);
      dispatch(
        updateTaskAsync({
          ...props.task,
          title: inputTitleRef.current?.value,
        })
      );
    }
  };

  const inputBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setIsEditTitleActive(false);
    if (inputTitleRef.current?.value) {
      dispatch(
        updateTaskAsync({
          ...props.task,
          title: inputTitleRef.current?.value,
        })
      );
    }
  };

  const showDeleteTaskModalHandler = () => {
    setIsDeleteTaskModalVisible(true);
  };

  const hideDeleteTaskModalHandler = () => {
    setIsDeleteTaskModalVisible(false);
  };

  const deleteHandler = () => {
    dispatch(deleteTaskAsync(props.task.id));
  };

  return (
    <section
      className={`
        ${classes.task}
      `}
    >
      <TaskStatus
        status={props.task.status}
        onToggleChangeStatus={toggleChangeStatusHandler}
        onChangeStatus={changeStatusHandler}
      />
      {!isEditTitleActive && isTitleVisible && (
        <h4 className={classes["task__title"]} onClick={clickTitleHandler}>
          {props.task.title}
        </h4>
      )}
      {isEditTitleActive && (
        <input
          className={classes["task__title-input"]}
          ref={inputTitleRef}
          id="task-title"
          type="text"
          value={titleInputValue}
          onChange={titleInputChangeHandler}
          onKeyDown={keyDownHandler}
          onBlur={inputBlurHandler}
        />
      )}
      <DeleteButton onClick={showDeleteTaskModalHandler} />
      {isDeleteTaskModalVisible && (
        <DeleteTaskPrompt
          taskTitle={props.task.title}
          onHidePrompt={hideDeleteTaskModalHandler}
          onDeleteTask={deleteHandler}
        />
      )}
    </section>
  );
};

export default Task;
