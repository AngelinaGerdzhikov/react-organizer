import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { Task as TaskModel } from "../../models/tasks/task";
import { taskActions } from "../../store/task-slice";
import AddTask from './AddTask';
import Task from './Task';
import classes from './TaskList.module.css';

const TaskList = () => {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const addTaskHandler = () => {
    const task = new TaskModel('Add Task Reducer');
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
      <AddTask addTaskHandler={addTaskHandler}/>
    </ul>
  );
};

export default TaskList;
