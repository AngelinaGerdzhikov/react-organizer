import CalendarWeek from "../../../models/calendar/calendar-week";
import classes from "./DayList.module.css";
import DayListItem from "./DayListItem";

const DayList: React.FC<{ week: CalendarWeek }> = (props) => {
  return (
    <section>
      <ul className={classes.weekdays}>
        {props.week.days.map((day, dayIndex) => {
          return day && <DayListItem day={day} />          
        })}
      </ul>
    </section>
  );
};

export default DayList;
