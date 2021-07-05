import React from "react";
import { useHistory } from "react-router-dom";
import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarWeek from "../../../models/calendar/calendar-week";
import { getYearFromStorage } from "../../../utility/local-storage-manager";

const WeekNavigation: React.FC<{ month: CalendarMonth; weekIndex: number }> = (
  props
) => {
  const history = useHistory();
  const week: CalendarWeek = props.month.monthDatesInWeeks[props.weekIndex];
  const { month, year } = props.month;

  const getPreviousWeekHandler = () => {
    if (props.month.monthDatesInWeeks[props.weekIndex - 1]) {
      history.push(`/year/${year}/month/${month}/week/${props.weekIndex - 1}`);
    } else {
      const [updatedMonthNumber, updatedYearNumber] = CalendarMonth.getPreviousMonthData(month, year);
      const updatedYear = getYearFromStorage(updatedYearNumber);
      const updatedWeekNumber = updatedYear.calendarMonths[updatedMonthNumber].numberOfWeeksInMonth - 1;
      history.push(`/year/${updatedYearNumber}/month/${updatedMonthNumber}/week/${updatedWeekNumber}`);
    }
  };

  const getNextWeekhHandler = () => {
    if (props.month.monthDatesInWeeks[props.weekIndex + 1]) {
      history.push(`/year/${year}/month/${month}/week/${props.weekIndex + 1}`);
    } else {
      const [updatedMonthNumber, updatedYearNumber] = CalendarMonth.getNextMonthData(month, year);
      const updatedYear = getYearFromStorage(updatedYearNumber);
      history.push(`/year/${updatedYear.yearNumber}/month/${updatedMonthNumber}/week/0`);
    }
  };

  return (
    <nav>
      <button onClick={getPreviousWeekHandler}>{"<"}</button>
      <h1>
        {week.dateRange} {props.month.monthFullName}
      </h1>
      <button onClick={getNextWeekhHandler}>{">"}</button>
    </nav>
  );
};

export default WeekNavigation;
