import CalendarDay from "../../../models/calendar/calendar-day";
import ICalendarItem from "../../../models/tasks/calendar-item.interface";
import { Task } from "../../../models/tasks/task";
import { useAppSelector } from "../../../store/hooks/store-hooks";
import TaskList from "../../tasks/TaskList";
import classes from "./DayListItem.module.css";

const DayListItem: React.FC<{ day: CalendarDay, tasks: Task[] }> = (props) => {
  const { year, month, dayOfMonth, dayOfWeekFullName } = props.day;
  const newTasks = useAppSelector(state => {
    return state.tasks.present.tasks.filter((task: ICalendarItem) => {
      const newTask = new Task(task.title, task.due_date, task.status, task.id);
      const taskDayOfWeek = new Date(newTask.due_date).getDay();
      return taskDayOfWeek === props.day.dayOfWeek;
    })
  });
  // const dispatch = useAppDispatch();
  // const dayTasks = useAppSelector(state => {
  //   const dayKey = `${year}${month}${dayOfMonth}`;
  //   const taskKeys = state.tasks.present.taskIdsPerDate[dayKey];
  //   return taskKeys && taskKeys.length > 0 && state.tasks.present.tasks.filter(task => taskKeys.includes(task.id) );    
  // });

 

  return (
    <li key={dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{dayOfWeekFullName}</h3>
      {/* <h5>{strings[0]}, {strings[1]}</h5> */}
      {/* {newTasks && newTasks.map(newTask => <div>{newTask.title}</div>)} */}
      <span className={classes.date}>{dayOfMonth}</span>
      <TaskList
        tasks={newTasks|| []}
        year={year}
        month={month}
        dayOfMonth={dayOfMonth}
      />
    </li>
  );
};

export default DayListItem;
