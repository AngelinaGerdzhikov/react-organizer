import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/store-hooks";
import { Task } from "../../models/tasks/task";
import taskSlice from "../../store/task-slice";
import Button from "../UI/Button";
import classes from "./AddTask.module.css";

const AddTask: React.FC<{ addTaskHandler: (title: string) => void }> = (props) => {
  // const dispatch = useAppDispatch();
  const [titleInputValue, setTitleInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const inputTitleRef = useRef<HTMLInputElement>(null);

  const addButtonClickHandler = () => {
    inputTitleRef.current?.focus();
    setIsInputActive(true);
  }

  const titleInputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setTitleInputValue(event.currentTarget.value);
  };

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (event.currentTarget.value.length > 0) {
        setTitleInputValue(event.currentTarget.value);
        props.addTaskHandler(event.currentTarget.value)
        // const newTask = new Task(event.currentTarget.value, new Date());
        // dispatch(taskSlice.actions.addTask({ ...newTask }));
        setTitleInputValue('');
        setIsInputActive(false);
      }
    }
  };

  const inputBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value.length > 0) { 
      props.addTaskHandler(event.currentTarget.value);
      // const newTask = new Task(event.currentTarget.value, new Date());
      // dispatch(taskSlice.actions.addTask({ ...newTask }));
      setTitleInputValue('');
    } 
    setIsInputActive(false);
  };

  return (
    <section className={classes['add-task']}>
      <Button className={`
          ${classes["add-task__button"]}
          ${isInputActive && classes['add-task__button--active']}
        `} onClick={addButtonClickHandler}>
        +
      </Button>
      <input
        className={classes["task__title-input"]}
        ref={inputTitleRef}
        type="text"
        value={titleInputValue}
        onChange={titleInputChangeHandler}
        onKeyDown={keyDownHandler}
        onBlur={inputBlurHandler}
      />
    </section>
  );
};

export default AddTask;
