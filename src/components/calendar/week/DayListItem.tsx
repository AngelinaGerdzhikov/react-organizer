import CalendarDay from "../../../models/calendar/calendar-day";
import ICalendarItem from "../../../models/tasks/calendar-item.interface";
import { Task } from "../../../models/tasks/task";
import { useAppSelector } from "../../../store/hooks/store-hooks";
import TaskList from "../../tasks/TaskList";
import classes from "./DayListItem.module.css";

const DayListItem: React.FC<{ day: CalendarDay }> = (props) => {
  const { year, month, dayOfMonth, dayOfWeekFullName } = props.day;
  const newTasks = useAppSelector(state => {
    return state.tasks.present.tasks.filter((task: ICalendarItem) => {
      const newTask = new Task(task.title, task.due_date, task.status, task.id);
      const taskDayOfWeek = new Date(newTask.due_date).getDay();
      return taskDayOfWeek === props.day.dayOfWeek;
    })
  }); 

  return (
    <li key={dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{dayOfWeekFullName}</h3>
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
