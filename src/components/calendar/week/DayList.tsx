import CalendarWeek from "../../../models/calendar/calendar-week";
import WeekdayToNameMap from "../../../models/calendar/weekday-to-name.map";
import classes from "./DayList.module.css";
import DayListItem from "./DayListItem";

const DayList: React.FC<{ week: CalendarWeek }> = (props) => {
  // const weekdayNamesJSX = () => {
  //   const weekNames: string[] = [];
  //   WeekdayToNameMap.forEach((value) => weekNames.push(value));
  //   return weekNames.map((weekdayName) => (
  //     <li>
  //       <h3>{weekdayName}</h3>
  //     </li>
  //   ));
  // };

  return (
    <section>
      {/* <nav className={classes["days-of-week-names"]}>
        <ul>{weekdayNamesJSX()}</ul>
      </nav> */}
      <ul className={classes.weekdays}>
        {props.week.days.map((day, dayIndex) => {
          return day && <DayListItem day={day} />          
        })}
      </ul>
    </section>
  );
};

export default DayList;
