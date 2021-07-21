import CalendarDay from "../../../models/calendar/calendar-day";
import classes from "./DayListItem.module.css";
import TaskList from "../../tasks/TaskList";

const DayListItem: React.FC<{ day: CalendarDay }> = (props) => {
  return (
    <li key={props.day.dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{props.day.dayOfWeekFullName}</h3>
      <span className={classes.date}>{props.day.dayOfMonth}</span>
      <TaskList />
    </li>
  );
};

export default DayListItem;
