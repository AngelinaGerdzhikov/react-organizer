import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { useAppDispatch } from "../../hooks/store-hooks";
import { Task as TaskModel } from "../../models/tasks/task";
import { taskActions } from "../../store/task-slice";
import AddTask from "./AddTask";
import Task from "./Task";
import classes from "./TaskList.module.css";

const TaskList: React.FC<{
  tasks: TaskModel[];
  year: number;
  month: number;
  dayOfMonth: number;
}> = (props) => {
  const dispatch = useAppDispatch();

  const [isBeingDraggedOver, setIsBeingDraggedOver] = useState(false);

  const addTaskHandler = (title: string) => {
    const taskDate = new Date(
      Date.UTC(props.year, props.month, props.dayOfMonth)
    ).toUTCString();
    const task = new TaskModel(title, taskDate);
    dispatch(taskActions.addTask({ ...task }));
  };

  const dragEnterHandler = (event: React.DragEvent<HTMLUListElement>) => {
    setIsBeingDraggedOver(true);
    event.preventDefault();
    console.log("Drag enter");
  };
  
  // const dragOverHandler = (event: React.DragEvent<HTMLUListElement>) => {
  //   setIsBeingDraggedOver(true);
  //   event.preventDefault();
  //   console.log("Drag over");
  // };
  
  const dragLeaveHandler = (event: React.DragEvent<HTMLUListElement>) => {
    setIsBeingDraggedOver(false);
    console.log("Drag leave");
  };
  
  const dropHandler = (event: React.DragEvent<HTMLUListElement>) => {
    setIsBeingDraggedOver(false);

    // get the draggable element
    const id = event.dataTransfer.getData('text/plain');
    console.log("Drop", id);

    // add it to the drop target
    // event.currentTarget.appendChild(draggable);

    // display the draggable element
    // draggable.classList.remove('hide');
  };

  return (
    <ul
      className={`
        ${classes["task-list"]}
        ${isBeingDraggedOver && classes['is-being-dragged-over']}
      `}
      onDragEnter={dragEnterHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
    >
      {props.tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
      <AddTask addTaskHandler={addTaskHandler} />
    </ul>
  );
};

export default TaskList;
