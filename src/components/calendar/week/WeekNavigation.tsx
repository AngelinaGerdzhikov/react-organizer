import React from "react";
import { useHistory } from "react-router-dom";
import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarWeek from "../../../models/calendar/calendar-week";
import { getYearFromStorage } from "../../../utility/local-storage-manager";
import CalendarNavigation from "../../UI/CalendarNavigation";

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
      const [updatedMonthNumber, updatedYearNumber] =
        CalendarMonth.getPreviousMonthData(month, year);
      const updatedYear = getYearFromStorage(updatedYearNumber);
      const updatedWeekNumber =
        updatedYear.calendarMonths[updatedMonthNumber].numberOfWeeksInMonth - 1;
      history.push(
        `/year/${updatedYearNumber}/month/${updatedMonthNumber}/week/${updatedWeekNumber}`
      );
    }
  };

  const getNextWeekHandler = () => {
    if (props.month.monthDatesInWeeks[props.weekIndex + 1]) {
      history.push(`/year/${year}/month/${month}/week/${props.weekIndex + 1}`);
    } else {
      const [updatedMonthNumber, updatedYearNumber] =
        CalendarMonth.getNextMonthData(month, year);
      const updatedYear = getYearFromStorage(updatedYearNumber);
      history.push(
        `/year/${updatedYear.yearNumber}/month/${updatedMonthNumber}/week/0`
      );
    }
  };

  const getDateRangeJSX = () => {
    const isWeekInSameMonth = week.days[0].month === week.days[6].month;

    if (!isWeekInSameMonth) {
      return (
        <h1>
          {week.days[0].dayOfMonth}
          <span className="cursive">{week.days[0].monthName}</span>
          -&nbsp;
          {week.days[6].dayOfMonth}
          <span className="cursive">{week.days[6].monthName}</span>
        </h1>
      );
    } else {
      return (
        <h1>
          {week.days[0].dayOfMonth} - {week.days[6].dayOfMonth}
          <span className="cursive"> {week.days[6].monthName}</span>
        </h1>
      );
    }
  };

  return (
    <CalendarNavigation
      onPreviousClick={getPreviousWeekHandler}
      onNextClick={getNextWeekHandler}
    >
      {getDateRangeJSX()}
    </CalendarNavigation>
  );
};

export default WeekNavigation;
