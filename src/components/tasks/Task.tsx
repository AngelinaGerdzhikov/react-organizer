import TaskStatus from "./TaskStatus";
import classes from './Task.module.css';
import { Task as TaskModel } from "../../models/tasks/task";
import Button from '../UI/Button';

const Task:React.FC<{ task: TaskModel}> = (props) => {
  const deleteHandler = () => {
    
  }

  return (
    <section className={classes.task}>
      <TaskStatus status={props.task.status}/>
      <h4 className={classes['task__title']}>{props.task.title}</h4>
      <Button className={classes['task__delete-btn']} onClick={deleteHandler}>X</Button>
    </section>
  );
}

export default Task;