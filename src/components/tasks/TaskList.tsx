import { Task as TaskType } from "../../models/tasks/task";
import { TaskStatus } from "../../models/tasks/task-status.enum";
import Task from "./Task";
import classes from './TaskList.module.css';
import Button from '../UI/Button';

const TaskList = () => {
  const tasks: TaskType[] = [
    new TaskType("Code", TaskStatus.IN_PROGRESS),
    new TaskType("Bathe Chari", TaskStatus.TO_DO),
    new TaskType("Put Chari for Lunch Sleep", TaskStatus.COMPLETED),
  ];

  const addTaskHandler = () => {
    
  }

  return (
    <ul className={classes['task-list']}>
      {tasks.map((task, taskIndex) => (
        <li key={taskIndex}>
          <Task task={task} />
        </li>
      ))}
      <Button className={classes['add-task']} onClick={addTaskHandler}>+</Button>
    </ul>
  );
};

export default TaskList;
