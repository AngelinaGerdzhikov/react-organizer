import React from "react";
import { Task as TaskModel } from "../../models/tasks/task";
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
    const taskDate = new Date( props.year, props.month, props.dayOfMonth);
    dispatch(addTaskAsync({
        title,
        due_date: taskDate,
        status: { id: 1, title: 'TO_DO' },
      })
    );
  };

  const dropHandler = ( event: React.DragEvent<HTMLElement>, task?: TaskModel) => {
    const draggedTask: TaskModel = JSON.parse(event.dataTransfer.getData("transferData"));
    const newDueDate = new Date(props.year, props.month, props.dayOfMonth);

    dispatch(updateTaskAsync({ ...draggedTask, due_date: newDueDate }));
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
            <Draggable transferData={task}>
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
