import CalendarWeek from "../../../models/calendar/calendar-week";
import classes from './DayList.module.css';

const DayList: React.FC<{ week: CalendarWeek }> = (props) => {
  return (
    <section>
      <nav className={classes["days-of-week-names"]}>
        <ul>
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tueday</li>
          <li>Wednsday</li>
          <li>Thursday</li>
          <li>Friday</li>
          <li>Saturday</li>
        </ul>
      </nav>
      <ul>
        {props.week.days.map((day, dayIndex) => {
          if (day) {
            return <li key={dayIndex}>{day.dayOfMonth} {day.monthName}</li>;
          }

          return "";
        })}
      </ul>
    </section>
  );
};

export default DayList;
