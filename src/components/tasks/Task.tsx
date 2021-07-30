import { useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/store-hooks";
import { Task as TaskModel } from "../../models/tasks/task";
import taskSlice from "../../store/task-slice";
import Button from "../UI/Button";
import classes from "./Task.module.css";
import TaskStatus from "./TaskStatus";

const Task: React.FC<{ task: TaskModel }> = (props) => {
  const dispatch = useAppDispatch();
  const [titleInputValue, setTitleInputValue] = useState(props.task.title);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const [isEditTitleActive, setIsEditTitleActive] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  const toggleChangeStatusHandler = () => {
    setIsTitleVisible(visibility => (visibility = !visibility));
  }

  const changeStatusHandler = (status: string) => {
    dispatch(taskSlice.actions.updateTaskStatus({ id: props.task.id, newStatus: status}))
  }

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
    if (event.key === "Enter") {
      setTitleInputValue(event.currentTarget.value);
      setIsEditTitleActive(false);
      dispatch(
        taskSlice.actions.updateTaskTitle({
          id: props.task.id,
          title: inputTitleRef.current?.value,
        })
      );
    }
  };

  const inputBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setIsEditTitleActive(false);
    dispatch(
      taskSlice.actions.updateTaskTitle({
        id: props.task.id,
        title: event.currentTarget.value,
      })
    );
  };

  const deleteHandler = () => {
    dispatch(taskSlice.actions.removeTask({ id: props.task.id }));
  };

  return (
    <section className={classes.task}>
      <TaskStatus 
        status={props.task.status}
        onToggleChangeStatus={toggleChangeStatusHandler}
        onChangeStatus={changeStatusHandler}
        />
      {!isEditTitleActive && isTitleVisible &&(
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
      <Button className={classes["task__delete-btn"]} onClick={deleteHandler}>
        X
      </Button>
    </section>
  );
};

export default Task;
