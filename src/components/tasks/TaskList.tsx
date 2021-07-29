import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { Task as TaskModel } from "../../models/tasks/task";
import { taskActions } from "../../store/task-slice";
import AddTask from './AddTask';
import Task from './Task';
import classes from './TaskList.module.css';

const TaskList:React.FC<{ tasks: TaskModel[], year: number, month: number, dayOfMonth: number}> = (props) => {
  const dispatch = useAppDispatch();

  const addTaskHandler = (title: string) => {
    const task = new TaskModel(title, new Date(props.year, props.month, props.dayOfMonth).toDateString());
    dispatch(taskActions.addTask({ 
      id: task.id,
      date: task.date,
      title: task.title,
      status: task.status
    }));
  }

  return (
    <ul className={classes['task-list']}>
      {props.tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
      <AddTask addTaskHandler={addTaskHandler}/>
    </ul>
  );
};

export default TaskList;
