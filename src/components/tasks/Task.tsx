import TaskStatus from "./TaskStatus";
import classes from "./Task.module.css";
import { Task as TaskModel } from "../../models/tasks/task";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import taskSlice from "../../store/task-slice";
import { useState, useRef } from "react";

const Task: React.FC<{ task: TaskModel }> = (props) => {
  const dispatch = useDispatch();
  const [titleInputValue, setTitleInputValue] = useState(props.task.title);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const [isEditTitleActive, setIsEditTitleActive] = useState(false);

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

  const inputBlurHandler = () => {
    setIsEditTitleActive(false);
    dispatch(
      taskSlice.actions.updateTaskTitle({
        id: props.task.id,
        title: inputTitleRef.current?.value,
      })
    );
  };

  const deleteHandler = () => {
    dispatch(taskSlice.actions.removeTask({ id: props.task.id }));
  };

  return (
    <section className={classes.task}>
      <TaskStatus status={props.task.status} />
      {!isEditTitleActive && (
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
