import CalendarMonth from "../../../models/calendar/calendar-month";
import classes from "./MonthListItem.module.css";
import { Link } from "react-router-dom";
import CalendarYear from "../../../models/calendar/calendar-year";

const MonthListItem: React.FC<{ month: CalendarMonth, year: CalendarYear }> = (props) => {
  return (
    <section className={classes.month}>
      <h3 className={`${classes['month-name']} cursive`}>{props.month.monthFullName}</h3>
      <h5>{props.month.numberOfDaysInMonth} days</h5>
      <Link to={`/year/${props.year.yearNumber}/month/${props.month.month}`} className='btn'>
        View Month
      </Link>
    </section>
  );
};

export default MonthListItem;
