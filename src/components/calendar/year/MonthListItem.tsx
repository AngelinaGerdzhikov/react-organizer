import CalendarMonth from "../../../models/calendar/calendar-month";
import classes from "./MonthListItem.module.css";
import { Link } from "react-router-dom";
import CalendarYear from "../../../models/calendar/calendar-year";

const MonthListItem: React.FC<{ month: CalendarMonth, year: CalendarYear }> = (props) => {
  return (
    <p className={classes.month}>
      {props.month.monthFullName} / {props.month.numberOfDaysInMonth} days
      <Link to={`/year/${props.year.yearNumber}/month/${props.month.month}`} className='btn'>
        View Month
      </Link>
    </p>
  );
};

export default MonthListItem;
