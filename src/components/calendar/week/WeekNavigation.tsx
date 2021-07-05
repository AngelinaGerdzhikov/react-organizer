import React from "react";
import { useHistory } from "react-router-dom";
import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarWeek from "../../../models/calendar/calendar-week";

const WeekNavigation:React.FC<{ month: CalendarMonth, weekIndex: number}> = (props) => {
  const history = useHistory();
  const week: CalendarWeek = props.month.monthDatesInWeeks[props.weekIndex];

  const getPreviousWeekHandler = () => {
    if (props.month.monthDatesInWeeks[props.weekIndex - 1]) {
      history.push(`/year/${props.month.year}/month/${props.month.month}/week/${props.weekIndex - 1}`)
    } else if ((props.weekIndex - 1) < 0) {
      const [updatedMonth, updatedYear] = CalendarMonth.getPreviousMonthData(props.month.month, props.month.year);
      const prevMonth = new CalendarMonth(updatedMonth, updatedYear);
      history.push(`/year/${updatedYear}/month/${updatedMonth}/week/${+prevMonth.numberOfWeeksInMonth - 1}`);
    }
  };

  const getNextWeekhHandler = () => {  };

  return (
    <nav>
      <button onClick={getPreviousWeekHandler}>{"<"}</button>
      <h1>
        {week.dateRange} {props.month.monthFullName}
      </h1>
      <button onClick={getNextWeekhHandler}>{">"}</button>
    </nav>
  )
}

export default WeekNavigation;