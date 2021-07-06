import classes from "./WeekListItem.module.css";
import CalendarWeek from "../../../models/calendar/calendar-week";

const WeekListItem: React.FC<{ week: CalendarWeek }> = (props) => {
  return (
    <ul className={classes.week}>
      {/* <li style={{width: `${props.offset}px`}} className={classes.offset}></li> */}
      {props.week.days.map((day, dayIndex) => {   
        const isDayInThisMonth = day.month === props.week.month;

        if (day) {
          return (
            <li
              key={dayIndex}
              className={`
                ${classes.weekday}
                ${day.isWeekend && classes.weekend}
                ${day.dayOfWeekFullName.toLowerCase()}
                ${isDayInThisMonth && classes['current-month']}`}
            >
              <div className={classes["weekday-date"]}>
                {day.dayOfMonth}
              </div>
            </li>
          );
        }

        return '';
      })}
    </ul>
  );
};

export default WeekListItem;
