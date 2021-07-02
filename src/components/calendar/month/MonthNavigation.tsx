/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/store-hooks";
import CalendarMonth from "../../../models/calendar/calendar-month";
import { calendarActions } from "../../../store/calendar-slice";

interface RouteParams {
  year: string;
  month: string;
}

const MonthNavigation: React.FC<{ monthName: string; year: number }> = (
  props
) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const params = useParams<RouteParams>();
  const currentYearNumberParam = params.year;
  const currentMonthNumberParam = params.month;

  useEffect(() => {
    dispatch(
      calendarActions.setCurrent({
        monthNumber: currentMonthNumberParam,
        yearNumber: currentYearNumberParam,
      })
    );
  }, [currentMonthNumberParam, currentYearNumberParam]);

  const getPreviousMonthHandler = () => {
    const [previousMonthNumber, updatedYear] =
      CalendarMonth.getPreviousMonthData(
        +currentMonthNumberParam,
        +currentYearNumberParam
      );

    history.push(`/year/${updatedYear}/month/${previousMonthNumber}`);
  };

  const getNextMonthHandler = () => {
    const [nextMonthNumber, updatedYear] =
      CalendarMonth.getNextMonthData(
        +currentMonthNumberParam,
        +currentYearNumberParam
      );

    history.push(`/year/${updatedYear}/month/${nextMonthNumber}`);
  };

  return (
    <nav>
      <button onClick={getPreviousMonthHandler}>{"<"}</button>
      <h1>
        {props.monthName} {props.year}
      </h1>
      <button onClick={getNextMonthHandler}>{">"}</button>
    </nav>
  );
};

export default MonthNavigation;
