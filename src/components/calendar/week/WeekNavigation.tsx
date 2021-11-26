import React from "react";
import { useHistory } from "react-router-dom";
import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarWeek from "../../../models/calendar/calendar-week";
import { getYearFromStorage } from "../../../utility/local-storage-manager";
import CalendarNavigation from "../../UI/CalendarNavigation";
import classes from './WeekNavigation.module.css';

const WeekNavigation: React.FC<{ month: CalendarMonth; weekIndex: number }> = (
  props
) => {
  const history = useHistory();
  const week: CalendarWeek = props.month.monthDatesInWeeks[props.weekIndex];
  const { month, year } = props.month;

  const getPreviousWeekHandler = () => {
    const [updatedMonthNumber, updatedYearNumber] = CalendarMonth.getPreviousMonthData(month, year);
    const updatedYear = getYearFromStorage(updatedYearNumber);
    const updatedWeekNumber =
        updatedYear.calendarMonths[updatedMonthNumber].numberOfWeeksInMonth - 1;

    let url = ''

    // Month has previous weeks
    if (props.month.monthDatesInWeeks[props.weekIndex - 1]) {
      url = `/year/${year}/month/${month}/week/${props.weekIndex - 1}`;
    }

    // Month has no previous weeks and the dates in this week are only from this month
    if (props.weekIndex === 0 && week.firstDayOfWeek.month === week.days[6].month) {
      url = `/year/${updatedYearNumber}/month/${updatedMonthNumber}/week/${updatedWeekNumber}`;
    }

    // Month has no previous weeks but this week has dates from the previous month
    if (props.weekIndex === 0 && week.firstDayOfWeek.month !== week.days[6].month) {
      url = `/year/${updatedYearNumber}/month/${updatedMonthNumber}/week/${updatedWeekNumber - 1}`;
    }

    history.push(url);
  };

  const getNextWeekHandler = () => {
    const [updatedMonthNumber, updatedYearNumber] = CalendarMonth.getNextMonthData(month, year);
    getYearFromStorage(updatedYearNumber);

    let url = '';

    // Month has more weeks till the end of the month
    if (props.month.monthDatesInWeeks[props.weekIndex + 1]) {
      url = `/year/${year}/month/${month}/week/${props.weekIndex + 1}`;
    }

    // This is the last week of the month and it has dates only from this month
    if (week.firstDayOfWeek.month === week.days[6].month && !props.month.monthDatesInWeeks[props.weekIndex + 1]){
      url = `/year/${updatedYearNumber}/month/${updatedMonthNumber}/week/0`;
    }

    // This is the last week of the month and it has dates from the next month
    if (week.firstDayOfWeek.month !== week.days[6].month) {
      url = `/year/${updatedYearNumber}/month/${updatedMonthNumber}/week/1`;
    }   

    history.push(url);
  };

  const getDateRangeJSX = () => {
    const isWeekInSameMonth = week.days[0].month === week.days[6].month;
    const dateRange = `${week.days[0].dayOfMonth} - ${week.days[6].dayOfMonth}`;

    return (
      <h1 className={classes['week-nav__title']}>
        {`Week ${week.nthWeekOfMonthFullName}`}
        <span className={classes['week-nav__dates-holder']}>
          <span className={classes['week-nav__date-range']}>
            {dateRange}
          </span>
          <span className={`cursive ${classes['week-nav__month-range']}`}>
            {isWeekInSameMonth && week.days[0].monthName}
            {!isWeekInSameMonth &&
              <React.Fragment>
                {week.days[0].monthName}
                <span className={classes.hiphen}>-</span>
                {week.days[6].monthName}
              </React.Fragment>
            } 
          </span>
        </span>
      </h1>
    );
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
