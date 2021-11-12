import db from '../config/firebase';
import { ref, get, push, remove, update, child } from 'firebase/database';
import ICalendarItem from '../models/tasks/calendar-item.interface';
import { TaskStatus } from '../models/tasks/task-status.enum';
import { Task } from '../models/tasks/task';

const TASKS_PATH = 'tasks/';

export const getTasks = async (): Promise<ICalendarItem[]> => {
  const tasksRef = ref(db, TASKS_PATH);
  const loadedTasks: ICalendarItem[] = [];
  const snapshot = await get(tasksRef);

  if (snapshot.exists()) {
    const data = snapshot.val();

    for (const key in data) {
      loadedTasks.push({
        id: key,
        title: data[key].title,
        timestamp: data[key].timestamp,
        status: data[key].status,
      });
    }

    return loadedTasks;
  } else {
    return loadedTasks;
  }
}

export const addTask = async (
  title: string, date: Date, status: TaskStatus
): Promise<string> => {

  const newTaskKey = await push(child(ref(db), TASKS_PATH), {
    title,
    timestamp: date.toUTCString(),
    status
  }).key;

  if (newTaskKey) return newTaskKey;
  else throw new Error('Could not create task');
};

export const deleteTask = async (id: string): Promise<void> => {
  const taskRef = ref(db, TASKS_PATH + id);

  return remove(taskRef).catch(err => {
    throw err
  });
}

export const updateTask = async (task: Task): Promise<void> => {
  const taskRef = ref(db, TASKS_PATH + task.id);
  
  return update(taskRef, {
    title: task.title,
    status: task.status,
    timestamp: task.date.toUTCString()
  }).catch(err => {
    throw err;
  })
}