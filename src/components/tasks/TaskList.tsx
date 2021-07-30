import { useAppDispatch } from "../../hooks/store-hooks";
import { Task as TaskModel } from "../../models/tasks/task";
import { taskActions } from "../../store/task-slice";
import AddTask from './AddTask';
import Task from './Task';
import classes from './TaskList.module.css';

const TaskList:React.FC<{ tasks: TaskModel[], year: number, month: number, dayOfMonth: number}> = (props) => {
  const dispatch = useAppDispatch();

  const addTaskHandler = (title: string) => {
    const taskDate = new Date(Date.UTC(props.year, props.month, props.dayOfMonth)).toUTCString();
    const task = new TaskModel(title, taskDate);
    dispatch(taskActions.addTask({ ...task}));
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
