import React from "react";

import ICalendarItem from "../../models/tasks/calendar-item.interface";
import { Task as TaskModel } from "../../models/tasks/task";
import { TaskStatus } from "../../models/tasks/task-status.enum";
import { useAppDispatch } from "../../store/hooks/store-hooks";
import { addTaskAsync, updateTaskAsync } from "../../store/task-thunks";
import DragAndDrop from "../UI/DragAndDrop";
import Draggable from "../UI/Draggable";
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

  const addTaskHandler = (title: string) => {
    const taskDate = new Date(
      Date.UTC(props.year, props.month, props.dayOfMonth)
    );
    // const task = new TaskModel(title, taskDate);
    dispatch(
      addTaskAsync({
        title,
        due_date: taskDate,
        status: { id: 1, title: 'TO_DO' },
      })
    );
  };

  const dragStartHandler = (event: React.DragEvent<HTMLElement>) => {
    const draggedTask: ICalendarItem = JSON.parse(
      event.dataTransfer.getData("transferData")
    );
    console.log("DRag start parent: ", draggedTask);
  };

  const dragEndHandler = (event: React.DragEvent<HTMLElement>) => {};

  const dropHandler = (
    event: React.DragEvent<HTMLElement>,
    task?: TaskModel
  ) => {
    const draggedTask: TaskModel = JSON.parse(
      event.dataTransfer.getData("transferData")
    );

    const date = new Date(props.year, props.month, props.dayOfMonth);
    // const targetDateString = task ? task.date : date.toUTCString();
    // const targetDateKey = task
    //   ? task.dateKey
    //   : `${props.year}${props.month}${props.dayOfMonth}`;

    // if (draggedTask.dateKey !== task.dateKey) {
    console.log(date.toUTCString());
    dispatch(
      updateTaskAsync({
        ...draggedTask,
        due_date: date,
      })
    );

    // dispatch(taskActions.moveTask({
    //   task: draggedTask,
    //   targetDateString,
    //   targetDateKey,
    // }))
    // }
    // const updatedTask = new TaskModel(draggedTask.title, )
    console.log("Dragged task", draggedTask);
  };

  return (
    <ul className={classes["task-list"]}>
      {props.tasks.length === 0 && (
        <li>
          <DragAndDrop onDrop={(e) => dropHandler(e)}></DragAndDrop>
        </li>
      )}
      {props.tasks.map((task) => (
        <li key={task.id}>
          <DragAndDrop onDrop={(e) => dropHandler(e, task)}>
            <Draggable
              transferData={task}
              onDragStart={dragStartHandler}
              onDragEnd={dragEndHandler}
            >
              <Task task={task} />
            </Draggable>
          </DragAndDrop>
        </li>
      ))}
      <AddTask addTaskHandler={addTaskHandler} />
    </ul>
  );
};

export default TaskList;
