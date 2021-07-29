import CalendarDay from "../../../models/calendar/calendar-day";
import classes from "./DayListItem.module.css";
import TaskList from "../../tasks/TaskList";
import { Task } from "../../../models/tasks/task";

const DayListItem: React.FC<{ day: CalendarDay, tasks: Task[] }> = (props) => {
  const { year, month, dayOfMonth } = props.day;

  return (
    <li key={props.day.dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{props.day.dayOfWeekFullName}</h3>
      <span className={classes.date}>{props.day.dayOfMonth}</span>
      <TaskList tasks={props.tasks} year={year} month={month} dayOfMonth={dayOfMonth} />
    </li>
  );
};

export default DayListItem;
