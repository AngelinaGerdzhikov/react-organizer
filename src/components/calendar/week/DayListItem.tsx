import CalendarDay from "../../../models/calendar/calendar-day";
import { Task } from "../../../models/tasks/task";
import TaskList from "../../tasks/TaskList";
import classes from "./DayListItem.module.css";

const DayListItem: React.FC<{ day: CalendarDay; tasks: Task[] }> = (props) => {
  const { year, month, dayOfMonth, dayOfWeekFullName } = props.day;

  return (
    <li key={dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{dayOfWeekFullName}</h3>
      <span className={classes.date}>{dayOfMonth}</span>
      <TaskList
        tasks={props.tasks}
        year={year}
        month={month}
        dayOfMonth={dayOfMonth}
      />
    </li>
  );
};

export default DayListItem;
