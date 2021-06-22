import classes from "./WeekListItem.module.css";
import CalendarWeek from "../../../models/calendar/calendar-week";

const WeekListItem: React.FC<{ week: CalendarWeek, offset: number }> = (props) => {
  return (
    <ul className={classes.week}>
      <li style={{width: `${props.offset}px`}} className={classes.offset}></li>
      {props.week.days.map((day, dayIndex) => {        
        return (
          <li
            key={dayIndex}
            className={`
              ${classes.weekday}
              ${day.isWeekend && classes.weekend}
              ${day.dayOfWeekFullName.toLowerCase()}`}
          >
            <div className={classes["weekday-date"]}>
              {day.dayOfMonth}
              {day.dayOfWeekFullName}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default WeekListItem;
