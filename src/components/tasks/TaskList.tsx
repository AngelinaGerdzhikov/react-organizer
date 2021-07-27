import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { Task as TaskModel } from "../../models/tasks/task";
import { TaskStatus } from "../../models/tasks/task-status.enum";
import { taskActions } from "../../store/task-slice";
import Button from '../UI/Button';
import classes from './TaskList.module.css';
import Task from './Task';

const TaskList = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const addTaskHandler = () => {
    const now = new Date();
    const task = new TaskModel(now.toUTCString(), 'Add Task Reducer', TaskStatus.TO_DO);
    dispatch(taskActions.addTask({ 
      id: task.id,
      title: task.title,
      status: task.status
    }));
  }

  return (
    <ul className={classes['task-list']}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
      <Button className={classes['add-task']} onClick={addTaskHandler}>+</Button>
    </ul>
  );
};

export default TaskList;
