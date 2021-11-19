import ICalendarItem from '../models/tasks/calendar-item.interface';
import { Task } from '../models/tasks/task';
import { TaskStatus } from '../models/tasks/task-status.enum';
import { TASKS_API_PATH } from './config';

export const getTasksByWeek = async (year: number, week: number): Promise<ICalendarItem[]> => {
  const response = await fetch(`${TASKS_API_PATH}/year/${year}/week/${week}`);
  let tasks: ICalendarItem[] = [];
  
  if (response) {
    tasks = await response.json();
    return tasks;
  }

  return tasks;
}

export const addTask = async (
  title: string, due_date: Date, status: TaskStatus
): Promise<string> => {

  const response = await fetch(TASKS_API_PATH, {
    method: 'POST',
    body: JSON.stringify({
      title,
      due_date: due_date.toUTCString(),
      status_id: status.id
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  const newTask = await response.json();

  if (newTask) return newTask.id;
  else throw new Error('Could not create task');
};

export const deleteTask = async (id: string): Promise<void> => {
  const response = await fetch(`${TASKS_API_PATH}/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  return response.json()
  .then(() => {})
  .catch(err => { throw new Error(err.message) });
 
}

export const updateTask = async (task: Task): Promise<void> => {
  const response = await fetch(`${TASKS_API_PATH}/${task.id}`, {
    method: 'PUT',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({ ...task, status_id: task.status.id })
  });
  return response.json()
    .then(() => {})
    .catch(err => { throw new Error(err )});  
}