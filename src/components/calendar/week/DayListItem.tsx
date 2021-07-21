import CalendarDay from "../../../models/calendar/calendar-day";
import classes from "./DayListItem.module.css";

const DayListItem: React.FC<{ day: CalendarDay }> = (props) => {
  return (
    <li key={props.day.dayOfMonth} className={classes.day}>
      <h3 className={`${classes.title} cursive`}>{props.day.dayOfWeekFullName}</h3>
      <span className={classes.date}>{props.day.dayOfMonth}</span>
      <ul className={classes['task-list']}>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </li>
  );
};

export default DayListItem;
