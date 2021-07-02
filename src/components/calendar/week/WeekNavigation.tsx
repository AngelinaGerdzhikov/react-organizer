/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/store-hooks";
import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarWeek from "../../../models/calendar/calendar-week";
import { calendarActions } from "../../../store/calendar-slice";

interface RouteParams {
  year: string,
  month: string,
  week: string
}

const WeekNavigation:React.FC<{ month: CalendarMonth}> = (props) => {
  const dispatch = useAppDispatch();
  const params = useParams<RouteParams>();
  const currentYearNumberParam = +params.year;
  const currentMonthNumberParam = +params.month;
  const currentWeekNumberParam = +params.week;
  const week: CalendarWeek = props.month.monthDatesInWeeks[currentWeekNumberParam];

  useEffect(() => {
    dispatch(
      calendarActions.setCurrent({
        monthNumber: currentMonthNumberParam,
        yearNumber: currentYearNumberParam,
        weekNumber: currentWeekNumberParam
      })
    );
  }, [currentMonthNumberParam, currentYearNumberParam, currentWeekNumberParam]);


  const getPreviousWeekHandler = () => {
    // const [previousMonthNumber, updatedYear] =
    //   CalendarMonth.getPreviousMonthData(
    //     +currentMonthNumberParam,
    //     +currentYearNumberParam
    //   );

    // history.push(`/year/${updatedYear}/month/${previousMonthNumber}`);
  };

  const getNextWeekhHandler = () => {
    // const [nextMonthNumber, updatedYear] =
    //   CalendarMonth.getNextMonthData(
    //     +currentMonthNumberParam,
    //     +currentYearNumberParam
    //   );

    // history.push(`/year/${updatedYear}/month/${nextMonthNumber}`);
  };

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