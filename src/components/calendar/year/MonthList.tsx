import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarYear from "../../../models/calendar/calendar-year";
import classes from './MonthList.module.css';
import MonthListItem from "./MonthListItem";

const MonthList: React.FC<{ months: CalendarMonth[], year: CalendarYear }> = (props) => {
  return (
    <section className={classes.months}>
      <ul>
        {props.months.map((month, monthIndex) => {
          
          return <li key={monthIndex}><MonthListItem month={month} year={props.year}/></li>
        })}
      </ul>
    </section>
  )
}

export default MonthList;